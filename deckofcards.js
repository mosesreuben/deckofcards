function Player(name){
    this.name = name;
    var hand = [];
    
    this.drawCard = function(card){
        hand.push(card);
    }
}
function Card(suit, face, value){
    this.suit = suit;
    this.value = value;
    this.face = face;
}
function Deck(num){
    var suits = ['Spade', 'Heart', 'Club', 'Diamond']
    var faces = ['2','3','4','5','6','7','8','9','10', 'Jack', 'Queen', 'King', 'Ace'];
    var numCards = num;
    var cards = [];

    function buildDeck(){
        for (let i=0; i < numCards; i++){
            cards.push(new Card(
               suits [i%4],
               faces[i%13],
               (i%13)+2           
            ));
        }
    }

    this.readDeck = function(){
        cards.forEach((card) => {
        console.log(card);
    })
}

this.shuffle = function(){
    for (let i = 0; i < numCards; i++){
    let random =  Math.floor()*51;
    let temp = cards[random];
    cards[random] = cards[i];
    cards[i] = temp;
    }
}

this.deal = function(num){
    return cards.pop()
}

buildDeck();
}

let deck = new Deck(52);
deck.shuffle();
deck.readDeck();
deck.deal(1);

let bob = new Player ('Bob');
bob.drawCard(deck.deal());
console.log(bob.name);

