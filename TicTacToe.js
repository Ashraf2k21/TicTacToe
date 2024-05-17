
console.log('welcome tic tac toe');
reset = document.getElementById("reset");
let turn = 'X';
let gameOver = false;

const change = () => {
  return turn === 'X' ? 'O' : 'X';
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName('textcontent');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.forEach(e => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ''
    ) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' won...!!!';
      gameOver = true;
      document.querySelector('.win-gif').getElementsByTagName('img')[0].style.width = '200px';
    }
  });
};


document.querySelector('.info').innerText = 'Turn for X';

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.textcontent');
  element.addEventListener('click', () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = change();
      checkWin();
      if (!gameOver) {
        document.querySelector('.info').innerText = 'Turn for ' + turn;
      }
    }
  });
});

reset.addEventListener('click', () => {
  let boxtext = document.querySelectorAll('.textcontent');
  Array.from(boxtext).forEach(e => {
    e.innerText = '';
  });
  turn = 'X';
  gameOver = false;
  document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
  document.querySelector('.win-gif').getElementsByTagName('img')[0].style.width = '0px';
});
