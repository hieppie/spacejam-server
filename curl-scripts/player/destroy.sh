
PLAYER_ID="628c1c727840d5041c5a7f5e"
TOKEN="922f17a8e150cc4688f1081d2e2f4bf8"
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