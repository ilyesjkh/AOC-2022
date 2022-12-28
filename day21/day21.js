const { readFileSync, promises: fsPromises } = require('fs');
const { get } = require('http');
let input = readFileSync("day21_input.txt", 'utf-8').split("\n");


let yells = [];
let operationYells = [];
for(let i = 0; i<input.length; i++){
    if(input[i].split(" ").length == 2){
        yells.push({name:input[i].split(" ")[0].replace(":",""), number:parseInt(input[i].split(" ")[1])});
    } else {
        if(input[i].split(" ")[0] == "root"){
        operationYells.push({name: input[i].split(" ")[0].replace(":",""), first: input[i].split(" ")[1], second: input[i].split(" ")[3], operation: input[i].split(" ")[2]})
    } else {operationYells.push({name: input[i].split(" ")[0].replace(":",""), first: input[i].split(" ")[1], second: input[i].split(" ")[3], operation: input[i].split(" ")[2]})}
    }
}



function isRootInList(yellsList){
    for(let i = 0; i<yellsList.length; i++){
        if(yellsList[i].name == "root"){
            return yellsList[i].number;
        }
    }
    return false;
}



function partOne(){
    let rootsYellFigured = false;
    let temporaryYellsList = [];
    while(!rootsYellFigured){
        temporaryYellsList = [];
        for(let i = 0; i<operationYells.length;i++){
            for(let j = 0; j<yells.length; j++){
                if(operationYells[i].first == yells[j].name){
                    operationYells[i].first = yells[j].number;
                } else if(operationYells[i].second == yells[j].name){
                    operationYells[i].second = yells[j].number;
                }
            }
            if(Number.isInteger(operationYells[i].first) && Number.isInteger(operationYells[i].second)){
                yells.push({name:operationYells[i].name, number:mathOp[operationYells[i].operation](operationYells[i].first,operationYells[i].second)})
                operationYells.splice(i,1);
            }
        }
        if(isRootInList(yells) != false){
        return isRootInList(yells)}
    }
}

function getRoot(OperationYellsList){
    for(let i = 0; i<OperationYellsList.length; i++){
        if(OperationYellsList[i].name == "root"){
            return OperationYellsList[i];
        }
    }
}


const mathOp = {"+":function(x,y){return x + y},
"-":function(x,y){return x-y},
"*":function(x,y){return x*y},
"/":function(x,y){return x/y},
"==":function(x,y){return x==y}}


console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne()}`);


