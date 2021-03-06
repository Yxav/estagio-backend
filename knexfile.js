const dotenv = require('dotenv')
const path = require('path');
const pg = require('pg')

pg.defaults.ssl = true

const parse = require(process.env.DATABASE_URL).parse;
const pgconfig = parse(process.env.DATABASE_URL);
pgconfig.ssl = { rejectUnauthorized: false };

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

dotenv.config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/database/migrations',
    },
    seeds: {
      directory: __dirname + '/src/database/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: pgconfig,
    migrations: {
      directory: __dirname + '/src/database/migrations',
    },
    seeds: {
      directory: __dirname + '/src/database/seeds',
    },
    useNullAsDefault: true,
  },
};
