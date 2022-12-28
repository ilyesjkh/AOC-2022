const { readFileSync, promises: fsPromises } = require('fs');
let input = readFileSync("day24_input.txt", 'utf-8').split("\n");
const l = input[0].length;
const h = input.length;
let position = {x:0, y:0};
const endpos = {x:0, y:input.length-1};



let blizzards = [];

function setPosition(){
    let initialPositionFound = false;
    let column = 0;
    while(initialPositionFound == false){
        if(input[0][column] == "."){
            position.x = column;
            initialPositionFound = true;
        } else{
            column++;
        return {x:column, y:0}}}}

const startpos = setPosition();
function setEndPos(){
    let endPositionFound = false;
    let column = 0;
    while(endPositionFound == false){
        if(input[input.length-1][column] == "."){
            endpos.x = column;
            endPositionFound = true;
        } else{
            column++;}}}
    


    

function initializeBlizzards(){
    let leftBliz = [];
    let rightBliz = [];
    let upBliz = [];
    let downBliz = [];
    for(let y = 1; y < h-1; y++){
        for(let x = 1; x < l-1; x++){
            if(input[y][x] == ">"){
                rightBliz.push({x:x,y:y});
            }
            else if(input[y][x] == "<"){
                leftBliz.push({x:x,y:y});
            }
            else if(input[y][x] == "^"){
                upBliz.push({x:x,y:y});
            }
            else if(input[y][x] == "v"){
                downBliz.push({x:x,y:y});
            }
        }   
    }
    blizzards.push(leftBliz);
    blizzards.push(rightBliz);
    blizzards.push(upBliz);
    blizzards.push(downBliz);
    return blizzards;
}

function nextMinute(){
    for(let direction = 0; direction<blizzards.length; direction++){
        for(let bliz = 0; bliz<blizzards[direction].length; bliz++){
            if(direction == 0){ 
                if(blizzards[direction][bliz].x == 1){
                blizzards[direction][bliz].x = l-2;
            } else {
                blizzards[direction][bliz].x--;
            }}
            else if(direction == 1){
                if(blizzards[direction][bliz].x == l-2){
                    blizzards[direction][bliz].x = 1;
                } else {
                    blizzards[direction][bliz].x++;
                }
            }
            else if(direction == 2){
                if(blizzards[direction][bliz].y == 1){
                    blizzards[direction][bliz].y = h-2;
                } else {
                    blizzards[direction][bliz].y--;
                }
            }
            else if(direction == 3){
                if(blizzards[direction][bliz].y == h-2){
                    blizzards[direction][bliz].y = 1;
                } else {
                    blizzards[direction][bliz].y++;
                }
            }
        }
    }
    return blizzards;
}



let positions = new Array(input.length);
let visit = new Array(input.length);
let precedents = new Array(input.length);
for(let i = 0; i<positions.length;i++){
    positions[i] = new Array(input[0].length).fill(Infinity);
    visit[i] = new Array(input[0].length).fill(false);
    precedents[i] = new Array(input[0].length);
}


function initializeDijsktra(){
    positions[0][position.x] = 0;
    visit[0][position.x] = true;
    precedents[0][position.x] = position;
}


function isAWall(position){
    if(input[position.y][position.x] == "#"){
        return true;
    } else {return false;}
}

let torpos = new Array(input.length);


function updateTornado(){
    for(let i = 0; i<torpos.length;i++){
        torpos[i] = new Array(input[0].length).fill(false);
    }
    for(let k = 0; k<blizzards.length;k++){
        for(let j = 0; j< blizzards[k].length; j++){
            torpos[blizzards[k][j].y][blizzards[k][j].x] = true;
        }
    }
    return torpos;

}



function possibleMoves(){
    let posmovs = []
    if(position.x < input[0].length - 1){
    posmovs.push({x:position.x+1, y:position.y})}
    if(position.y < input.length-1){
    posmovs.push({x:position.x, y:position.y+1})}
    if(position.y > 0){
    posmovs.push({x:position.x, y:position.y-1})}
    if(position.x > 0){
    posmovs.push({x:position.x-1, y:position.y})
    }
    posmovs.push({x:position.x,y:position.y})
    let posmovs1 = posmovs.filter(pos => !isAWall(pos));
    let posmovs2 = posmovs1.filter(pos => !torpos[pos.y][pos.x]);
    let posmovs3 = posmovs2.filter(pos => !visit[pos.y][pos.x]);
    return posmovs2;
}


let minute = 0;
let queue = [position];

function foundEnd(queueNodes){
    for(let i = 0; i<queueNodes.length;i++){
        if(queueNodes[i].x == endpos.x && queueNodes[i].y == endpos.y){
            return true;
        }
    }
    return false;
}

function foundStart(queueNodes){
    for(let i = 0; i<queueNodes.length;i++){
        if(queueNodes[i].x == startpos.x && queueNodes[i].y == startpos.y){
            return true;
        }
    }
    return false;
}


function getRidOfDoublons(queueList){
    let q = []
    for(let i = 0; i<queueList.length; i++){
        let ver = true;
        let k = 0;
        while(k<q.length && ver == true){
            if(q[k].x == queueList[i].x && q[k].y == queueList[i].y){
                ver = false;
            }
            k++;
        }
        if(ver == true){q.push(queueList[i])};
    }
    return q;
}


let nodes_left = 1;
function partOne(){
    let k = 0;
    while( !foundEnd(queue)){
    nextMinute();
    updateTornado();
    while(nodes_left != 0){
        position = queue[0];
        let a = possibleMoves();
        queue.shift();
        if(a.length != 0){
        for(let w = 0; w<a.length;w++){
            queue.push({x:a[w].x,y:a[w].y});}
        } else{
            if(!torpos[position.y][position.x]){
                queue.push({x:position.x,y:position.y})};

        }


        nodes_left--;
    }
    queue = getRidOfDoublons(queue);
    nodes_left = queue.length;
    minute ++;
    k++;
    
} 
return minute;
}


function partTwo(){
    position = endpos;
    queue = [position];
    let k = 0;
    while( !foundStart(queue)){
    nextMinute();
    updateTornado();
    while(nodes_left != 0){
        position = queue[0];
        let a = possibleMoves();
        queue.shift();
        if(a.length != 0){
        for(let w = 0; w<a.length;w++){
            queue.push({x:a[w].x,y:a[w].y});}
        } else{
            if(!torpos[position.y][position.x]){
                queue.push({x:position.x,y:position.y})};

        }
        nodes_left--;
    }
    queue = getRidOfDoublons(queue);
    nodes_left = queue.length;
    minute ++;
    k++;
} 
    position = startpos;
    queue = [position];
    partOne();
return minute;
}






setPosition();
initializeBlizzards();
initializeDijsktra();
setEndPos();
updateTornado();



console.log("If we consider the complete input (given by AOC and available on my github):");
console.log(`The answer to the first part is: ${partOne()}`);
console.log(`The answer to the second part is: ${partTwo()}`);


