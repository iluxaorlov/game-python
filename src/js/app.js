import '../scss/app.scss';
import random from './random';
import direction from './direction';

let game = {
    speed: 750,
    score: 0,
    snake: [],
    direction: '',
    crawl: false,
    interval: false,
    row: document.getElementsByClassName('snake')[0].parentElement.rowIndex,
    cell: document.getElementsByClassName('snake')[0].cellIndex
};

document.addEventListener('keydown', function(event) {
    const code = event.which;

    switch (code) {
        // left
        case 37:
        // up
        case 38:
        // right
        case 39:
        // down
        case 40:
            direction(code);
    }
});

// create random apple
random();

export default game;