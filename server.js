var debug = false;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var vm = require('vm');
var fs = require('fs');
vm.runInThisContext(fs.readFileSync(__dirname + "/create_player.js"));
vm.runInThisContext(fs.readFileSync(__dirname + "/create_pong_ball.js"));

var port = 3000;

var fs = require("fs"),
    path = require("path");

var playerExample = {
  provider_id: "",
  xPos: 34,
  yPos: 34,
  playerThickness: 10,
  playerSize: 40,
  socket: ""
};

var sockets = [];
var players = [];
var balls = [];
var powerups = [];
var playerThickness = 10;
var playerDefaultSize = 80;

// players.push(createPlayer(10, playerDefaultSize/2, 75));
// players.push(createPlayer(canvasWidth/2, playerDefaultSize/2, 90));
// players.push(createPlayer(canvasWidth-10, playerDefaultSize/2, 90));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/multi-pong.html');
});

app.get('/collision.js', function(req, res){
  res.sendFile(__dirname + '/collision.js');
});

app.get('/bop.wav', function(req, res){
  res.sendFile(__dirname + '/bop.wav');
});

app.get('/create_player.js', function(req, res){
  res.sendFile(__dirname + '/create_player.js');
});

app.get('/create_pong_ball.js', function(req, res){
  res.sendFile(__dirname + '/create_pong_ball.js');
});

io.on('connection', function(socket){
  // players.push(socket.id);
  // players.push(createPlayer(10, playerDefaultSize/2, 75));
  io.emit('all_players', { players: players });
  console.log(socket.id);
  console.log('user connected');
});

http.listen(port, function(){
  console.log('listing on *:' + port);
});

setInterval(function(){
  io.emit('all_players', { players: players, balls: balls });
}, 1000);
