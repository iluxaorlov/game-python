function random() {
    // select game field
    const field = document.getElementById('field');

    while (true) {
        // random row
        const row = Math.floor(Math.random() * field.rows.length);
        // random cell
        const cell = Math.floor(Math.random() * field.rows[row].cells.length);
        // random block
        const block = field.rows[row].cells[cell];

        if (block.className !== 'python') {
            // if random block is not python
            block.className = 'apple';
            return;
        }
    }
}

export default random;