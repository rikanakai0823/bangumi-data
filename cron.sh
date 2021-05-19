#!/bin/bash
git pull
node parse.js $1
git add . &> /dev/null
git commit -m "data update `date`" &> /dev/null
git push
