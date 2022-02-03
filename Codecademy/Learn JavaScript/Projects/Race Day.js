/*
Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this: registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age = 18;

if (early && age > 18){
    raceNumber += 1000;
}//adds 1000 to race number of early runners over 18 years of age

if (early && age > 18){
  console.log(`Your race begins at 0930. Your race number is ${raceNumber}.`)
}else if (!early && age > 18){
  console.log(`Your race begins at 1100. Your race number is ${raceNumber}.`)
}else if (age < 18){
  console.log(`Your race begins at 1230. Your race number is ${raceNumber}.`)
}else{
  console.log(`Your race number is ${raceNumber}. Please see the registration desk for race start time.`);
}//let's just ignore the fact that people who are 18 are considered adults.
