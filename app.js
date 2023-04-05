const player = document.querySelector(".player");
const restartBtn = document.querySelector("button");
const playersCheck = [];
const sentence = document.querySelector(".sentence");
const boxes = document.querySelectorAll(".box");
let turn = "X";

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.textContent === "") {
      if (turn === "X") {
        player.textContent = "O";
        box.textContent = "X";
        turn = "O";
      } else {
        player.textContent = "X";
        box.textContent = "O";
        turn = "X";
      }
      //   player.textContent = player.textContent === "X" ? "O" : "X";
      //   box.textContent = player.textContent;
      checkWinner();
    }
  });
});

const checkWinner = () => {
  const playersCheck = [...boxes].map((box) => box.textContent);
  let winner = "";
  const caseWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  caseWin.forEach((item) => {
    if (
      playersCheck[item[0]] === playersCheck[item[1]] &&
      playersCheck[item[1]] === playersCheck[item[2]] &&
      playersCheck[item[0]] !== ""
    ) {
      winner = playersCheck[item[0]];
      player.textContent = "Winner is - " + winner + " -";
      restartBtn.style.display = "block";
    } else {
      if (!playersCheck.includes("")) {
        player.textContent = "Draw";
        restartBtn.style.display = "block";
      }
    }
  });
};

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
