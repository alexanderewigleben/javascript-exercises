const sumAll = function(firstNum, secondNum) {

        let totalSum = 0;
      for (firstNum; firstNum < secondNum+1; firstNum++){
          totalSum = totalSum + firstNum;
          }
          return totalSum;
      }




module.exports = sumAll


// create a variable the sums
// go through each number adding it to sum variable
// incriment one
// repeat till you read second num
// return variable of sums
