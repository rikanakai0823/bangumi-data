#!/bin/bash
git pull
node parse.js $1
git add .
git commit -m "data update `date`"
git push
