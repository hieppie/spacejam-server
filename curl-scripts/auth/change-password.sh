#!/bin/bash

API="http://localhost:4741"
URL_PATH="/change-password"
TOKEN='c9fbbcb8550db6b7987f07680f5c9fc1'
OLDPW='hello'
NEWPW='hello'

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
