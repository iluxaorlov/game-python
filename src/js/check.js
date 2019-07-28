import game from './app';
import random from './random';

function checkCell(cell) {
    if (cell === undefined || cell.className === 'snake') {
        // if next cell is undefined or snake
        return lose();
    }

    switch (cell.className) {
        case '':
            cell.className = 'snake';
            // delete tail
            tail();
            break;
        case 'apple':
            cell.className = 'snake';
            // increment game score
            game.score++;
            // change speed
            speed();
            // create random apple
            random();
            break;
    }

    return true;
}

function checkRow(row) {
    if (row === undefined || row.cells[game.cell].className === 'snake') {
        // if next row is undefined or next cell in row is snake
        return lose();
    }

    const cell = row.cells[game.cell];

    switch (cell.className) {
        case '':
            cell.className = 'snake';
            // delete tail
            tail();
            break;
        case 'apple':
            cell.className = 'snake';
            // increment game score
            game.score++;
            // change speed
            speed();
            // create random apple
            random();
            break;
    }
    
    return true;
}

function lose() {
    clearInterval(game.interval);
    alert('You Lose');
    return false;
}

function tail() {
    // delete tail of snake
    game.snake[0].className = '';
    // delete last element in array
    game.snake.splice(0, 1);
}

function speed() {
    if (game.speed > 250) {
        // clear interval
        clearInterval(game.interval);
        // change game speed
        game.speed -= 50;
        // reset interval to default
        game.interval = false;
    }
}

export { checkCell, checkRow };