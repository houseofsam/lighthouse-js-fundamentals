var tier = "collector's deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);


//Voting station calculation challenge
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function(stations) {
  let goodStations = [];
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

//X Marks the Perfect Shot Challenge
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function(moves) {
  // [x, y] 
  let position = [0, 0];
  for (let direction of moves) {
    if (direction === 'north') {
      position[1]++;
    }else if (direction === 'east') {
      position[0]++;
    }else if (direction === 'south') {
      position[1]--;
    }else if (direction === 'west') {
      position[0]--;
    }else {
      console.log('Invalid direction!');
    }
  }
  return position;
}

console.log(finalPosition(moves));

// Age calculator challenge
const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age;
  age = currentYear - yearOfBirth;

  return `${name} is ${age} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


// howManyHundreds Prep Assignment
const howManyHundreds = function(bottles){
  if (bottles < 0) {
    return 0;
  }else {
    return Math.floor(bottles / 100);
  }
}


console.log(howManyHundreds(10000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(-99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

// Area Calculators Challenge

const calculateRectangleArea = function(length, width) {
  if (length * width < 0){
    return undefined;
  }else {
    return length * width;
  }
}
const calculateTriangleArea = function(base, height) {
  if (base < 0 || height < 0){
    return undefined;
  }else {
    return base * height / 2;
  }
}
const calculateCircleArea = function(radius) {
  if (radius < 0){
    return undefined;
  }else {
    return Math.PI * Math.pow(radius, 2);
  }
}




console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(0, 0, "chocolate frosted", "glazed");
console.log(donuts);



// For Each # div by 3.
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(num, idx) {
  if(num % 3 === 0) {
    test[idx] += 100;  
  }
});

console.log(test);



// I got Bills Totals with 15% Tip Array
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(totals) {
  (totals *= 1.15);
  return Number(totals.toFixed(2));
});

console.log(totals);
