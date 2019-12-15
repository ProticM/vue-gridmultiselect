#!/usr/bin/env sh

set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ProticM/vue-gridmultiselect.git master:gh-pages

cd -