var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

var fs = require("fs"),
    path = require("path");

var playerExample = {
  provider_id: "",
  xPos: 34,
  yPos: 34,
  playerThickness: 10,
  playerSize: 40
};

var players = [];
var balls = [];
var powerups = [];
var playerThickness = 10;
var playerDefaultSize = 80;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/multi-pong.html');
});

app.get('/collision.js', function(req, res){
  res.sendFile(__dirname + '/collision.js');
});

io.on('connection', function(socket){
  console.log('user connected');
});

http.listen(port, function(){
  console.log('listing on *:' + port);
});
