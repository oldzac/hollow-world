/*
EARN JAVASCRIPT
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let userName = "MaThIeW";
let userQuestion = "is it buckled?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber){
  case 0:
    eightBall = "SPEVEN";
    break;
  case 1:
    eightBall = "PEVE";
    break;
  case 2:
    eightBall = "NOT SPAVEN";
    break;
  case 3:
    eightBall = "HOW";
    break;
  case 4:
    eightBall = "NOT EVEN";
    break;
  case 5:
    eightBall = "DISGUSTING";
    break;
  case 6:
    eightBall = "UHM";
    break;
  case 7:
    eightBall = "TEVENING";
    break;
  default:
  break;
}

userName ?
  console.log(`Hello, ${userName.toUpperCase()}!`):
  console.log("You haven't entered a name!");

console.log(`${userName.toUpperCase()} asks: "${userQuestion}"`);

console.log(`Magic 8 Ball's predicition: ${eightBall}`);
