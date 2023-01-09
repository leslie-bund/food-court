## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

To setup the app, provide a secret key to the JsonWebToken Service used for authenticating users. This string is saved as an environment variable (or in an .env file) as below

```bash
# Save to environment variable or .env file
$ JWT_SECRET='<secret string for authentication>'
```

To start the server in different modes run the following commands
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Setup Database

To setup a database to work with, visit [ElephantSQL](http://api.elephantsql.com) and create a free postgresSQL databse and retrieve the connection string. Store the connection string as an environment variable (or in an .env file) as below 

```bash
# Store the Database connection string under this name
$ DB_URI='postgres://<user>:<password>@rogue.db.elephantsql.com/<root>'

```

```bash
# Run migrations
$ npm run migrate:up

# Discard current migrations
$ npm run migrate:down

# Seed provided default values into the database
$ npm run seed:db
```

## API Usage

Access the hosted [API](food-court-production.up.railway.app) here.

The system has two default users whom can login using the following details.

```js
{
    username: 'john',
    password: 'changeme',
    role: 'ADMIN',
},
{
    username: 'maria',
    password: 'guess',
    role: 'USER',
},
```

## Available Routes

The Following routes are available

| Method | Path                              |
| :----  |    :-------------------------:    |
| POST   | /brands/:brandId/addons           |
| GET    | /brands/:brandId/addons           |
| GET    | /brands/:brandId/addons/:addonId  |
| PATCH  | /brands/:brandId/addons/:addonId  |
| DELETE | /brands/:brandId/addons/:addonId  |
| POST   | /brands/:brandId/addon-categories |
| :----- |    :----------------------------: |
| POST   | /auth/login                       |
| GET    | /auth/profile                     |


Kindly Inspect the DTO's to know the shape of the request object for each of the routes above

## License

This Project was built by [Leslie Chukwunweike](https://github.com/leslie-bund).
