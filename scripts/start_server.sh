#!/bin/bash

cd /var/www/nodeapp

pkill node || true

nohup node app.js > app.log 2>&1 &
