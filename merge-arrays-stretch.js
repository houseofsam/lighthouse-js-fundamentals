// If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a , i.e., b will come first. If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
// const util = require('util');

let merge = function (arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  return mergedArr.sort( (a, b) => a - b );
}



// console.log(util.inspect(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ], {breakLength: Infinity, compact: true}) );
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

