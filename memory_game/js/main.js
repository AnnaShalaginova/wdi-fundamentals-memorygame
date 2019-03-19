console.log("Up and running!");

/*console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);*/
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardsInPlay.push(cardOne)
console.log("User flipped queen");
cardsInPlay = [];
cardTwo = cards[1];
cardsInPlay.push(cardTwo)
console.log("User flipped king");

var cardsInPlay = [];

 function checkForMatch() {
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
    

      } else {
          alert("Sorry, try again");
        };

  };
};

