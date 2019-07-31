import game from './app';
import random from './random';

function checkCell(cell) {
    if (cell === undefined || cell.className === 'python') {
        // if next cell is undefined or python
        throw new Error();
    }

    switch (cell.className) {
        case '':
            move(cell);
            break;
        case 'apple':
            grow(cell);
            break;
    }

    return true;
}

function checkRow(row) {
    if (row === undefined || row.cells[game.cell].className === 'python') {
        // if next row is undefined or next cell in row is python
        throw new Error();
    }

    const cell = row.cells[game.cell];

    switch (cell.className) {
        case '':
            move(cell);
            break;
        case 'apple':
            grow(cell);
            break;
    }
}

function move(cell) {
    // set class name to the cell
    cell.className = 'python';
    // delete tail of the python
    game.python[0].className = '';
    // delete last element in array
    game.python.splice(0, 1);
}

function grow(cell) {
    // set class name to the cell
    cell.className = 'python';
    // increment game score
    game.score++;
    // set game score
    document.getElementById('score').innerText = game.score;
    // change speed of python
    speed();
    // create random apple
    random();
}

function speed() {
    clearInterval(game.interval);
    game.interval = false;

    switch (game.score) {
        case 10:
        case 20:
        case 30:
            game.speed -= 100;
            break;
    }
}

export { checkCell, checkRow };