/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して8080番ポートで待ち受け。*/
var server = app.listen(8080, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('./public/index.html', { title: 'Express' });
});