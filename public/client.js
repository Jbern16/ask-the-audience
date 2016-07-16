var socket = io();

var connectionCount = document.getElementById('connection-count');
var statusMessage = document.getElementById('status-message');
var buttons = document.querySelectorAll('#choices button');
var voteTally = document.getElementById('voteTally');
var userVote = document.getElementById('user-vote')

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}


socket.on('usersConnected', function(count) {
  connectionCount.innerText = `Connected Users: ${count}`;
});

socket.on('statusMessage', function(message) {
  statusMessage.innerText = message;
});

socket.on('voteCount', function(votes) {
  for (var vote in votes) {
    var textNode = document.createTextNode(`${vote}: ${votes[vote]}`)
    voteTally.appendChild(textNode)
    var br = document.createElement("br")
    voteTally.appendChild(br)
  }
})

socket.on('userVote', function(vote) {
  userVote.innerText = `You just voted for ${vote}`
})