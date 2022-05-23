const express = require('express')
// const { resetWatchers } = require('nodemon/lib/monitor/watch')
const passport = require('passport')
const router = express.Router()
const requireToken = passport.authenticate('bearer', { session: false })

// const handle404 = require('./../lib/custom_errors')

const Team = require('./../models/team')

router.post('/players', requireToken, (req, res, next) => {
	const questionData = req.body.question

	const teamId = playerData.teamId

	Team.findById(teamId)
		// .then(handle404)
		.then((team) => {
			team.questions.push(playerData)

			return team.save()
		})
		.then((team) => res.status(201).json({ team: team }))
		.catch(next)
})

router.patch('/questions/:questionID', requireToken, (req, res, next) => {
	const playerID = req.params.playerID
	const playerData = req.body.player
	const playerID = playerData.teamId

	Team.findById(teamID)
		// .then(handle404)
		.then((team) => {
			const player = team.players.id(playerID)

			player.set(playerData)

			return Team.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

router.delete('/players/:playerID', requireToken, (req, res, next) => {
	const playerID = req.params.playerID
	const teamID = req.body.player.teamId

	Team.findById(teamID)
		// .then(handle404)
		.then((team) => {
			const player = team.players.id(playerID)

			player.remove()

			return team.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router
