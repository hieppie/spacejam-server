#!/bin/sh

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="0668bec6ee36d24c8c87ff28b544b29a"


curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
