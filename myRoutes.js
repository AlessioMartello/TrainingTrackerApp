const connection = require('./databaseConn.js');
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

// Define how to handle the body of a POST request
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(express.json());

router.get('/exercises', (req, res) => {
    var sqlQuery = 'SELECT * FROM fitnessapp.exercise';

    connection.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error executing the query: ', err);
        return res.status(500).json({ error: 'Error executing the query' });
      }
  
      return res.json(results);
    });
  });

router.post('/add-entry', (req, res) => {
  let bodyParameters = req.body
  let queryInsert =`INSERT INTO exercise (Name, Reps, Sets, \`Weight (kg)\`, Date) VALUES ("${bodyParameters.name}" ,"${bodyParameters.reps}","${bodyParameters.sets}", "${bodyParameters.weight}",CURDATE());`

    connection.query(queryInsert, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    res.sendStatus(200);
});

module.exports = router;
