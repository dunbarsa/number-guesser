//generate random number for user to guess


var numToGuess = Math.floor(Math.random() * 50);


//give user parameters
var welcome = alert('Welcome! Please guess a number between 1 and 50');

//display guess
var submitGuessButton = document.getElementById('guess-button');
var userGuess = document.getElementById('enter-guess');
var bigNum = document.querySelector('.display-user-guess');

submitGuessButton.addEventListener('click', function() {
    var guessAsANum = parseInt(userGuess.value);
    bigNum.innerText = guessAsANum;

    var replyToUser = document.getElementById('reply-to-user');

    if (isNaN(guessAsANum)) {
        bigNum.innerText = "";
        alert('Please enter a number');
    } else if (guessAsANum > 50) {
        alert('Please guess a number less than 50');
    } else if (guessAsANum < 1) {
        alert('Please guess a number greater than 0');
    } else if (guessAsANum > numToGuess) {
        replyToUser.innerText = 'That is too high';
    } else if (guessAsANum < numToGuess) {
        replyToUser.innerText = 'That is too low';
    } else if (guessAsANum) {
        replyToUser.innerText = 'BOOM!';
    }
});

//clear input field. ooh a function instead of an event listener!
function clearField() {
    userGuess.value = "";
    bigNum.innerText = 25;
}

//reset button: reset things and deactivate when not needed. (what qualifies as "nothing to reset"?)

var resetButton = document.getElementById('reset-button');

resetButton.disabled = true;
submitGuessButton.addEventListener('click', function() {
    resetButton.disabled = !resetButton.disabled;
});


resetButton.addEventListener('click', function() {
    bigNum.innerText = "";
    clearField();
    numToGuess = Math.floor(Math.random() * 50);
    welcome = alert('Welcome! Please guess a number between 1 and 50');
});

//disable button when not needed: detect activity & disable button

var clearButton = document.getElementById('clear-button');

clearButton.disabled = true;
userGuess.addEventListener('mouseleave', function() {
    clearButton.disabled = !clearButton.disabled;
});
