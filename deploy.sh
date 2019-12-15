#!/usr/bin/env sh

npm run test
npm run clean
npm run build
export GITHUB_TOKEN=\"bb3d6ce331b62ca6876d026c3c53a0ae870c1115\"
npm run release