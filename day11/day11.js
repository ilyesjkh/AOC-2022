const { readFileSync, promises: fsPromises } = require('fs');
const input = readFileSync("day11_input.txt", 'utf-8').split("\n\n");
for(let i = 0; i < input.length; i++){
    input[i] = input[i].split("\n");
}


function initializeMonkeys(input){
    let monkeys = [];
    for(let i = 0; i<input.length; i++){
        items = input[i][1].split(":")[1].split(",").map(Number);
        test = parseInt(input[i][3].split("by")[1])
        passreceiver = parseInt(input[i][4].split("monkey")[1])
        failreceiver = parseInt(input[i][5].split("monkey")[1])
        operationtype = input[i][2].split("old")[1][1];
        operationnumber = parseInt(input[i][2].split("old")[1].substring(2));
        monkeys.push({items: items, test: test, successreceiver: passreceiver, failreceiver: failreceiver,
        operationtype: operationtype, operationnumber: operationnumber, itemsinspected: 0})
    }
    return monkeys;
}

function testing(itemworriness, monkey){
    if(itemworriness%monkey.test == 0n){
        return true;
    } else { 
        return false;
    }
}

function partOne(rounds, monkeys){
    for(let i = 1; i <= rounds; i++){
        for(let monkey = 0; monkey<monkeys.length; monkey++){
            while(monkeys[monkey].items.length != 0){
            iteminspected = monkeys[monkey].items.shift();
            monkeys[monkey].itemsinspected += 1;
            iteminspected = inspection(iteminspected, monkeys[monkey], true);
            if(testing(iteminspected, monkeys[monkey]) == true){
                monkeys[monkeys[monkey].successreceiver].items.push(iteminspected);
            } else{
                monkeys[monkeys[monkey].failreceiver].items.push(iteminspected);
            }
        }
    }
}
let results = [];
for(let i = 0; i<monkeys.length;i++){
    results.push(monkeys[i].itemsinspected)
}
return results.sort(function(a, b){return b - a}).slice(0, 2).reduce((accumulator, currentValue) => accumulator * currentValue);
}

function partTwo(rounds, monkeys){
    for(let i = 1; i <= rounds; i++){
        for(let monkey = 0; monkey<monkeys.length; monkey++){
            while(monkeys[monkey].items.length != 0){
            iteminspected = monkeys[monkey].items.shift();
            monkeys[monkey].itemsinspected += 1;
            iteminspected = inspection(iteminspected, monkeys[monkey], false)%(finaldivider(monkeys));

            if(testing(iteminspected, monkeys[monkey]) == true){
                monkeys[monkeys[monkey].successreceiver].items.push(iteminspected);
            } else{
                monkeys[monkeys[monkey].failreceiver].items.push(iteminspected);
            }
        }
    }
}
let results = [];
for(let i = 0; i<monkeys.length;i++){
    results.push(monkeys[i].itemsinspected)
}
return results.sort(function(a, b){return b - a}).slice(0, 2).reduce((accumulator, currentValue) => accumulator * currentValue);
}



function inspection(itemworriness, monkey, dividedbythree){
    if(monkey.operationtype == "*"){
    if(monkey.operationnumber != 0){
        itemworriness = itemworriness * monkey.operationnumber;
    } else { itemworriness = itemworriness * itemworriness;}
} else if(monkey.operationtype == "+"){
    if(monkey.operationnumber != 0){
        itemworriness = itemworriness+ monkey.operationnumber;
    } else {itemworriness = itemworriness+ itemworriness;}
}
if(dividedbythree == true){
return Math.floor(itemworriness/3);}
else{
    return itemworriness;
}
}

function finaldivider(monkeys){
    result = 1;
    for(let i = 0; i<monkeys.length; i++){
        result = result * monkeys[i].test;
    }
    return result;
}




console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne(20, initializeMonkeys(input))}`);
console.log(`The answer to the second part is: ${partTwo(10001, initializeMonkeys(input))}`);