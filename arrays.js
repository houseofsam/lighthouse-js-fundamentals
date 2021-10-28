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

//----------------------
let range = function(start, end, step) {
  let array = [start];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return [];
  }else {
    for (let i = 0; array[i] + step <= end; i++) {
      start += step;
      array.push(start);
    }

    return array;
  }
}

console.log(range(2,10,2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));