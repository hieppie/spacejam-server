
 PLAYER_ID="628be2611134eb5925a3b555"
 TOKEN="0668bec6ee36d24c8c87ff28b544b29a"
 NAME="Vegeta"
 PTS="26"
 RBS="7"
 AST="6"
 THREE="1"
 STL="3"
 BLK="1"
 FG=".540"
 FT=".900"
 TO="3"
 TEAMID="628bd1b80b8fe2475e675181"
 USER_ID="628bcd7bf70e754648bf7151"



curl "http://localhost:4741/players/${PLAYER_ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
     "player": {
        "name": "'"${NAME}"'",
        "points": "'"${PTS}"'",
        "rebounds": "'"${RBS}"'",
        "assists": "'"${AST}"'",
        "threeptm": "'"${THREE}"'",
        "steals": "'"${STL}"'",
        "blocks": "'"${BLK}"'",
        "fgpct": "'"${FG}"'",
        "ftpct": "'"${FT}"'",
        "turnovers": "'"${TO}"'",
        "teamId": "'"${TEAMID}"'",
        "owner": "'"${USER_ID}"'"
    }
  }'