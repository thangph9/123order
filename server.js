const https   = require('https');
const express = require('express');
const path    = require('path');

const fs      = require('fs');
//const async           = require("async");
//const bcrypt          = require("bcryptjs");
const http          = require('http');
const jsonParser	= require('body-parser').json();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));

var privateKey  = fs.readFileSync('ssl_cert/123order.key', 'utf8');
var certificate = fs.readFileSync('ssl_cert/123order.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
app.use( jsonParser,function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
//
    // Pass to next layer of middleware
    next();
});
app.get('/', function(req, res){
	res.render('index');
});
app.get("/api/data",function(req,res,next){
   res.send("Xin chao"); 
});

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(function(err,req,res,next){
	if (!module.parent) console.error(err.stack);
	res.status(500).render('index');
});

app.use(function(req, res, next){
    res.status(404).render('index');
});



var server = https.createServer(credentials, app);

if(!module.parent){
    
  server.listen(443, function(){
    console.log("server running at https://123order.vn/")
  });    
  
  app.listen(80, () => console.log('Example app listening on port 80!'));
}