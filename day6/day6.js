const { readFileSync, promises: fsPromises } = require('fs');

function partOne(filename){
    const dataStream = readFileSync(filename, 'utf-8');
    let marker = 0;
    let index = 0;
    let markerFound = false;
    while(markerFound == false && index < dataStream.length-3){
        let dataQuatuor = dataStream.substring(index, index+4);
        let letterIndex = 0
        let letterRepetition = false;
        while(letterRepetition == false && letterIndex < 4){
            if((dataQuatuor.match(new RegExp(dataQuatuor[letterIndex], "g")) || []).length > 1){
                letterRepetition = true;
            }
            letterIndex++;
        }
        if(letterRepetition == false){
            return index+4;
        }
        index++;
    }
    return "Not found";
}

function partTwo(filename){
    const dataStream = readFileSync(filename, 'utf-8');
    let marker = 0;
    let index = 0;
    let markerFound = false;
    while(markerFound == false && index < dataStream.length-13){
        let dataQuatuor = dataStream.substring(index, index+14);
        let letterIndex = 0
        let letterRepetition = false;
        while(letterRepetition == false && letterIndex < 14){
            if((dataQuatuor.match(new RegExp(dataQuatuor[letterIndex], "g")) || []).length > 1){
                letterRepetition = true;
            }
            letterIndex++;
        }
        if(letterRepetition == false){
            return index+14;
        }
        index++;
    }
    return "Not found";
}


console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne("day6_input.txt")}`);
console.log(`The answer to the second part is: ${partTwo("day6_input.txt")}`);
