import '../scss/app.scss';
import random from './random';
import direction from './direction';

let game = {
    // game speed
    speed: 500,
    // current score
    score: 0,
    // contains all python blocks
    python: [],
    // direction of crawling
    direction: false,
    // stores crawling interval
    interval: false,
    // process of crawling
    process: false,
    // row of python position
    row: document.getElementsByClassName('python')[0].parentElement.rowIndex,
    // cell of python position
    cell: document.getElementsByClassName('python')[0].cellIndex
};

document.addEventListener('keydown', (event) => {
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

document.getElementById('retry').addEventListener('click', () => {
    window.location.reload();
});

// create random apple
random();

export default game;