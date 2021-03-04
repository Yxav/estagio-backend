const dotenv = require('dotenv')
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

dotenv.config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE,
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
};
