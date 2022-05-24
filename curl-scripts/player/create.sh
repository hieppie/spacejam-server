 
 TOKEN="922f17a8e150cc4688f1081d2e2f4bf8"
 NAME="AYEE man"
 PTS="20"
 RBS="10"
 AST="5"
 THREE="3"
 STL="2"
 BLK="2"
 FG=".440"
 FT=".910"
 TO="2"
 TEAMID="628bd1b80b8fe2475e675181"
 USER_ID="628bcd7bf70e754648bf7151"

  curl 'http://localhost:4741/players' \
    --include \
    --request POST \
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