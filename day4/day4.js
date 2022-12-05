const { readFileSync, promises: fsPromises } = require('fs');

function partOne(filename){
    const PairsList = readFileSync(filename, 'utf-8').split("\n");
    let Pairs = [];
    let count = 0;
    for(let i = 0; i < PairsList.length; i++){
        let elvesSections = PairsList[i].split(",");
        Pairs.push({first: {start: parseInt(elvesSections[0].split("-")[0]), end: parseInt(elvesSections[0].split("-")[1])}, 
        second: {start: parseInt(elvesSections[1].split("-")[0]), end: parseInt(elvesSections[1].split("-")[1])} });
        let ElfsSections = {first: "", second: ""};
        console.log(Pairs[i].first.start);
        console.log(Pairs[i].first.end);
        for(let k = Pairs[i].first.start; k <= Pairs[i].first.end; k++){
            ElfsSections.first += "-" + k.toString() + "-";
        }
        for(let j = Pairs[i].second.start; j <= Pairs[i].second.end; j++){
            ElfsSections.second += "-" + j.toString() + "-";
        }
        if(ElfsSections.second.length < ElfsSections.first.length){
            if(ElfsSections.first.includes(ElfsSections.second)){
                count ++;
            }}
        else{
            if(ElfsSections.second.includes(ElfsSections.first)){
                count ++;
            }
        }
    console.log(ElfsSections.first);
    console.log(count);
    }
    return count;
    
}

function partTwo(filename){
    const PairsList = readFileSync(filename, 'utf-8').split("\n");
    let Pairs = [];
    let count = 0;
    for(let i = 0; i < PairsList.length; i++){
        let elvesSections = PairsList[i].split(",");
        Pairs.push({first: {start: parseInt(elvesSections[0].split("-")[0]), end: parseInt(elvesSections[0].split("-")[1])}, 
        second: {start: parseInt(elvesSections[1].split("-")[0]), end: parseInt(elvesSections[1].split("-")[1])} });
        let ElfsSections = {first: [], second: []};
        for(let k = Pairs[i].first.start; k <= Pairs[i].first.end; k++){
            ElfsSections.first.push(k.toString());
        }
        for(let j = Pairs[i].second.start; j <= Pairs[i].second.end; j++){
            ElfsSections.second.push(j.toString());
        }
        let v = 0;
        let commonPointVerif = false;
        while(v < ElfsSections.first.length && commonPointVerif == false){
            let z = 0;
            while(z < ElfsSections.second.length && commonPointVerif == false){
                if(ElfsSections.first[v] == ElfsSections.second[z]){
                    commonPointVerif = true;
                    count++;
                } else { z++;}}
            v++;
        }
    }
    return count;
    
}

console.log(partTwo("day4_input.txt"));