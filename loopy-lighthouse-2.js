// let loopyLighthouse = function (range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(`${words[0]}${words[1]}`);
//     } else if (i % multiples[0] === 0) {
//       console.log(`${words[0]}`);
//     } else if (i % multiples[1] === 0) {
//       console.log(`${words[1]}`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



let loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = '';

    // 0 = false. Therefore, zero remainder (aka divisible) = false
    !(i % multiples[0]) ? output += words[0] : ''; //if divisible by 1st number, add it to output
    !(i % multiples[1]) ? output += words[1] : ''; //if divisible by 2nd number, add it to output (as well)

    // Is there a true output (ie. was anything added to output)? If so print it out, else just print the index number.
    console.log(output ? output : i);
  }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);