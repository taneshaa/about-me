'use strict';

// have correct and incorrect for yes or no answer

let name = prompt('Whats your name?');
alert('Welcome ' + name + '!');

let totalcorrectanswers = 0;
let color = prompt('Is green my favorite color?').toLowerCase();
if (color === 'yes') {
  alert('Thats right!');
  totalcorrectanswers++;
  console.log(color);
  console.log(totalcorrectanswers);
}
else {
  alert('boo, wrong answer :(');
  console.log(color);
}

let dog = prompt('Do I have a dog?').toLowerCase();
if (dog === 'yes') {
  alert('YES!! And shes the best');
  totalcorrectanswers++;
  console.log(dog);
}
else {
  alert('*dead pacmac sound* wrong');
  console.log(dog);
}


let car = prompt('Can I drive a manual?').toLowerCase();
if (car === 'yes') {
  alert('Of course! Its the fun way to drive');
  totalcorrectanswers++;
  console.log(car);
}
else {
  alert('You underestimate me...');
  console.log(car);
}


let beach = prompt('Do I prefer the beach over the forest?').toLowerCase();
if (beach === 'no') {
  alert('Facts! Id rather be in a hammock in the woods');
  totalcorrectanswers++;
  console.log(beach);
}
else {
  alert('tsk tsk tsk..wrong answer');
  console.log(beach);
}

let travel = prompt('Am I a dual citizen in the US in another country?').toLowerCase();
if (travel === 'no') {
  alert('You are right! Im not but I wish I was!!');
  totalcorrectanswers++;
  console.log(travel);
}
else {
  alert('I wish it was true..but alas, tis not');
  console.log(travel);
}

alert('Goodbye ' + name + '! Thanks for stoppin by');

let tries = 0;
let number = 7;
while (tries < 4) {
  tries++;
  let guess = +prompt('What number am I thinking of between 1-20');
  if (guess === number) {
    alert('Youre right!');
    tries = 4;
  }
  else if (guess < number) {
    alert('too low');
  }
  else {
    alert('too high');
  }
  if (tries === 4) {
    alert('No attempts left, Correct answer is 7');
  }
}

let attempt = 0;
let answer = ['explore', 'garden', 'try new things'];
while (attempt < 6) {
  let game = prompt('What are my 3 favorite things to do?');
  attempt++;
  for (let i = 0; i < answer.length; i++) {
    if (game === answer[i]) {
      alert('right!');
      totalcorrectanswers++;
      attempt = 6;
    }
  }
}

console.log(totalcorrectanswers);

alert('You got' + totalcorrectanswers + ' out of 7 answers correct!');
