const https   = require('https');
const express = require('express');
const path    = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));
app.get('/', function(req, res){
	res.render('index');
});
app.get("/api/data",function(req,res,next){
   res.send("Xin chao"); 
});


app.use(function(err,req,res,next){
	if (!module.parent) console.error(err.stack);
	res.status(500).render('index');
});

app.use(function(req, res, next){
    res.status(404).render('index');
});
// Serve the files on port 3000.
//var server = https.createServer(credentials, app);

if(!module.parent){
  /*
  server.listen(8443, function(){
    console.log("server running at https://henhoradio.net/")
  });
  */
  app.listen(8080, () => console.log('Example app listening on port 8080!'));
}