#! /usr/bin/env sh

# Write config file
node configByEnv.js

if [ $# -eq 1 ] && [ $1 = "start" ]; then
    pm2-runtime "server/app.js"
else
    npm "$@"
fi
