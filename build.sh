#!/usr/bin/env bash
rm ./*.html
cd src
gitbook build
mv ./_book/* ../
rm -rf ./_book/
