  // let firstPlayerRandomDice = Math.floor(Math.random()* dices + 1);
    // let firstPlayerRandomImages  = 'asset/dice' + firstPlayerRandomDice + '.jpg';
    // document.querySelectorAll('img')[0].setAttribute('src', firstPlayerRandomImages);
    // let secondPlayerRandomDice = Math.floor(Math.random() * dices + 1); 
    // let secondPlayerRandomImage = 'asset/dice' + secondPlayerRandomDice + '.jpg';
    // document.querySelectorAll('img')[1].setAttribute('src', secondPlayerRandomImage);

let dices = 6; 
let winner = document.getElementById('winner');
let firstPlayerRandomDice = Math.floor(Math.random()* dices + 1);
let firstPlayerRandomImages  = 'asset/dice' + firstPlayerRandomDice + '.jpg';

let secondPlayerRandomDice = Math.floor(Math.random() * dices + 1); 
let secondPlayerRandomImage = 'asset/dice' + secondPlayerRandomDice + '.jpg';

 function rollDice() {
    document.querySelectorAll('img')[0].setAttribute('src', firstPlayerRandomImages); 
}

function rollDice1() {
document.querySelectorAll('img')[1].setAttribute('src', secondPlayerRandomImage);
showWinner();
}


function showWinner() {
    if (firstPlayerRandomDice > secondPlayerRandomDice) {
        winner.innerHTML= "First player wins";
        }
        else if (firstPlayerRandomDice< secondPlayerRandomDice) {
        winner.innerHTML = "Second player wins";
        }
        else {
        winner.innerHTML = "Its a draw";
        }                 
}
   



  









