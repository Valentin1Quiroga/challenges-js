const options = ["piedra", "papel", "tijeras"];

function playerMove() {
  let move = prompt("Piedra, papel, o tijeras?").toLowerCase().trim();
  return move;
}
function botMove() {
  let randomNumber = Math.random();
  let move = Math.floor(randomNumber * 2.99);
  return options[move];
}

function game(player){
  const bot = botMove();
  switch (true) {
    case player === bot:
      alert(`El bot jugó ${bot}. Empate`);
      break;
    case player === "piedra" && bot === "papel":
      alert(`El bot jugó papel. Gana el bot`);
      break;
    case player === "piedra" && bot === "tijeras":
      alert(`El bot jugó tijeras. Ganaste vos`);
      break;
    case player === "papel" && bot === "piedra":
      alert(`El bot jugó piedra. Ganaste vos`);
      break;
    case player === "papel" && bot === "tijeras":
      alert(`El bot jugó tijeras. Gana el bot`);
      break;
    case player === "tijeras" && bot === "piedra":
      alert(`El bot jugó piedra. Gana el bot`);
      break;
    case player === "tijeras" && bot === "papel":
      alert(`El bot jugó papel. Ganaste vos`);
      break;
  }
}
