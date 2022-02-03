/*
Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.
*/
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//Turned to an "arrow" declared function
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//i guess this is fine to read other code but damn why bother even changing the way you write them it seems so redundant
