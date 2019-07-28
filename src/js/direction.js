import game from './app';
import move from './move';

function direction(code) {
    switch (code) {
        case 37:
            if (game.direction === 'right' || game.crawl === true) return;
            game.direction = 'left';
            // start crawling
            game.crawl = true;
            break;
        case 38:
            if (game.direction === 'down' || game.crawl === true) return;
            game.direction = 'up';
            // start crawling
            game.crawl = true;
            break;
        case 39:
            if (game.direction === 'left' || game.crawl === true) return;
            game.direction = 'right';
            // start crawling
            game.crawl = true;
            break;
        case 40:
            if (game.direction === 'up' || game.crawl === true) return;
            game.direction = 'down';
            // start crawling
            game.crawl = true;
            break;
    }

    setInterval(function() {
        // checking of interval
        if (game.interval === false) {
            // starting new interval
            game.interval = setInterval(move, game.speed);
        }
    });
}

export default direction;