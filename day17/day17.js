const { readFileSync, promises: fsPromises } = require('fs');
const input = readFileSync("day17_input.txt", 'utf-8').split("");
let input2 = readFileSync("day17_input.txt", 'utf-8').split("");


function initializeShape(shapeNumber, h){
    if(shapeNumber == 0){
        return [[2,h],[3,h],[4,h],[5,h]];
    } else if(shapeNumber == 1){
        return [[2,h+1],[3,h+1],[4,h+1],[3,h+2],[3,h]];
    } else if(shapeNumber == 2){
        return [[2,h],[3,h],[4,h],[4,h+1],[4,h+2]];
    } else if(shapeNumber == 3){
        return [[2,h],[2,h+1],[2,h+2],[2,h+3]];
    } else if(shapeNumber == 4){
        return [[2,h],[3,h],[2,h+1],[3,h+1]];
    }
}

let highest = 0;
let chamberShapes = [];

function gasEffect(shapeList, k){
    let a = Array.from(shapeList);
    if(k == "<"){
        let verif = false;
        for(let i = 0; i < a.length; i++){
            if(a[i][0] < 1){
                verif = true;
            };
        }
        if(verif == false){
        for(let i = 0; i < a.length; i++){
            a[i][0] -= 1;
        }}
    } else if(k == ">"){
        let verif = false;
        for(let i = 0; i < a.length; i++){
            if(a[i][0] >= 6){
                verif = true;
            };
        }
        if(verif == false){
        for(let i = 0; i < a.length; i++){
            a[i][0] += 1;
        }}
    }
    return a;
}

function movedown(shapeList){
    let a = shapeList;
    let verif = true;
    for(let i = 0; i < a.length; i++){
        a[i][1] -= 1;
    }
    return a;
}

function gasCommand(){
    if(input2.length == 0){
        input2 = readFileSync("day17_input.txt", 'utf-8').split("");}
    return input2.shift();}

function highesttop(chamberShapes){
    let max = 0;
    for(let i = 0; i<chamberShapes.length;i++){
        if(chamberShapes[i][1] > max){
            max = chamberShapes[i][1];
        }

    }
    return max;

}

function check(arr1, arr2){
    let i = 0;
    let j = 0;
    while(i < arr1.length){
        j = 0;
        while(j < arr2.length){
        if(arr1[i][0] == arr2[j][0] && arr1[i][1] == arr2[j][1]){
            return true;
        }
        j++;}
        i++;}
        return false;
    }

function partOne(){
    let h = 0;
    for(let i = 0; i<7; i++){
        chamberShapes.push([i,-1])
    }
    for(let i = 0; i<2022; i++){
        h+=3;
        let shape = initializeShape(i%5, h);
        let e = 0;
        let verif = false;
        while(verif == false){
        let shapeinit = shape.map(function(arr){return arr.slice()});
        if(check(gasEffect(shape,gasCommand()),chamberShapes)){
            shape = shapeinit;
        }
        let shapeinit2 = shape.map(function(arr){return arr.slice()});
        if(check(movedown(shape),chamberShapes)){
            shape = shapeinit2;
            verif = true;} 
        e++;
        }
        for(let w=0;w<shape.length;w++){
        chamberShapes.push(shape[w]);}
        h = highesttop(chamberShapes) + 1;
        }
        return highesttop(chamberShapes) + 1;
    }


console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne()}`);