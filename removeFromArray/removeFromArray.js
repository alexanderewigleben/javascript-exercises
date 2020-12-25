const removeFromArray = function(...thingsToRemove){

    const array = thingsToRemove[0];
    const newArray=[];
    array.forEach((item)=>{
        if (!thingsToRemove.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
}


module.exports = removeFromArray
