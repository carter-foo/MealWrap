const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// MySQL
/*
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a123',
  database: 'login',
});

connection.connect();

connection.query('SELECT * FROM User', (error, results, fields) => {
  if (error) throw error;

  if (results.length > 0)
  console.log('The solution is: ', results[0])
});
*/

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// sqlite
const sqlite3 = require('sqlite3').verbose()
//const md5 = require('md5')

const DBSOURCE = "../restaurant.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
    }
})

var Users = [];
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/menu', function (req, res) {
    console.log(req.query.save)
    // When the page is loaded
    if (req.query.save == null) {
        res.send('/menu');
    }
    // Saving data
    else if (req.query.save == "true") {
        console.log(req.query.items);
        req.query.items.forEach((row) => {
            db.run(row, [], (err, rows) => {
                if (err) {
                    throw err;
                }
            });
        });
        res.send('');
    }
    // Getting the data if already on page
    else {
        var input = "SELECT * FROM products ;";
        results = new Array();

        db.all(input, [], (err, rows) => {
            if (err) {
                throw err;
            }

            rows.forEach((row) => {
                if (row != null) {
                    results.push(row);
                }
            });

            res.send(results);
        });
    }
});

app.get('/promotions', function (req, res) {
    res.send('/promotions');
});

// create a GET route
app.get('/home', function (req, res) {
    var input = "SELECT * FROM managers WHERE username='" + req.query.username + "' AND password='" + req.query.password + "';";
    //var input = "SELECT * FROM managers";
    console.log(input);
    db.get(input, [], (err, result, fields) => {
        console.log(result)
        if (result != null) {
            res.send('/home');
        }
        else {
            res.send('invalid');
            //res.render('<p>some html</p>')
        }
    })
});

// MySQL Password: a123