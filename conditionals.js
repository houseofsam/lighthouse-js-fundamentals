// conditional example 1
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");



// conditional example 2
const temperature = 30;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// conditional example 3
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


// conditional example 4
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// conditional example 5
if (!raining) {
  console.log("Leave your umbrella at home!");
}


// conditionals whichSchool

// declare value function will be returning after assessing schoolAge
let output;

function whichSchool(schoolAge){
  // check school age conditions.
  if (schoolAge < 13) {
      return "Elementary School";
  } else if (schoolAge >= 13 && schoolAge <= 18) {
      return "Secondary School";
  } else {
    // ages outside of the ranges above
      return "Lighthouse Labs";
  }

  // console.log(output);
}
  
  // test conditions
  console.log("I am 12. Which school should I go to?");
  console.log(whichSchool(12));
  console.log("I am 18. Which school should I go to?")
  console.log(whichSchool(18));
  console.log("I am 24. Which school should I go to?")
  console.log(whichSchool(24));
