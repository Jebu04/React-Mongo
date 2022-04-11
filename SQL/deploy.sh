#!/bin/sh
npm run build
rm -rf ../../SQL/HerokuExpress/build
cp -r build ../../SQL/HerokuExpress/