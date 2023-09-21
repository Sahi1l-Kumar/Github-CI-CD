#!/bin/bash
pm2=/home/ubuntu/.nvm/versions/node/v20.7.0/bin/pm2
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use the correct Node.js version
nvm use v20.7.0
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.7.0/bin

cd Github-CI-CD
 git pull origin master
 cd server
 $pm2 kill
 $pm2 start index.js
