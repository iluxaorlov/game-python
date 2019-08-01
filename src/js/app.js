import '../scss/app.scss';
import random from './random';
import direction from './direction';

let game = {
    speed: 500,
    score: 0,
    python: [],
    direction: false,
    interval: false,
    process: false,
    row: document.getElementsByClassName('python')[0].parentElement.rowIndex,
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