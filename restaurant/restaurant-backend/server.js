const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// MySQL
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "seng401",
  password: "12345",
  database: "mealwrap",
});

app.listen(port);
console.log("Running on port", port);

connection.connect((err) => {
  if (err) console.log(err);
  console.log("Successfully connected to the database");
});

// connection.query('SELECT * FROM t_merchant', (error, results, fields) => {
//   if (error) throw error;

//   if (results.length > 0)
//   console.log('The solution is: ', results)
// });

/*
Login

Input:
{
  phone: number,
  password: string
}

Output:
{
  id: (null, number)
}

If id is null that means the login failed
*/
app.post("/login", (req, res) => {
  const phone = req.body.phone;
  const password = req.body.password;
  console.log(phone);
  console.log(password);

  let sql = "SELECT * FROM t_merchant WHERE phone=? AND password=?";
  connection.query(sql, [phone, password], (err, rows) => {
    if (err) console.log(err);
    else {
      if (rows.length == 0) {
        res.send({ id: null });
      } else {
        const merchant_id = rows[0].id;
        console.log(merchant_id);
        res.send({ id: merchant_id });
      }
    }
  });
});

/*
Retrieves a restaurant's menu

Input:
restaurant ID from query params (id)

output:
[
  {
    id: (number, null),
    merchant_id: number,
    name: string,
    price: number,
    percent_off: number,
    description: string,
    image: ???
  }, ...
]
*/

app.get("/menu", (req, res) => {
  let sql = "SELECT * FROM t_product WHERE merchant_id=?";
  connection.query(sql, [req.query.id], (err, rows) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

/*
Overwrites a restaurant's menu with the supplied input

Input:
{
  id: int,
  menu: [
    {
      id: number,
      merchant_id: number,
      name: string,
      price: number,
      percent_off: number,
      description: string,
      image: ???
    }, ...
  ]
}

Output:
{
  success: boolean
}
*/

app.post("/menu", (req, res) => {
  let sql = "DELETE FROM t_product WHERE merchant_id=?";
  let failure = false;

  const id = req.body.id;
  const menu = req.body.menu;

  //check if the merchant_id in any of the items is different from the merchant_id input
  menu.forEach((item) => {
    if (item.merchant_id !== id) {
      failure = true;
    }
  });

  if (!failure) {
    connection.query(sql, [id], (err) => {
      if (err) {
        console.log(err);
        failure = true;
      }
    });
  }
  if (!failure) {
    menu.forEach((item) => {
      let sql = "";
      let inputs = "";
      if (item.id === null) {
        sql =
          "INSERT INTO t_product (merchant_id,name,price,percent_off,description,image) VALUES (?,?,?,?,?,?)";
        inputs = [
          item.merchant_id,
          item.name,
          item.price,
          item.percent_off,
          item.description,
          item.image,
        ];
      } else {
        sql =
          "INSERT INTO t_product (id,merchant_id,name,price,percent_off,description,image) VALUES (?,?,?,?,?,?,?)";
        inputs = [
          item.id,
          item.merchant_id,
          item.name,
          item.price,
          item.percent_off,
          item.description,
          item.image,
        ];
      }
      connection.query(sql, inputs, (err) => {
        if (err) {
          console.log(err);
          failure = true;
        }
      });
    });
  }
  res.send({ success: !failure });
});

/*
Get all discounted items at a restaurant

Input: merchant id from query params (id)

Output: 
[
  {
    id: number,
    merchant_id: number,
    name: string,
    price: number,
    percent_off: number,
    description: string,
    image: ???
  }, ...
]
*/

app.get("/promotions", (req, res) => {
  let sql =
    "SELECT * FROM t_product WHERE merchant_id = ? AND percent_off <> 0";
  connection.query(sql, [req.query.id], (err, rows) => {
    if (err) console.log(err);
    else {
      res.send(rows);
    }
  });
});

/*
Update a product, setting its percent_off field to the supplied value

Input:
{
  product_id: number,
  percent_off: number
}

Output:
{
  success: boolean
}
*/

app.put("/promotions", (req, res) => {
  const id = req.body.product_id;
  const percent_off = req.body.percent_off;
  let failure = false;

  let sql = "UPDATE t_product SET percent_off=? WHERE id=?";
  connection.query(sql, [percent_off, id], (err) => {
    if (err) {
      console.log(err);
      failure = true;
    }
  });
  res.send({ success: !failure });
});

/*
Adds a new restaurant to the database

input: 
{
  phone: number,
  password: string,
  name: string,
  description: string,
  address: string
}

output:
{
  success: boolean
}
*/

app.post("/register", (req, res) => {
  const merchant = req.body;
  let failure = false;

  let sql =
    "INSERT INTO t_merchant (phone,password,name,description,address) VALUES (?,?,?,?,?)";
  connection.query(
    sql,
    [
      merchant.phone,
      merchant.password,
      merchant.name,
      merchant.description,
      merchant.address,
    ],
    (err) => {
      if (err) {
        console.log(err);
        failure = true;
      }
    }
  );
  res.send({ success: !failure });
});

/*
Retrieves basic merchant information for the home menu

input: Restaurant id from query params (id)

output:
{
  name: string,
  rating: number
}
*/

app.get("/home", (req, res) => {
  const merchant_id = req.query.id;

  let sql = "SELECT name, rating FROM t_merchant WHERE id=?";

  connection.query(sql, [merchant_id], (err, rows) => {
    if(err) console.log(err);
    else {
      if(rows.length > 0) {
        res.send(rows[0]);
      } else {
        res.send({});
      }
    }
  })
})

// SQLite:
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

// // sqlite
// const sqlite3 = require('sqlite3').verbose()
// //const md5 = require('md5')

// const DBSOURCE = "../restaurant.db"

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//         // Cannot open database
//         console.error(err.message)
//         throw err
//     } else {
//         console.log('Connected to the SQLite database.')
//     }
// })

// var Users = [];
// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/menu', function (req, res) {
//     console.log(req.query.save)
//     // When the page is loaded
//     if (req.query.save == null) {
//         res.send('/menu');
//     }
//     // Saving data
//     else if (req.query.save == "true") {
//         console.log(req.query.items);
//         req.query.items.forEach((row) => {
//             db.run(row, [], (err, rows) => {
//                 if (err) {
//                     throw err;
//                 }
//             });
//         });
//         res.send('');
//     }
//     // Getting the data if already on page
//     else {
//         var input = "SELECT * FROM products ;";
//         results = new Array();

//         db.all(input, [], (err, rows) => {
//             if (err) {
//                 throw err;
//             }

//             rows.forEach((row) => {
//                 if (row != null) {
//                     results.push(row);
//                 }
//             });

//             res.send(results);
//         });
//     }
// });

// app.get('/promotions', function (req, res) {
//     res.send('/promotions');
// });

// // create a GET route
// app.get('/home', function (req, res) {
//     var input = "SELECT * FROM managers WHERE username='" + req.query.username + "' AND password='" + req.query.password + "';";
//     //var input = "SELECT * FROM managers";
//     console.log(input);
//     db.get(input, [], (err, result, fields) => {
//         console.log(result)
//         if (result != null) {
//             res.send('/home');
//         }
//         else {
//             res.send('invalid');
//             //res.render('<p>some html</p>')
//         }
//     })
// });

// MySQL Password: a123
