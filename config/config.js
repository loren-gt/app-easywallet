module.exports = {
  development: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
  },
  test: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
  },
  production: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dialect: 'mysql',
  },
};
