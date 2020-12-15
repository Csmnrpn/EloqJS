const firstName = prompt('What is your fist name?');
const lastName = prompt("What is your last name?");
let age = Number(prompt('What is your age?'));
console.log(`Your first name: ${firstName}. Last name ${lastName}. Age ${age}`);
alert(`Your first name: ${firstName}. Last name ${lastName}. Age ${age}`);
alert(`You've been alive for ${age * 365.25} days. Wow`);