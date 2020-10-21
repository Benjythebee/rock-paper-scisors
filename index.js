const express = require('express')
const path = require('path')
var ejs = require('ejs')
var app = express()
.set('view engine', 'ejs')
.set('views', __dirname + '/pages'); // get the ejs pages

app.use(express.static('src'));// get the content (such as scripts)

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen('8000')