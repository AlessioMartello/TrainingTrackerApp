var mysql = require('mysql2');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'rwPmY3VBnquHbkDBRKe!jBKyVKNdV^@9CYW6b8Y',  
    database: 'fitnessapp'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection