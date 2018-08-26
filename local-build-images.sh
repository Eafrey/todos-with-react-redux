#!/usr/bin/env bash

REGISTRY="nexus.hlp.fun:5001"
PACKAGE_NAME="front-end"
VERSION_PREFIX="0.0"

IMAGE_NAME="chensen/todo_front_end"

npm install
npm run deploy

rm -rf node_modules/

npm install --production

docker build -t ${IMAGE_NAME}:latest .

