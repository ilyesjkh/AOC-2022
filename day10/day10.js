const { readFileSync, promises: fsPromises } = require('fs');
const input = readFileSync("day10_input.txt", 'utf-8').split("\n");
for(let i = 0; i < input.length; i++){
    input[i] = input[i].split(" ");
    if(input[i].length > 1){
    input[i][1] = parseInt(input[i][1]);}
}

function initializeCycle(){
    return {cyclenumber:0, x:1};
}



function RUN(){
    cycle = initializeCycle();
    let sum = 0;
    const allcycles = [0]
    for(let line =0; line<input.length; line++){
        if(input[line][0] == "noop"){
            cycle.cyclenumber += 1;
            allcycles.push(cycle.cyclenumber*cycle.x);

        } else {
            cycle.cyclenumber += 1
            allcycles.push(cycle.cyclenumber*cycle.x);
            cycle.cyclenumber += 1
            allcycles.push(cycle.cyclenumber*cycle.x);
            cycle.x += input[line][1];
        }
    }
    return allcycles;
}

function RUN2(){
    cycle = initializeCycle();
    let sum = 0;
    const allcycles = [0];
    
    for(let line =0; line<input.length; line++){
        if(input[line][0] == "noop"){
            cycle.cyclenumber += 1;
            allcycles.push(cycle.x);

        } else {
            cycle.cyclenumber += 1
            allcycles.push(cycle.x);
            cycle.cyclenumber += 1
            allcycles.push(cycle.x);
            cycle.x += input[line][1];
        }
    }
    return allcycles;
}

function partOne(cycles, everycycle){
    return everycycle.filter((value, index) => {
        if(cycles.includes(index)){return true;} else{ return false;}
    }).reduce((accumulator, element) => accumulator + element);
}

function partTwo(everycycle){
    let result = []
    let resulttemp = ""
    for(let i = 0; i<6; i++){
        resulttemp = ""
        for(let k = 1; k<=40; k++){
        let spriteposition = [everycycle[i*40+k], everycycle[i*40+k]+1, everycycle[i*40+k]+2];
        if(spriteposition.includes(k)){
            resulttemp+="#";
        } else { resulttemp +=".";}
    }
    result.push(resulttemp);
    }
    return result;
}

// console.log(partOne([20,60,100,140,180,220], RUN()));


console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne([20,60,100,140,180,220], RUN())}`);
console.log(`The answer to the second part is:`);
console.log(partTwo(RUN2()));

