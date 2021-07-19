'use strict';
// elements used
    //player cards
        const playerOneCard = document.getElementById('player-one');
        const playerTwoCard = document.getElementById('player-two');
        const playerCountOne = document.getElementById('countOne');
        const playerCountTwo = document.getElementById('countTwo');
    //buttons
        const hitButton = document.getElementsByClassName('hit-btn');
        const holdButton = document.getElementsByClassName('hold-btn');
        const resetButton = document.getElementsByClassName('reset-btn');
    // deck image
        const deckOfCards = document.getElementById('deck-img');

    // messages
        const winnerMessage = document.querySelector('.winner-message');

    //other

// starting game conditions
    let count, activePlayer, playing;
