playerOneScore = 0;
playerTwoScore = 0;

const startGame = document.querySelector(".roll-dice");
const finishGame = document.querySelector(".finish");

let dice1 = document.querySelector(".dice-1");
let dice2 = document.querySelector(".dice-2");
let score1 = document.querySelector(".score-1");
let score2 = document.querySelector(".score-2");

startGame.addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  const winnerEl = document.querySelector(".winner");
  winnerEl.classList.remove("hide");
  finishGame.classList.remove("hide");

  if (randomNumber1 > randomNumber2) {
    winnerEl.innerHTML = "Jogador 1 venceu!🥳";
    playerOneScore++;
    score1.innerHTML = `Pontos: ${playerOneScore}`;
  } else if (randomNumber2 > randomNumber1) {
    winnerEl.innerHTML = "Jogador 2 venceu!🥳";
    playerTwoScore++;
    score2.innerHTML = `Pontos: ${playerTwoScore}`;
  } else {
    winnerEl.innerHTML = "EMPATE!";
  }
  dice1.setAttribute("src", `dice${randomNumber1}.svg`);
  dice2.setAttribute("src", `dice${randomNumber2}.svg`);
});

finishGame.addEventListener("click", () => {
  window.location.reload();
});
