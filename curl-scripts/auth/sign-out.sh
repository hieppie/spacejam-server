#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
# TOKEN="c9fbbcb8550db6b7987f07680f5c9fc1"
# TOKEN="7c4dc142240fa3d17b0eb1aecb723f48"
# TOKEN="e78cd662f64e34faca29aa9a0b86d719"
TOKEN="0668bec6ee36d24c8c87ff28b544b29a"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
