#!/bin/sh

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="922f17a8e150cc4688f1081d2e2f4bf8"


curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
