#!/bin/sh

API="http://localhost:4741"
URL_PATH="/teams"
TOKEN="63905684350e6933fbc5f1cfc80eb724"


curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
