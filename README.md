# Wine Fanatic

## Description

Wine Fanatic is a web-based application that enables the user to post wines & review them . The user is able to add wines to their virtual cellar and update the amount of wine .


-A user will be able to sign up for an account.

-A user will be able to login after signing up for an account.

-A user will be able to post a new wine.

-A user will be able to view and post reviews to all wines that are posted.

-A user will be able to view and update wines that they posted.

-A user will be able to view, update and delete reviews that they posted.

-A user will be able to add wine to their virtual cellar

-A user will be able to view other user's cellars 

-A user will be able to view , update and delete wines that the added to their cellar


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Wine Fanatic account



## Setup

-Download, set Ruby version and start Sqlite database

```console
$ git clone https://github.com/eastflatbushbk/matchday 
```

-Install Rails dependencies. migrate and seed database

```console
$ bundle install
$ rails db:migrate db:seed
```
-Start Rails server

```console
$ rails s
```
-Install React dependencies and start server

```console
$ npm install --prefix client
$ npm start --prefix client
```



