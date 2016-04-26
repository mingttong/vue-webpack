#!/usr/bin/env bash
rm ./*.html
rm -rf ./gitbook/
cd src
gitbook build
mv ./_book/* ../
rm -rf ./_book/
