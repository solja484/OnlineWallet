# onlinewallet

## Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```
#### Compiles and minifies for production
```
yarn build
```
#### Run your unit tests
```
yarn test:unit
```

### Deploy on heroku
```
docker build -t onlinewallet:latest .
```
```
heroku login
heroku container:login
```
```
heroku container:push web -a onlinewallet2021
```
```
heroku container:release web -a onlinewallet2021
```