import game from './app';
import crawl from './crawl';

function direction(code) {
    switch (code) {
        case 37:
            if (game.direction === 'right' || game.process === true) return;
            // change direction
            game.direction = 'left';
            // start process of crawling
            game.process = true;
            break;
        case 38:
            if (game.direction === 'down' || game.process === true) return;
            // change direction
            game.direction = 'up';
            // start process of crawling
            game.process = true;
            break;
        case 39:
            if (game.direction === 'left' || game.process === true) return;
            // change direction
            game.direction = 'right';
            // start process of crawling
            game.process = true;
            break;
        case 40:
            if (game.direction === 'up' || game.process === true) return;
            // change direction
            game.direction = 'down';
            // start process of crawling
            game.process = true;
            break;
    }

    setInterval(function() {
        // checking interval
        if (game.interval === false) {
            // starting new interval
            game.interval = setInterval(crawl, game.speed);
        }
    });
}

export default direction;