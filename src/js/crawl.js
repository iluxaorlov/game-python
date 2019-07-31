import game from './app';
import { checkCell, checkRow } from './check';

function crawl() {
    // select game field
    const field = document.getElementById('field');
    // push head of python to array
    game.python.push(field.rows[game.row].cells[game.cell]);

    try {
        switch (game.direction) {
            case 'left':
                // check next cell
                checkCell(field.rows[game.row].cells[game.cell - 1]);
                game.cell--;
                break;
            case 'up':
                // check next row
                checkRow(field.rows[game.row - 1]);
                game.row--;
                break;
            case 'right':
                // check next cell
                checkCell(field.rows[game.row].cells[game.cell + 1]);
                game.cell++;
                break;
            case 'down':
                // check next row
                checkRow(field.rows[game.row + 1]);
                game.row++;
                break;
        }
    } catch (e) {
        lose();
    }

    // stop process of crawling
    game.process = false;
}

function lose() {
    clearInterval(game.interval);
    alert('You lose');
}

export default crawl;