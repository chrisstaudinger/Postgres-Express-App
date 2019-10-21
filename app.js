const Sequelize = require('sequelize');
const express = require('express')

// Application
const app = express();

// Additional Imports
const morgan = require('morgan');

const PORT = process.env.PORT || 5000

//Global Middleware
app.use(morgan('dev'));
app.use(express.json());

const sequelize = new Sequelize('doctors_db', 'christopherstaudinger', null, {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(PORT, console.log(`Listening on Port ${PORT}`))