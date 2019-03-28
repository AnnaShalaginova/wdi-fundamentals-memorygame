console.log("Up and running!");

/*console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);*/
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
};

var flipCard = function(){ 
	cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	cardsInPlay.setAttribute('src',cards[cardId].cardImage)
	if (cardsInPlay.length === 2){
    checkForMatch();
};



var createBoard(){
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);


createBoard; 

    // Logic here
}
}
/*cardsInPlay = [];


var cardsInPlay = [];

 function checkForMatch() {
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
    

      } else {
          alert("Sorry, try again");
        };

  };
} 
};*/
