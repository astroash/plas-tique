const { Pool } = require('pg');

const options = {
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
}

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);