'use strict';

// have correct and incorrect for yes or no answer

let name = prompt('Whats your name?');
alert('Welcome ' + name + '!');

let color =prompt('Is green my favorite color?').toLowerCase();
if (color === 'yes') {
  alert('Thats right!');
  console.log(color);
}
else {
  alert('boo, wrong answer :(');
  console.log(color);
}

let dog = prompt('Do I have a dog?').toLowerCase();
if (dog === 'yes') {
  alert('YES!! And shes the best');
  console.log(dog);
}
else {
  alert('*dead pacmac sound* wrong');
  console.log(dog);
}


let car = prompt('Can I drive a manual?').toLowerCase();
if (car === 'yes') {
  alert('Of course! Its the fun way to drive');
  console.log(car);
}
else {
  alert('You underestimate me...');
  console.log(car);
}


let beach = prompt('Do I prefer the beach over the forest?').toLowerCase();
if (beach === 'no') {
  alert('Facts! Id rather be in a hammock in the woods');
  console.log(beach);
}
else {
  alert('tsk tsk tsk..wrong answer');
  console.log(beach);
}

let travel = prompt('Am I a dual citizen in the US in another country?').toLowerCase();
if (travel === 'no') {
  alert('You are right! Im not but I wish I was!!');
  console.log(travel);
}
else {
  alert('I wish it was true..but alas, tis not');
  console.log(travel);
}

alert('Goodbye ' + name + '! Thanks for stoppin by');
