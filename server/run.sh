#!/bin/bash

sleep 10
cd common
./node_modules/.bin/sequelize db:migrate
cd ..
/usr/local/bin/node babel-index.js

