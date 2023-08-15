#!/bin/bash

FILE=./site.zip
if test -f "$FILE"; then
    echo "removing old build file"
    rm ./site.zip
fi

npm run build
cd ./dist
zip -r ../site.zip ./*

figlet "Site built!"
sleep 3
clear
