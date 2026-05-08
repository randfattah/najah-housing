const mysql = require('mysql2');
const express = require('express');

let app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

connection.connect((err) => {
  if (err) {
    console.error('Connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database successfully!');
});

connection.query('SELECT "Hello World" AS message', (err, results) => {
  if (err) throw err;
  console.log(results[0].message);
});

console.log("hello, this is DB sample");