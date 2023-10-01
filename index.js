const express = require('express')
const app = express()
const port = 8000
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport-local')
const mongoStore = require('connect-mongo');
const session = require('express-session');

// Set assets folder as static 
app.use(express.static('./assets'));

// MiddelWare for post requests
app.use(express.urlencoded());

//Use Express Layouts
app.use(expressLayouts);
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)


//Set template engine as EJS
app.set('view engine','ejs');
app.set('views','./views');


// Creating Session For Authentication Using Passport Js
app.use(session({
  name: 'consultancy',
  secret: 'qwerty key',
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: (1000 * 60 * 100)
  },
  store: mongoStore.create(
    {
      mongoUrl: process.env.DATABASE,
      autoRemove: 'disabled'
    },
    function(err){console.log("Error in Storing the Session into Mongodb")}
  )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passportLocal.setAuthenticationUser);


// Set routes folder to routes
app.use('/',router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})