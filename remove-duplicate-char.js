function deleteDuplicate(string){
    let stringToUpperCase = string.toUpperCase();
    let stringArray = stringToUpperCase.split('');
    let arrayLength = stringArray.length;
    let newArray = [];
    for(i=0;i<arrayLength-1;i++){
        for(y = i +1; y<arrayLength; y++){
            if(stringArray[i] === stringArray[y]){
                stringArray.splice(y  , 1);
                let joinArray = stringArray.join('');
                return goTo(joinArray)
            }
        }
        newArray.push(stringArray[i]);
    }
    newArray.push(stringArray[arrayLength-1]);
    console.log(newArray);
}

function goTo(string){
    deleteDuplicate(string);
}

deleteDuplicate("People");

