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
    document.body.style.backgroundColor = '#0d0d0d';
    document.getElementById('field').style.borderColor = '#808080';
    document.getElementById('score').style.color = '#808080';
    document.getElementById('retry').style.display = 'block';

    for (let item of document.getElementsByClassName('python')) {
        item.style.backgroundColor = '#808080';
        item.style.boxShadow = '0 0 16px 0 #808080';
    }

    for (let item of document.getElementsByClassName('apple')) {
        item.style.backgroundColor = '#808080';
        item.style.animation = 'none';
        item.style.boxShadow = '0 0 16px 0 #808080';
    }

    clearInterval(game.interval);
}

export default crawl;