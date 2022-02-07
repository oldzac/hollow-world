/**
 * Nested Loops
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop:

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.

Now it’s your turn to write a nested loop!

Note: To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop(s).
 */
const p1Followers = ['cayden','aiden','brayden','jayden','zayden','gayden','hayden'];
const p2Followers = ['aiden','xavier','brayden','george','william','zayden','bob','cayden'];
let mutualFollowers = [];
for(let i = 0; i < p1Followers.length; i++){
    for(let j = 0; j < p2Followers.length; j++){
        if (p1Followers[i] === p2Followers[j]){
            mutualFollowers.push(p1Followers[i]);
        }
    }
}
console.log(mutualFollowers);