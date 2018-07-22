#!/bin/bash
# Use "bash update-sitemap.sh"
php sitemap.php > sitemap.xml
d=`date +"%Y/%m/%d %k:%M:%S"`
git add sitemap.xml
git diff --cached --exit-code --quiet || git commit -m "Sitemap update at $d"
