/*
Arrays with let and const
You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);//reassigns 'condiments' as a new array with one element, because of let

utensils[3] = 'Spoon';
console.log(utensils);//can still change elements inside a const array

utensils = ['Spoon'];
console.log(utensils);//cannot reassign 'utensils' as a new array with one element, because const
