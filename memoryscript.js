// Assuming you have an array of image file names
let cards = ['MemoryGame/Images/one.png', 'MemoryGame/Images/two.png', 'MemoryGame/Images/three.png', 'MemoryGame/Images/four.png', 'MemoryGame/Images/five.png', 'MemoryGame/Images/six.png'];
cards = cards.concat(cards); // duplicate the array

// Shuffle function
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

cards = shuffle(cards); // shuffle the cards

let gameBoard = document.querySelector('.game-board');
let flippedCards = [];
let matchedCards = [];

cards.forEach((card) => {
    let cardElement = document.createElement('div');
    cardElement.classList.add('card');

    let faceImage = document.createElement('img');
    faceImage.src = card;
    faceImage.classList.add('face');

    let backImage = document.createElement('img');
    backImage.src = 'MemoryGame/Images/cardback.jpeg';
    backImage.classList.add('back');

    cardElement.appendChild(faceImage);
    cardElement.appendChild(backImage);

    cardElement.addEventListener('click', function() {
        cardElement.classList.add('flipped');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            if (flippedCards[0].querySelector('.face').src === flippedCards[1].querySelector('.face').src) {
                matchedCards.push(...flippedCards);
                flippedCards.forEach((card) => {
                    card.removeEventListener('click', card.click);
                });
                flippedCards = [];
            } else {
                setTimeout(() => {
                    flippedCards.forEach((card) => {
                        card.classList.remove('flipped');
                    });
                    flippedCards = [];
                }, 1000);
            }
        }

        if (matchedCards.length === cards.length) {
            alert('You won!');
        }
        
    });

    gameBoard.appendChild(cardElement);
});