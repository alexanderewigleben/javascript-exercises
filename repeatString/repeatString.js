const repeatString = function(word, n)
 {  
     if (n<0) {
         return 'ERROR';
     }
    var storedString=[]
        for (i=0; i<n; i++){
            storedString.push(word)
        }
        return storedString.join("");

}

module.exports = repeatString
