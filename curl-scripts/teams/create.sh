#!/bin/bash

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="0668bec6ee36d24c8c87ff28b544b29a"
NAME="Atlanta Hawks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "team": {
      "name": "'"${NAME}"'"
    }
  }'

echo
