document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    dice1.textContent = diceFaces[roll1];
    dice2.textContent = diceFaces[roll2];
}