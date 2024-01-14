```
yarn add vue@2.7.16
yarn remove vue-template-compiler
mv node_modules/vue ./libs/@example/
git add -A; git commit -m 'chore(vue2.7): upgrade to 2.7.16'

### Swap the version numbers (just for local verification)

# If you're on Mac OS:
find libs \( ! -regex '.*/\..*' \) -type f | LC_ALL=C xargs sed -i '' 's/2\.7\.16/2.7.16-example/g'
# If you're on any other *nix based system, uncomment next line
# find libs \( ! -regex '.*/\..*' \) -type f | xargs sed -i 's/2\.7\.16/2.7.16-example/g'

rm -rf node_modules/vue
yarn install
```