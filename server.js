//DEPENDENCIES
const express = require('express');
const app = express();
//REQUIRE
const budget = require('./models/budget');
const port = 3000
// GET LISTEN
app.get('/', (req, res) => {
res.send('Hello Adult Life!');
});
//MIDDLEWARE
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
//REDIRECT
app.get('/', (req, res) => res.redirect('/budget'));

//HOME/INDEX
app.get('/budget', (req, res) => {
res.render('index.ejs', {budget: budget}
    );
});
// NEW ROUTE
app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
    });
//POST/CREATE ROUTE
app.post('/budget', (req, res) => {
    
    budget.push(req.body);    
    res.redirect('/budget')   
});
//SHOW 
app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', ({budget: budget[req.params.id]}));  
});
//LISTEN
app.listen(port, () =>{
console.log(`welcome To Mr. Budget ${port}`);
});