const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// open the database
let db = new sqlite3.Database('./mydatabase.db');


const query = "SELECT * FROM lineup";
db.all(query, (err, rows) => {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});

const query2 = "SELECT * FROM stages";
db.all(query2, (err, rows) => {
  if (err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});


const express = require('express');
const app = express();
const PORT = 5000

// Serve static files from the public directory
app.use(express.static('public'));
app.use('/css', express.static(__dirname, + 'public/css'));
app.use('/img', express.static(__dirname, + 'public/img'));
app.use('/js', express.static(__dirname, + 'public/js'));

app.set('views', './views');
app.set('view engine', 'ejs')

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index')
});


app.get('/lineup', (req, res) => {
  const query = "SELECT * FROM lineup";
  db.all(query, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.render('lineup', { lineup: rows });
    }
  });
});

app.get('/stages', (req, res) => {
  const query2 = "SELECT * FROM stages";
  db.all(query2, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.render('stages', { stages: rows });
    }
  });
});

app.use(express.json());

app.use(express.urlencoded());

app.get('/', function (req, res) {
  res.sendFile('index');
});

app.post('/',(req, res) => {
  res.send(req.body);
  
});

// Start the server on port 5000
app.listen(5000, () => console.log('Server started on http://localhost:5000/'));
