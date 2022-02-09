let currentDeck = [];
let burnPile = [];
let gilPot = 0;

/*
class Player {
    Player(id,name,gil){
        this.id = id;
        this.name = name;
        this.gil = gil;
    }
}
*/

let player1 = {
    id:0,
    name:'Zac',
    dealer:false,
    gil:100,
    folded:false,
    handHole:[],
    handUp:[],
    handCombined: [],
    fold(){
        while (this.handHole.length > 0 && this.handUp.length > 0){
            burnPile.push(this.handHole.pop());
            burnPile.push(this.handUp.pop());
        }
        this.handHole.push('Folded!');
        this.handUp.push('Folded!');
        this.folded = true;
    }
}

let player2 = {
    name:'Luke',
    dealer:false,
    gil:100,
    folded:false,
    handHole:[],
    handUp:[],
    fold(){
        while (this.handHole.length > 0 && this.handUp.length > 0){
            burnPile.push(this.handHole.pop());
            burnPile.push(this.handUp.pop());
        }
        this.handHole.push('Folded!');
        this.handUp.push('Folded!');
        this.folded = true;
    }
}

let player3 = {
    name:'Ryan',
    dealer:false,
    gil:100,
    folded:false,
    handHole:[],
    handUp:[],
    fold(){
        while (this.handHole.length > 0 && this.handUp.length > 0){
            burnPile.push(this.handHole.pop());
            burnPile.push(this.handUp.pop());
        }
        this.handHole.push('Folded!');
        this.handUp.push('Folded!');
        this.folded = true;
    }
}

let player4 = {
    name:'David',
    dealer:false,
    gil:100,
    folded:false,
    handHole:[],
    handUp:[],
    fold(){
        while (this.handHole.length > 0 && this.handUp.length > 0){
            burnPile.push(this.handHole.pop());
            burnPile.push(this.handUp.pop());
        }
        this.handHole.push('Folded!');
        this.handUp.push('Folded!');
        this.folded = true;
    }
}

const shuffleDeck = numDecks => { //builds a currentDeck[] from numDecks of cards
    let dupes = 0;
    let drawCard = () => { //picks a random card face and suit from 2 arrays and outputs a formatted card name
        const arrayCardFace = ['A', 'K', 'Q', 'J', '10','9','8','7','6','5','4','3','2'];
        const arrayCardSuit = ['S','C','H','D'];
        let currentCard = arrayCardFace[Math.floor(Math.random() * 13)] + arrayCardSuit[Math.floor(Math.random() * 4)];
        return currentCard;
    }
    while (currentDeck.length < numDecks * 52){ //adds cards to currentDeck[] from as many specified decks of cards 
        let checkCard = drawCard();
        for (i = 0; i < currentDeck.length; i++){ //runs through currentDeck[] comparing checkCard to each index
            if (checkCard === currentDeck[i]){ //if finds a match, increment dupes
                dupes++;
                if (dupes === numDecks){ //if there are already as many dupes as decks shuffled in, picks new card, restarts loop, resets dupe count.
                    checkCard = drawCard();
                    i = -1;
                    dupes = 0;
                }
            }
        }
        currentDeck.push(checkCard); //checked entire currentDeck and there were fewer dupes than decks, places checkCard into currentDeck, resets dupes, starts while loop over
        dupes = 0;


    }
}

const burnCard = numCards => { //pops numCards from currentDeck[] and pushes to shedPile[]
    //console.log(`${numCards} dealt to shed pile.`);
    for (let i = numCards - 1; i >= 0; i--){ //for numCards until it hits 0, push a card from currentDeck[] to shedPile[]
        burnPile.push(currentDeck.pop());
        if (currentDeck.length === 0){ //if currentDeck[] has 0 cards, stops loop
            i = 0;
            console.log('No more cards!');
        }
    }
}

const dealCard = (holeCard = 0, upCard = 0, player) => { //pops numCards from currentDeck[] and pushes to player.hand[]
    if (player.folded){
        console.log(`Can't deal to ${player.name}, folded!`);
    }else{
    console.log(`Deal ${holeCard} hole cards and ${upCard} up cards to ${player.name}.`);
    for (let i = holeCard - 1; i >= 0; i--){ //for numCards until 0, pushes card from currentDeck[] to player.hand[]
        player.handHole.push(currentDeck.pop());
        if (currentDeck.length === 0){ //if currentDeck[] has 0, stops loop
            i = 0;
            console.log('No more cards!');
        }
    }
    for (let i = upCard - 1; i >= 0; i--){ //for numCards until 0, pushes card from currentDeck[] to player.hand[]
        player.handUp.push(currentDeck.pop());
        if (currentDeck.length === 0){ //if currentDeck[] has 0, stops loop
            i = 0;
            console.log('No more cards!');
        }
    }
}}

const showCards = () => {
    console.log(`${player1.name}'s face up cards: ${player1.handUp.sort()}`);
    console.log(`${player2.name}'s face up cards: ${player2.handUp.sort()}`);
    console.log(`${player3.name}'s face up cards: ${player3.handUp.sort()}`);
    console.log(`${player4.name}'s face up cards: ${player4.handUp.sort()}`);
}

const peepCards = (player, hand) => {
    if (player.folded){
        console.log(`Can't peep ${player.name}'s cards, Folded!`);
    }else{
        if (hand === 'hole'){
        console.log(`${player.name}'s hole cards: ${player.handHole.sort()}`);
        }
        else if (hand === 'up'){
        console.log(`${player.name}'s up cards: ${player.handUp.sort()}`);
        }else {
            console.log(`${player.name}'s cards: ${player.combinedHand.sort()}`);

        }
    }
}



shuffleDeck(1);
dealCard(2,3,player1);
player3.fold();
dealCard(3,3,player3)
peepCards(player1,'hole');
peepCards(player1,'up');
peepCards(player3,'up');
peepCards(player3,'hole');