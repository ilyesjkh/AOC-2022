const { readFileSync, promises: fsPromises } = require('fs');
const commands = readFileSync("day7_input.txt", 'utf-8').split("\n");

function buildRoot(commands){
    let root = {name: "/", files : [], dirs : []};
    let k = 2
    while(k < commands.length && commands[k][0] != "$"){
        if(commands[k].substring(0,3) == "dir"){
            root.dirs.push({name: commands[k].substring(4), stockage: 0});
        }
        else{root.files.push({name: commands[k].split(" ")[1], stockage: parseInt(commands[k].split(" ")[0])});
        }
        k++
    }
    return root;
}

function buildDir(name){
    let list = []
    let dir = {name: name, files : [], dirs : [], stockage: 0};
    let k = commands.indexOf(`$ cd ${name}`) + 2;
    while(k < commands.length && commands[k][0] != "$"){
        if(commands[k].substring(0,3) == "dir"){
            dir.dirs.push({name: commands[k].substring(4), stockage: 0});
        }
        else{dir.files.push({name: commands[k].split(" ")[1], stockage: parseInt(commands[k].split(" ")[0])});
        }
        list.push(dir);
        k++
    }
    return dir;
}

let dirlist = [];

function buildNext(dir){
    dirlist.push(dir);
    if(dir.dirs.length != 0){
        for(let i = 0; i < dir.dirs.length; i++){
            buildNext(buildDir(dir.dirs[i].name));
        }
    } 
    return 0;
}

function getSizes(directories_list){
    dirlist = dirlist.map(dir => {
        if(dir.dirs.length == 0){
            dir.stockage = sumFileSizes(dir)
            return dir
        } else {return dir;}});
    let directorieswithsize = dirlist.filter(dir => dir.dirs.length == 0).map(dir => dir.name);
    let k = 0;
    while(dirlist[0].stockage == 0){
        if(dirlist[k].dirs.every((element) => {if(element.stockage != 0){return true;} 
        else { return false;}})){
            dirlist[k].stockage = sumTotalDirSizes(dirlist[k]);
            updateStockageDirs(dirlist[k]);
            
        }
        k++;
        if(k >= dirlist.length){
            k = 0;
        }}
    
        
    return 0;}

function sumFileSizes(directory){
    let sum = 0;
    for(let i = 0; i < directory.files.length; i++){
        sum += directory.files[i].stockage;
    }
    return sum;
}

function sumTotalDirSizes(directory){
    let sum = 0;
    sum += sumFileSizes(directory);
    for(let i = 0; i < directory.dirs.length; i++){
        sum += directory.dirs[i].stockage;
    }
    return sum;
}

function updateStockageDirs(dir){
    for(let i = 0; i < dirlist.length; i++){
        for(let k = 0; k < dirlist[i].dirs.length; k++){
            if(dirlist[i].dirs[k].name == dir.name){
                dirlist[i].dirs[k].stockage = dir.stockage;
            }
        }
    }
}


function partOne(filename){
    let root = buildDir("/");
    buildNext(root);
    getSizes(dirlist);
    let result = [];
    for(let i = 0; i < dirlist.length; i++){
        if(dirlist[i].stockage <= 100000){
            console.log(`directory: ${dirlist[i].name} || size: ${dirlist[i].stockage}`)
            result.push(dirlist[i].stockage);
        }
    }
    return result.reduce((partialSum, a) => partialSum+a,0);
}

console.log(partOne("day7_input.txt"));