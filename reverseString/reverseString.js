const reverseString = function(wordToBeReversed) {

    var backwards= [];
    var forwards = wordToBeReversed.split("");
    const length = forwards.length;
    for (i=0; i <length; i++){
        letterMoving = forwards.pop();
        backwards.push(letterMoving);
    }
    return backwards.join("");
}

module.exports = reverseString

