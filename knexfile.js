const dotenv = require('dotenv')
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

dotenv.config()

module.exports = {
  development: {
    client: 'pg',
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
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
