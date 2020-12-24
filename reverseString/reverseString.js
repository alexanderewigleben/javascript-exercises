const reverseString = function(wordToBeReversed) {
    
    var forwards = wordToBeReversed.split("");
    for (i=0; i < forwards.length - 1; i++){
        letterMoving = forwards.pop();
        forwards.unshift(letterMoving);
    }
    return forwards.join("");
}

module.exports = reverseString

