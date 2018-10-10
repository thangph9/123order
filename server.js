const https = require('https');
const express = require('express');
const path = require('path');
const fs = require('fs');
const async = require("async");
//const async           = require("async");
//const bcrypt          = require("bcryptjs");
const http = require('http');
const jsonParser = require('body-parser').json();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const models = require("./settings_db");
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
var privateKey = fs.readFileSync('ssl_cert/123order.key', 'utf8');
var certificate = fs.readFileSync('ssl_cert/123order.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
app.use(jsonParser, function (req, res, next) {
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
var ObjTable = {}; 

app.post("/home",jsonParser, function (req, res) {
  var addItem = req.body.addItem + 15;
  async.series([
    (callback) =>{
      models.instance.amazon_deal_day.find({$limit:addItem,stt:1},{raw:true,allow_filtering: true}, function (err, result) {
        var arr = result.map(item => {
            return obj = {
              dealid: item.dealid,
              asin:item.asin,   
              base_price: item.base_price,
              dealstate:item.dealstate,
              dealtype:item.dealtype,
              death_clock: item.death_clock,
              img: item.img,
              legacydealid:item.legacydealid,
              link: item.link,
              offerid:item.offerid,
              position:item.position,
              price: item.price,
              reviews: item.reviews,
              review_link: item.review_link,
              sale:(item.sale!=null)?item.sale.slice(1,4):'',
              smid:item.smid,
              stt:item.stt,
              timestamp: item.timestamp + "",
              star:item.star,
              title:(item.title!=null)?item.title:'',
              widgetid:item.widgetid
            }
        });
        ObjTable.ContentAmazonDealDay = arr;
        callback(err, ObjTable)
      });
    }
  ], (err, result) => {
    if (err) console.log(err);
    res.json(result);
  })
})
app.post("/category",jsonParser,function(req,res){
  console.log(req.body.itemCate);
  async.series([
    (callback)=>{
      models.instance.category.find({categoryindex:1},{raw:true,allow_filtering: true},function(err,result){
        var arr=result.map(item=>{
          return obj={
            nodeid:item.nodeid,
            category:item.category,
            categoryindex:item.categoryindex,
            groupid:item.groupid
          }
        })
        callback(err,arr);
      })
    },
    (callback)=>{
      var query={};
      if(req.body.itemCate!=undefined){
        query={categoryindex:1,groupid:req.body.itemCate};
      }
      else{
        query={categoryindex:1}
      }
      models.instance.category.find(query,{raw:true,allow_filtering: true},function(err,result){
        var arr=result.map(item=>{
          return obj={
            nodeid:item.nodeid,
            category:item.category,
            categoryindex:item.categoryindex,
            groupid:item.groupid
          }
        })
        callback(err,arr);
      })
    }
  ],(err,result)=>{
    if (err) console.log(err);
    res.json(result);
  });
})
var PARAM_IS_PRODUCT_DETAIL={};
app.post('/product-detail',jsonParser, function (req, res) {
  params=req.body;
  async.series([
    (callback)=> { 
      models.instance.product_detail.find({ dealid:params.dealid }, function (err, result) {
        if(result.length>0) PARAM_IS_PRODUCT_DETAIL["dealid"]=params.dealid;
        callback(err, null);
      });
  },
    (callback) => { 
        models.instance.product_detail.find({ dealid:PARAM_IS_PRODUCT_DETAIL.dealid },function (err, result) {
          var arr = result.map(item => {
            return obj = {
              dealid: item.dealid,
              asin:item.asin,
              category:item.category,
              color:item.color,
              deal_of_day:item.deal_of_day,
              description: item.description,
              hugeimage: item.hugeimage,
              largeimage: item.largeimage,
              list_price:item.list_price,
              nested:item.nested,
              nodeid:item.nodeid,
              price:item.price,
              save_price:item.save_price.slice(0,5),
              smallimage: item.smallimage,
              star: item.star,
              style:item.style,
              title:(item.title!=null)?item.title:'',
            } 
          });
          ObjTable.ProductDetail = arr;
          callback(err, ObjTable);
        });
    },
    (callback) =>{
      models.instance.amazon_deal_day.find({ dealid:PARAM_IS_PRODUCT_DETAIL.dealid }, function (err, result) {
        var arr = result.map(item => {
          return obj = {
            base_price: item.base_price,
            price: item.price,
            sale:(item.sale!=null)?item.sale.slice(1,4):'',
          }
        });
        callback(err, arr[0]);
      });
    }
  ], (err, result) => {
    if (err) console.log(err);
    res.json(result);
  })
})
app.post("/landing-page",jsonParser, function (req, res) {
  var addItem = req.body.addItem + 15
  async.series([
    (callback) =>{
      models.instance.amazon_deal_day.find({ $limit: addItem,stt:1},{raw:true,allow_filtering: true}, function (err, result) {
        var arr = result.map(item => {
          return obj = {
            dealid: item.dealid,
            asin:item.asin,   
            base_price: item.base_price,
            dealstate:item.dealstate,
            dealtype:item.dealtype,
            death_clock: item.death_clock,
            img: item.img,
            legacydealid:item.legacydealid,
            link: item.link,
            offerid:item.offerid,
            position:item.position,
            price: item.price,
            reviews: item.reviews,
            review_link: item.review_link,
            sale:(item.sale!=null)?item.sale.slice(1,4):'',
            smid:item.smid,
            stt:item.stt,
            timestamp: item.timestamp + "",
            star:item.star,
            title:(item.title!=null)?item.title:'',
            widgetid:item.widgetid
          }
        });
        ObjTable.ContentAmazonDealDay = arr;
        callback(err, ObjTable)
      });
    }
  ], (err, result) => {
    if (err) console.log(err);
    res.json(result);
  })
})
app.get('/', function (req, res) {
  res.render('index');
});
app.get("/api/data", function (req, res, next) {
  res.send("Xin chao");
});
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(function (err, req, res, next) {
  if (!module.parent) console.error(err.stack);
  res.status(500).render('index');
});

app.use(function (req, res, next) {
  res.status(404).render('index');
});


var server = https.createServer(credentials, app);

if (!module.parent) {

  server.listen(443, function () {
    console.log("server running at https://123order.vn/")
  });

 
  http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
}
