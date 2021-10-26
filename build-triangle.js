function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(size){
  row = "";
  for (let i = 1; i <= size; i++){
    row += makeLine(i);
  }
  return row;
}

console.log(buildTriangle(40));



//5-20 - Laugh (Quiz)

var laugh = function(num) {
  let result = "";
  for(let i = 1; i <= num; i++){
      result += "ha";
  }
  return result += "!";
}

console.log(laugh(3));