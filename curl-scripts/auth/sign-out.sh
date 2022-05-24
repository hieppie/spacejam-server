#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
# TOKEN="c9fbbcb8550db6b7987f07680f5c9fc1"
# TOKEN="7c4dc142240fa3d17b0eb1aecb723f48"
# TOKEN="e78cd662f64e34faca29aa9a0b86d719"
TOKEN="564275de0d4f0ee58d732cf371c7f5f7"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
