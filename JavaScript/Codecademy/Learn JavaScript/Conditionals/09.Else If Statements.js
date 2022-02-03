/*
Else If Statements
We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.
*/

let season = 'sPrInG';

if (season.toLowerCase() === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
else if (season.toLowerCase() === 'fall') {
  console.log("It's fall and the trees look nice.")
}
else if (season.toLowerCase() === 'winter'){
  console.log("It's winter and it looks nice when it snows but otherwise it sucks.")
}
else if (season.toLowerCase() === 'summer'){
  console.log("It's summer and if you don't like it you can GET OUT.")
}
else {
  console.log('Invalid season.');
}
