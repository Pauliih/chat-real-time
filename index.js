var app = require('express')(); // Express inicializa app para que sea una function handler
var http = require('http').Server(app); // supply un http server

var io = require('socket.io')(http); // inicializamos una nueva instancia de socket.io pasando http object (http server)

app.get('/', function(req, res){  // Definimos un manejador de ruta (/) 
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ // escucho en el evento connection 
  socket.on('chat message', function(msg) { //we print out the chat message event
    //console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


http.listen(3000, function(){ // hacemos que el servidor "escuche" en el puerto 3000
  console.log('listening on *:3000');
});