// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const multipliedByTwo = nums.map((currentEl) => {
    return currentEl * 2;
});
// Answer to Exercise 1:
console.log(multipliedByTwo);

/* ------------------------------------ - ----------------------------------- */
// Given the following array, use destructuring to pull out the first and second
// values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Answer to Exercise 2:
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

/* ------------------------------------ - ----------------------------------- */
// Given the following object, use destructuring to create variables
// `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
// Answer to Exercise 3:
const { make, model } = car

console.log(make);
console.log(model);

/* ------------------------------------ - ----------------------------------- */
// Duplicate the following array using the spread operator and assign
// it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Answer to Exercise 4:
const controversialPizzaToppings = [...pizzaToppings2]
console.log(controversialPizzaToppings);

/* ------------------------------------ - ----------------------------------- */
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Answer to Exercise 5:
  const myCar = {...car2}
  myCar.model = 'q7';

  console.log(car2)
  console.log(myCar)
  
/* ------------------------------------ - ----------------------------------- */
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username,
// age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Answer to Exercise 6:
const propertyName = 'username'

const userProfile = {
  [propertyName]: 'aNewUser'
};

console.log(userProfile)

/* ------------------------------------ - ----------------------------------- */
// Create a function that takes two parameters, `noun` and `adjective`
// both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default.
// The function should substitute the appropriate parameters when supplied arguments.

// Answer to Exercise 8:
function pet(noun = 'cat', adjective = 'white') {
  return (`The ${noun} is ${adjective}.`)
}

console.log(pet())
console.log(pet('dog', 'black'))

/* ------------------------------------ - ----------------------------------- */
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Answer to Exercise 9:
pizza === 'tasty' ? console.log('yum') : console.log ('yuck')

/* ------------------------------------ - ----------------------------------- */
// 10.1 SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical
// OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Answer to Exercise 10.1:
let LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);
/* ------------------------------------ - ----------------------------------- */
// 10.2 SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Answer to Exercise 10.2:
let USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

/* ------------------------------------ - ----------------------------------- */
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional
// chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age?.name

// Answer to Exercise 11:


console.log(cat);
