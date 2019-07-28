import game from './app';
import { checkCell, checkRow } from './check';

function move() {
    // select game field
    const field = document.getElementById('field');
    // stop crawling
    game.crawl = false;
    // push head of snake to array
    game.snake.push(field.rows[game.row].cells[game.cell]);

    switch (game.direction) {
        case 'left':
            // check next cell
            if (checkCell(field.rows[game.row].cells[game.cell - 1])) {
                game.cell--;
            }

            break;
        case 'up':
            // check next row
            if (checkRow(field.rows[game.row - 1])) {
                game.row--;
            }

            break;
        case 'right':
            // check next cell
            if (checkCell(field.rows[game.row].cells[game.cell + 1])) {
                game.cell++;
            }

            break;
        case 'down':
            // check next row
            if (checkRow(field.rows[game.row + 1])) {
                game.row++;
            }
            
            break;
    }
}

export default move;