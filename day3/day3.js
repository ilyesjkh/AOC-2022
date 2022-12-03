const { readFileSync, promises: fsPromises } = require('fs');

function partOne(filename){
    const RucksacksList = readFileSync(filename, 'utf-8').split("\n");
    let commonChar = []
    let totalPrioritySum = 0
    for(let i = 0; i < RucksacksList.length; i++){
        let firstCompartment = RucksacksList[i].substring(0,RucksacksList[i].length/2);
        let secondCompartment = RucksacksList[i].substring(RucksacksList[i].length/2)
        let commonCharVerif = false;
        let index1 = 0;
        while(commonCharVerif == false && index1 < firstCompartment.length){
            let index2 = 0;
            while(commonCharVerif == false && index2 < secondCompartment.length){
                if(firstCompartment[index1] == secondCompartment[index2]){
                    commonCharVerif = true;
                    commonChar.push(firstCompartment[index1]);
                }
                else{ index2++; }
            } 
            index1++;
        }
        if(commonChar[i] == commonChar[i].toUpperCase()){
            totalPrioritySum += commonChar[i].charCodeAt(0) - 38;
        } else{ totalPrioritySum += commonChar[i].charCodeAt(0) - 96;}
    }
    return totalPrioritySum;
}

function partTwo(filename){
    const RucksacksList = readFileSync(filename, 'utf-8').split("\n");
    let GroupCommonChar = []
    let totalPrioritySum = 0
    for(let i = 0; i < RucksacksList.length; i+=3){
        let commonChar = [];
        for(let index1 = 0; index1 < RucksacksList[i].length; index1++){
            for(let index2 = 0; index2 < RucksacksList[i+1].length; index2++){
                if(RucksacksList[i][index1] == RucksacksList[i+1][index2]){
                    commonChar.push(RucksacksList[i][index1]);
            }
        }}
        let commonCharVerif = false;
        let index3 = 0;
        while(commonCharVerif == false && index3 < commonChar.length){
            let index4 = 0;
            while(commonCharVerif == false && index4 < RucksacksList[i+2].length){
                if(commonChar[index3] == RucksacksList[i+2][index4]){
                    commonCharVerif = true;
                    GroupCommonChar.push(commonChar[index3]);
                }
                else{ index4++; }
            } 
            index3++;
        }
    }
    for(let i = 0; i<GroupCommonChar.length; i++){
    if(GroupCommonChar[i] == GroupCommonChar[i].toUpperCase()){
        totalPrioritySum += GroupCommonChar[i].charCodeAt(0) - 38;
    } else{ totalPrioritySum += GroupCommonChar[i].charCodeAt(0) - 96;}}

    return totalPrioritySum;
}

console.log("If we consider the complete input (given by AOC and available on my github):");
console.log("The answer to the first part is: %d", partOne("day3_input.txt"));
console.log("The answer to the second part is: %d", partTwo("day3_input.txt"));