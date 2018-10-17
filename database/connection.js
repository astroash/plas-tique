const { Pool } = require('pg');
const url = require('url');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password: password,
};

console.log(options);


options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);