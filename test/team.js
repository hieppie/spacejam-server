process.env.TESTENV = true

let Team = require('../app/models/team.js')
let User = require('../app/models/user')

const crypto = require('crypto')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
chai.should()

chai.use(chaiHttp)

const token = crypto.randomBytes(16).toString('hex')
let userId
let teamId

describe('Teams', () => {
  const teamParams = {
    title: '13 JavaScript tricks SEI instructors don\'t want you to know',
    text: 'You won\'believe number 8!'
  }

  before(done => {
    Team.deleteMany({})
      .then(() => User.create({
        email: 'caleb',
        hashedPassword: '12345',
        token
      }))
      .then(user => {
        userId = user._id
        return user
      })
      .then(() => Team.create(Object.assign(teamParams, {owner: userId})))
      .then(record => {
        teamId = record._id
        done()
      })
      .catch(console.error)
  })

  describe('GET /teams', () => {
    it('should get all the teams', done => {
      chai.request(server)
        .get('/teams')
        .set('Authorization', `Token token=${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.teams.should.be.a('array')
          res.body.teams.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('GET /teams/:id', () => {
    it('should get one team', done => {
      chai.request(server)
        .get('/teams/' + teamId)
        .set('Authorization', `Token token=${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.team.should.be.a('object')
          res.body.team.title.should.eql(teamParams.title)
          done()
        })
    })
  })

  describe('DELETE /teams/:id', () => {
    let teamId

    before(done => {
      Team.create(Object.assign(teamParams, { owner: userId }))
        .then(record => {
          teamId = record._id
          done()
        })
        .catch(console.error)
    })

    it('must be owned by the user', done => {
      chai.request(server)
        .delete('/teams/' + teamId)
        .set('Authorization', `Bearer notarealtoken`)
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should be succesful if you own the resource', done => {
      chai.request(server)
        .delete('/teams/' + teamId)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(204)
          done()
        })
    })

    it('should return 404 if the resource doesn\'t exist', done => {
      chai.request(server)
        .delete('/teams/' + teamId)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })

  describe('POST /teams', () => {
    it('should not POST an team without a title', done => {
      let noTitle = {
        text: 'Untitled',
        owner: 'fakedID'
      }
      chai.request(server)
        .post('/teams')
        .set('Authorization', `Bearer ${token}`)
        .send({ team: noTitle })
        .end((e, res) => {
          res.should.have.status(422)
          res.should.be.a('object')
          done()
        })
    })

    it('should not POST an team without text', done => {
      let noText = {
        title: 'Not a very good team, is it?',
        owner: 'fakeID'
      }
      chai.request(server)
        .post('/teams')
        .set('Authorization', `Bearer ${token}`)
        .send({ team: noText })
        .end((e, res) => {
          res.should.have.status(422)
          res.should.be.a('object')
          done()
        })
    })

    it('should not allow a POST from an unauthenticated user', done => {
      chai.request(server)
        .post('/teams')
        .send({ team: teamParams })
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should POST an team with the correct params', done => {
      let validTeam = {
        title: 'I ran a shell command. You won\'t believe what happened next!',
        text: 'it was rm -rf / --no-preserve-root'
      }
      chai.request(server)
        .post('/teams')
        .set('Authorization', `Bearer ${token}`)
        .send({ team: validTeam })
        .end((e, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('team')
          res.body.team.should.have.property('title')
          res.body.team.title.should.eql(validTeam.title)
          done()
        })
    })
  })

  describe('PATCH /teams/:id', () => {
    let teamId

    const fields = {
      title: 'Find out which HTTP status code is your spirit animal',
      text: 'Take this 4 question quiz to find out!'
    }

    before(async function () {
      const record = await Team.create(Object.assign(teamParams, { owner: userId }))
      teamId = record._id
    })

    it('must be owned by the user', done => {
      chai.request(server)
        .patch('/teams/' + teamId)
        .set('Authorization', `Bearer notarealtoken`)
        .send({ team: fields })
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should update fields when PATCHed', done => {
      chai.request(server)
        .patch(`/teams/${teamId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ team: fields })
        .end((e, res) => {
          res.should.have.status(204)
          done()
        })
    })

    it('shows the updated resource when fetched with GET', done => {
      chai.request(server)
        .get(`/teams/${teamId}`)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.team.title.should.eql(fields.title)
          res.body.team.text.should.eql(fields.text)
          done()
        })
    })

    it('doesn\'t overwrite fields with empty strings', done => {
      chai.request(server)
        .patch(`/teams/${teamId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ team: { text: '' } })
        .then(() => {
          chai.request(server)
            .get(`/teams/${teamId}`)
            .set('Authorization', `Bearer ${token}`)
            .end((e, res) => {
              res.should.have.status(200)
              res.body.should.be.a('object')
              // console.log(res.body.team.text)
              res.body.team.title.should.eql(fields.title)
              res.body.team.text.should.eql(fields.text)
              done()
            })
        })
    })
  })
})
