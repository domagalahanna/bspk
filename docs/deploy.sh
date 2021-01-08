set -e
yarn build
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/domagalahanna/bspk.git master:gh-pages
cd -