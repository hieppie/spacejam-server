#!/bin/bash

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="564275de0d4f0ee58d732cf371c7f5f7"
NAME="Ha Noi Buffaloes"

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
