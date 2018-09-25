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
var ObjTable = {
  HideEbayTopHot: [
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí 111111111111111111111111',
      from: 'Việt Nam',
      price: '4.000.000 VND',
      salePrice: '2.500.000 VND',
      linkImg: '/img/ramdisk_crop_182424559_DWpYsp.jpg'
    },
    {
      id: 'img2',
      detail: 'Đây là bức ảnh của Trí 2222222222222222222222222',
      from: 'Lào',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182442219_xd6qp.jpg'
    },
    {
      id: 'img3',
      detail: 'Đây là bức ảnh của Trí 33333333333333333333333333',
      from: 'Thái Lan',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182442233_rtwM.jpg'
    },
    {
      id: 'img4',
      detail: 'Đây là bức ảnh của Trí 4444444444444444444444444',
      from: 'CampuChia',
      price: '5.000.000 VND',
      salePrice: '3.000.00 VND',
      linkImg: '/img/ramdisk_crop_182462746_ERbax7P.jpg'
    }
  ],
  HideAmazonTopHot: [
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí trong phần ẩn của Amazon',
      from: 'Việt Nam',
      price: '1.500.000 VND',
      salePrice: '7.500.00 VND',
      linkImg: '/img/ramdisk_crop_182424559_DWpYsp.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí ở trong phần ẩn của amazon',
      from: 'Trung Quốc',
      price: '2.000.000 VND',
      salePrice: '1.200.000 VND',
      linkImg: '/img/ramdisk_crop_182442219_xd6qp.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí trong phần ẩn của Amazon',
      from: 'Myanma',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182442233_rtwM.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí trong phần ẩn của Amazon',
      from: 'Cuba',
      price: '1.000.000 VND',
      salePrice: '5.000.00 VND',
      linkImg: '/img/ramdisk_crop_182462746_ERbax7P.jpg'
    }
  ],
  HideTopStoreTopHot: [
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí',
      from: 'Việt Nam',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182424559_DWpYsp.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí',
      from: 'Việt Nam',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182442219_xd6qp.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí',
      from: 'Việt Nam',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182442233_rtwM.jpg'
    },
    {
      id: 'img1',
      detail: 'Đây là bức ảnh của Trí',
      from: 'Việt Nam',
      price: '3.000.000 VND',
      salePrice: '1.500.000 VND',
      linkImg: '/img/ramdisk_crop_182462746_ERbax7P.jpg'
    }
  ],
  ContentSale: [
    {
      id: 'anhgai1',
      linkanh: '/img/anh-girl-xinh-9x-10.jpg'
    },
    {
      id: 'anhgai2',
      linkanh: '/img/anh-girl-xinh-9x-kute-16.jpg'
    },
    {
      id: 'anhgai3',
      linkanh: '/img/hinh-anh-girl-sinh-2000-4.jpg'
    },
    {
      id: 'anhgai4',
      linkanh: '/img/hinh-anh-girl-xinh-mien-tay-de-thuong.jpg'
    }
  ]
};
app.post("/home",jsonParser, function (req, res) {
  var addItem = req.body.addItem + 15
  async.series([
    (callback) =>{
      models.instance.amazon_deal_day.find({ $limit: addItem }, function (err, result) {
        var arr = result.map(item => {
          return obj = {
            dealid: item.dealid,
            base_price: item.base_price,
            death_clock: item.death_clock,
            img: item.img,
            link: item.link,
            price: item.price,
            review: item.review,
            reviewlink: item.reviewlink,
            sale: item.sale.slice(1,4),
            timestamp: item.timestamp + "",
            title: item.title
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
var PARAM_IS_PRODUCT_DETAIL={};
app.post('/detail-product',jsonParser, function (req, res) {
  console.log(req.body.dealid);
  params=req.body;
  async.series([
    (callback)=> { 
      models.instance.product_detail.find({ dealid:params.dealid }, function (err, result) {
        if(result.length>0) PARAM_IS_PRODUCT_DETAIL["dealid"]=params.dealid;
        callback(err, null);
      });
  },
    (callback) => { 
        models.instance.product_detail.find({ dealid:PARAM_IS_PRODUCT_DETAIL.dealid }, function (err, result) {
          var arr = result.map(item => {
            return obj = {
              dealid: item.dealid,
              description: item.description,
              hugeimage: item.hugeimage,
              largeimage: item.largeimage,
              smallimage: item.smallimage,
              star: item.star,
              title: item.title
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
            sale: item.sale.slice(1,4)
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
      models.instance.amazon_deal_day.find({ $limit: addItem,stt:1 },{allow_filtering: true}, function (err, result) {
        var arr = result.map(item => {
          return obj = {
            dealid: item.dealid,
            base_price: item.base_price,
            death_clock: item.death_clock,
            img: item.img,
            link: item.link,
            price: item.price,
            review: item.review,
            reviewlink: item.reviewlink,
            robot_label_track: item.robot_label_track,
            sale: item.sale.slice(1,4),
            stt: item.stt,
            timestamp: item.timestamp + "",
            title: item.title
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

  app.listen(80, () => console.log('Example app listening on port 80!'));
}