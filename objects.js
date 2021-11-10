// Trash to treasure object assignment.
let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}

let smartGarbage = function(trash, bins) {
  bins[trash]++;
  return bins;
}

console.log(smartGarbage('recycling', bins));
console.log(smartGarbage('waste', bins));
console.log(smartGarbage('recycling', bins));
console.log(smartGarbage('recycling', bins));
console.log(smartGarbage('compost', bins));


// Driving Mayor Daisy assignment
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]


let carPassing = (cars, speed) => {
  cars.push({time: Date.now(), speed});
  return cars;
}

console.log(carPassing(cars, 38));


// We're rooting for you judgeVegetable() challenge
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 1,
    plumpness: 3
  }
]

const metric = 'redness'

let judgeVegetable = function(vegetables, metric) {
  return vegetables.reduce((bestVeg, veg) => {
    // if the accumulated bestVeg's metric is greater than the one currently being iterated, bestVeg stays bestVeg, else the current one being processed becomes the new bestVeg.
    return bestVeg[metric] > veg[metric] ? bestVeg : veg;
  }).submitter;
}

console.log(judgeVegetable(vegetables, metric));

function judgeVegetable2() {
  let score = 0;
  let winner;
  for (let object of vegetables){
    if (object[metric] > score){
      score = object[metric];
      winner = object['submitter'];
    } 
  }
  return winner;
}

console.log(judgeVegetablee(vegetables, metric));