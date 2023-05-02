const express = require('express');
const app = express();
const PORT = 5000

// Serve static files from the public directory
app.use(express.static('public'))
app.use('/css', express.static(__dirname, + 'public/css'))
app.use('/img', express.static(__dirname, + 'public/img'))
app.use('/js', express.static(__dirname, + 'public/js'))

app.set('views', './views');
app.set('view engine', 'ejs')

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.render('index')
});

// Start the server on port 5000
app.listen(5000, () => console.log('Server started on http://localhost:5000/'));
