
PLAYER_ID="628be2611134eb5925a3b555"
TOKEN="5aeba50a3dc8194f321acab97334c07a"
TEAM_ID="628bd1b80b8fe2475e675181"


curl "http://localhost:4741/players/${PLAYER_ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "player": {
      "teamId": "'"${TEAM_ID}"'"
    }
  }'