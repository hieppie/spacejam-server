#!/bin/sh

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="5aeba50a3dc8194f321acab97334c07a"


curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
