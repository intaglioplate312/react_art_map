# react_art_map
Crowdsourced public art map of Chicago

##Project Requirements
```
Use ReactJS or Angular
Use Node and Express Server
Backed by MySQL with Sequelize ORM
** using Get and Post Routes
Deploy using Heroku
Utilize two libraries, packages, technologies not discussed
Involve authentication of users in some way
Polished fronted
Folder structure meets MVC Paradigm
Good quality coding standards(indentation, scoping, naming)
```
Initial Package Set Up
# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
