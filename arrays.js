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
// looping - range challenge

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


//Looping - lastIndexOf Challenge
let lastIndexOf = function(arr, val) {
  let lastIndex;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val){
      lastIndex = i;
    }
  }

  if (lastIndex === undefined){
    return -1;
  }else {
    return lastIndex;
  }
}

console.log(lastIndexOf([3,4,5], 3));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


//Concatenate arrays challenge
let concat = (arr1, arr2) => [...arr1, ...arr2];

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);