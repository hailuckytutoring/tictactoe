let turn = 0;
let currentTurn = 1;
const pieces = ['O', 'X'];
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let winner = '';

function displayWinner() {
  document.querySelector('.winner').innerHTML = `<h2>${pieces[turn]} is the winner!</h2>`;
}

function getWinner() {
  // Horizontal Cases
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== ' ') {
    return pieces[turn];
  }
  if (board[3] === board[4] && board[3] === board[5] && board[3] !== ' ') {
    return pieces[turn];
  }
  if (board[6] === board[7] && board[6] === board[8] && board[6] !== ' ') {
    return pieces[turn];
  }

  // Vertical Cases
  if (board[0] === board[3] && board[0] === board[6] && board[0] !== ' ') {
    return pieces[turn];
  }
  if (board[1] === board[4] && board[1] === board[7] && board[1] !== ' ') {
    return pieces[turn];
  }
  if (board[2] === board[5] && board[2] === board[8] && board[2] !== ' ') {
    return pieces[turn];
  }

  // Diagonal Cases
  if (board[0] === board[4] && board[0] === board[8] && board[0] !== ' ') {
    return pieces[turn];
  }
  if (board[6] === board[4] && board[6] === board[2] && board[6] !== ' ') {
    return pieces[turn];
  }

  return '';
}

function placePiece(e) {
  if (e.target.innerText === '') {
    // Place the piece in the board array
    board[Number(e.target.id) - 1] = pieces[turn];

    // Place the piece in the UI
    e.target.innerText = pieces[turn];

    // Determine winner
    winner = getWinner();
    if (winner !== '') {
      // Disable inputs
      for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', placePiece);
      }

      displayWinner();
    }

    // Check for draw
    if (winner === '' && currentTurn >= 9) {
      document.querySelector('.winner').innerHTML = `<h2>It's a draw</h2>`;
    }

    // Next turn
    currentTurn++;
    turn++;
    if (turn > 1) {
      turn = 0;
    }
  }
}

// Listen for clicks on the cells
const cells = document.querySelectorAll('.cell');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', placePiece);
}
