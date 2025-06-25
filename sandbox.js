'use strict';

// const askName = prompt('What is your name');
// console.log(askName);

// alert(`${askName} i like you`);

const fun = function () {
  const askName = prompt('What is your name');

  alert(`${askName} I like you`);
  alert('And I want you');
  alert('Now we can do this the easy way');
  alert('Or we can do this the hard way');
  alert('The choice is yours');

  const choice = confirm('So whats it gonna be?');
  if (choice) {
    alert("I see you've chosen the easy way 🤟");
  } else {
    alert('Sounds like to me you want it the hard way 💣');
  }
};

fun();
