// It delete any dublicate values in array
function deleteDuplicate(arry){
    let stringArray = capitalizeArray(arry);
    let arrayLength = stringArray.length;
    let newArray = [];
    for(i = 0; i < arrayLength-1; i++){
        for(y = i + 1; y < arrayLength; y++){
            if(stringArray[i] === stringArray[y]){
                stringArray.splice(y  , 1);
                return goTo(stringArray)
            }
        }
        newArray.push(stringArray[i]);
    }
    newArray.push(stringArray[arrayLength-1]);
    outPut(newArray);
}
// Capitalize all the values inside Passed Array
function capitalizeArray(arry){
    let upperCase = arry.map(function(string){
        return string.toUpperCase();
    });
    return upperCase;
}
// this function receive the outcome from deleteDuplicate() function after finding dublicate
function goTo(arry){
    deleteDuplicate(arry);
}

// Output Final vlaues
function outPut(arry){
    let FirstLetterCap = arry.map(function(value){
        let lowerCase = value.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    });
    console.log(FirstLetterCap);
}


// Test Example ....
deleteDuplicate(["Ryan", "Shrestha", "RYan", "Rajendra", "Shrestha"]);
