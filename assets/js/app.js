$(function () {
  let username;
  var $inputMessage = $('#m'); // mensaje
  var $messages = $('#messages'); // area de mensajes
  var socket = io('http://ec2-34-227-11-223.compute-1.amazonaws.com:3000');

  $('form').submit(function() {
    socket.emit('chat message', $inputMessage.val());
    $inputMessage.val('');
    return false;
  });
  socket.on('chat message', function(msg) {
    $messages.append($('<li>').text(msg));
  });
});