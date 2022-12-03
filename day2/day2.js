const { readFileSync, promises: fsPromises } = require('fs');

function partOne(filename){
    const RPSClashes = readFileSync(filename, 'utf-8').split("\n");
    let score = 0;
    const outcomePoints = {win:6, draw:3, loss:0};
    const shapesPoints = {rock:1, paper:2, scissors:3};
    for(let i = 0; i<RPSClashes.length;i++){
        let opponnentsMove = RPSClashes[i].split(" ")[0];
        let myMove = RPSClashes[i].split(" ")[1];
        if(opponnentsMove == "A"){
            if(myMove == "X"){
                score += outcomePoints.loss + shapesPoints.scissors;
            }
            else if(myMove == "Y"){
                score += outcomePoints.draw + shapesPoints.rock;
            }
            else if(myMove == "Z"){
                score += outcomePoints.win + shapesPoints.paper;
            }
        }
        else if(myMove == "Y"){
            if(opponnentsMove == "A"){
                score += outcomePoints.win + shapesPoints.paper;
            }
            else if(opponnentsMove == "B"){
                score += outcomePoints.draw + shapesPoints.paper;
            }
            else if(opponnentsMove == "C"){
                score += outcomePoints.loss + shapesPoints.paper;
            }
        }
        else if(myMove == "Z"){
            if(opponnentsMove == "A"){
                score += outcomePoints.loss + shapesPoints.scissors;
            }
            else if(opponnentsMove == "B"){
                score += outcomePoints.win + shapesPoints.scissors;
            }
            else if(opponnentsMove == "C"){
                score += outcomePoints.draw + shapesPoints.scissors;
            }
        }
    }
    return score;
}

function partTwo(filename){
    const RPSClashes = readFileSync(filename, 'utf-8').split("\n");
    let score = 0;
    const outcomePoints = {win:6, draw:3, loss:0};
    const shapesPoints = {rock:1, paper:2, scissors:3};
    for(let i = 0; i<RPSClashes.length;i++){
        let opponnentsMove = RPSClashes[i].split(" ")[0];
        let myMove = RPSClashes[i].split(" ")[1];
        if(myMove == "X"){
            if(opponnentsMove == "A"){
                score += outcomePoints.loss + shapesPoints.scissors;
            }
            else if(opponnentsMove == "B"){
                score += outcomePoints.loss + shapesPoints.rock;
            }
            else if(opponnentsMove == "C"){
                score += outcomePoints.loss + shapesPoints.paper;
            }
        }
        else if(myMove == "Y"){
            if(opponnentsMove == "A"){
                score += outcomePoints.draw + shapesPoints.rock;
            }
            else if(opponnentsMove == "B"){
                score += outcomePoints.draw + shapesPoints.paper;
            }
            else if(opponnentsMove == "C"){
                score += outcomePoints.draw + shapesPoints.scissors;
            }
        }
        else if(myMove == "Z"){
            if(opponnentsMove == "A"){
                score += outcomePoints.win + shapesPoints.paper;
            }
            else if(opponnentsMove == "B"){
                score += outcomePoints.win + shapesPoints.scissors;
            }
            else if(opponnentsMove == "C"){
                score += outcomePoints.win + shapesPoints.rock;
            }
        }
        
    }
    return score;
}

console.log("If we consider the complete input (given by AOC and available on my github):");
console.log("The answer to the first part is: %d", partOne("day2_input.txt"));
console.log("The answer to the second part is: %d", partTwo("day2_input.txt"));
