const { readFileSync, promises: fsPromises } = require('fs');

function maxCalories(filename){
    const elvesCaloriesList = readFileSync(filename, 'utf-8');
    const elfCalories = elvesCaloriesList.split('\n\n');
    let max = 0;
    for(let i = 0; i<elfCalories.length; i++){
        let caloriesCarried = elfCalories[i].split('\n');
        let calories = caloriesCarried.map(Number).reduce((partialSum, a) => partialSum+a,0);
        if(calories>max){
            max = calories;
        }
    }
    return max;

}

function maxThreeCalories(filename){
    const elvesCaloriesList = readFileSync(filename, 'utf-8');
    const elfCalories = elvesCaloriesList.split('\n\n');
    let caloriesPerElf = Array(elfCalories.length)
    for(let i = 0; i<elfCalories.length; i++){
        let caloriesCarried = elfCalories[i].split('\n');
        caloriesPerElf[i] = caloriesCarried.map(Number).reduce((partialSum, a) => partialSum+a,0);
    }
    return caloriesPerElf.sort(function(a, b){return b-a}).slice(0,3).reduce((partialSum, a) => partialSum+a,0);

}

console.log(maxCalories("day1_file.txt"));
console.log(maxThreeCalories("day1_file.txt"));
