const { readFileSync, promises: fsPromises } = require('fs');

function partOne(filename){
    const fileLinesContent = readFileSync(filename, 'utf-8').replace("\n\n","\n").split("\n");
    let index = 0;
    const stacks = [];
    const stacksLines = [];
    while(parseInt(fileLinesContent[index][1]) != 1 ){index++;}
    for(let v = 0; v < fileLinesContent[index].replace(/\[|\]|\ /g,'').length;v++){stacks.push([]);}
    for(let i = index - 1; i >= 0; i--){
        let stackLine = ""
        for(let a = 1; a <= fileLinesContent[i].length; a+=4){stackLine += fileLinesContent[i][a];}
        for(let k = 0; k < stacks.length; k++){
            if(stackLine[k] != " "){
                stacks[k].push(stackLine[k]);
            }
        }
    }
    let commands = fileLinesContent.slice(index+1).map(x => { return {
        nbOfElements: parseInt(x.replace("move","").split(/from|to/)[0] ), 
        source: parseInt(x.replace("move","").split(/from|to/)[1]) - 1, 
        destination: parseInt(x.replace("move","").split(/from|to/)[2]) - 1}});
        
    for(let w = 0; w < commands.length; w++){
        for(let poppingIndex = 1; poppingIndex <= commands[w].nbOfElements; poppingIndex++){
            stacks[commands[w].destination].push(stacks[commands[w].source].pop());
        }
    }
    return stacks.map(element => element.slice(-1)[0]).join("");
}

function partTwo(filename){
    const fileLinesContent = readFileSync(filename, 'utf-8').replace("\n\n","\n").split("\n");
    let index = 0;
    const stacks = [];
    const stacksLines = [];
    while(parseInt(fileLinesContent[index][1]) != 1 ){index++;}
    for(let v = 0; v < fileLinesContent[index].replace(/\[|\]|\ /g,'').length;v++){stacks.push([]);}
    for(let i = index - 1; i >= 0; i--){
        let stackLine = ""
        for(let a = 1; a <= fileLinesContent[i].length; a+=4){stackLine += fileLinesContent[i][a];}
        for(let k = 0; k < stacks.length; k++){
            if(stackLine[k] != " "){
                stacks[k].push(stackLine[k]);
            }
        }
    }
    let commands = fileLinesContent.slice(index+1).map(x => { return {
        nbOfElements: parseInt(x.replace("move","").split(/from|to/)[0] ), 
        source: parseInt(x.replace("move","").split(/from|to/)[1]) - 1, 
        destination: parseInt(x.replace("move","").split(/from|to/)[2]) - 1}});
        
    for(let w = 0; w < commands.length; w++){
        let temporaryStacking = []
        for(let poppingIndex = 1; poppingIndex <= commands[w].nbOfElements; poppingIndex++){
            temporaryStacking.push(stacks[commands[w].source].pop());
        }
        for(let poppingIndex = 1; poppingIndex <= commands[w].nbOfElements; poppingIndex++){
            stacks[commands[w].destination].push(temporaryStacking.pop());
        }
    }
    return stacks.map(element => element.slice(-1)[0]).join("");
}
console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne("day5_input.txt")}`);
console.log(`The answer to the second part is: ${partTwo("day5_input.txt")}`);