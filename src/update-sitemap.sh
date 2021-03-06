#!/bin/bash
# Use "bash src/update-sitemap.sh"

set -eu

npx babel-node src/generate-sitemap.js > sitemap.xml
d=`date +"%Y/%m/%d %k:%M:%S %z"`
git add sitemap.xml
git diff --cached --exit-code --quiet || git commit -m "Sitemap update at $d"
