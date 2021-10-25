// set the for loop conditions
for (let i = 100; i <= 200; i++){
  //check to see if current number/increment is divisive by 3 and 4, 3, and 4, respectively.
  if (i % 3 === 0 && i%4 === 0){
    console.log('LoopyLighthouse');
  }else if (i % 3 === 0){
    console.log('Loopy');
  }else if (i % 4 === 0){
    console.log('Lighthouse');
  }else{
    //print number if they don't fall under any of the categories above
    console.log(i);
  }
}