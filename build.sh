#!/usr/bin/env bash
rm ./*.html
rm -rf ./gitbook/
rm -rf ./components/
cd src
gitbook build
mv ./_book/* ../
rm -rf ./_book/
