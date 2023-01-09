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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
