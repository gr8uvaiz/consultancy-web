const express = require('express')
const app = express()
const port = 8000
const expressLayouts = require('express-ejs-layouts');
const router = require('./routes');
const db = require('./config/mongoose');

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

// Set routes folder to routes
app.use('/',router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})