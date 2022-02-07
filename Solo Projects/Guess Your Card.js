const cardFace = ['Ace', 'King', 'Queen', 'Jack', '10','9','8','7','6','5','4','3','2'];
const cardSuit = ['Spades','Clubs','Hearts','Diamonds'];
let drawnCards = [];
let currentCard;
let iterations = 0;
let duplicateDraws = 0;
let cardDraw = () => {
    console.log(`Drawing Card...`); //can comment out
    currentCard = cardFace[Math.floor(Math.random() * 13)] + ' of ' + cardSuit[Math.floor(Math.random() * 4)]; //chooses random card of one suit and face
    console.log(`Drew "${currentCard}"`); //can comment out
    return currentCard;
}
while (currentCard !== 'Ace of Spades'){ //loops while currentCard does not equal the chosen card.
    console.log("Starting while loop..."); //can comment out
    cardDraw(); //first thing, draws a card.
    for(let i = 0; i < drawnCards.length; i++){ //for loop for as many cards as there is in the drawn cards array
        console.log(`Checking if drawn card has already been used. (index:${i})`); //can comment out
        if (currentCard === drawnCards[i]){ //if currentCard is equal to drawnCards[i], draws new card, rechecks drawnCards[] from i = 0
            console.log(`Already drawn "${currentCard}" (index ${i}), starting over...`); //can comment out
            cardDraw();
            duplicateDraws++; console.log(`duplicateDraws = ${duplicateDraws}`); //can comment out
            i = -1;
        }
        else{console.log(`No match at index[${i}]`);} //can comment out
    }
    drawnCards.push(currentCard); //currentCard was not chosen card, and was not already in drawnCards[], pushes card to the array.
    iterations++; //counts the amount of non-duplicate cards drawn before the chosen card is drawn.
}
console.log(`Took ${iterations} draws.`);
console.log(`duplicateDraws = ${duplicateDraws}`); //can comment out
console.log(drawnCards);