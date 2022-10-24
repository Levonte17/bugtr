//DEPENDENCIES
const express = require('express');
const app = express();
//REQUIRE
const budget = require('./models/budget');
const port = 3000
// GET LISTEN
app.get('/', (req, res) => {
res.render('index.ejs');
});
//MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
//REDIRECT
app.get('/', (req, res) => res.redirect('budget'));

//LISTEN
app.listen(port, () =>{
console.log(`welcome To Mr. Budget ${port}`);
});