function startGame() {
  // starting a new game
  var messagesElement = document.getElementById("messages");
  messagesElement.innerText = "Welcome Ties!!!";
}

document.getElementById("startGame").addEventListener("click", startGame);
