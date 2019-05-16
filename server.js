const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');

app.use(bodyParser.json()); 
app.use(session({
  secret: 'yoloswag',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));


require('./routes')(app)


app.listen(8000, function() {
  console.log("Listening on port 8000")
});