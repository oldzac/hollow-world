//dogYears codecademy js project 2201281521
//converting human year to dog years
//dog year 1 and 2 count for 10.5 human years each
//each dog year after counts at 4 human years
const myName = 'Zac'.toLowerCase();
//i could have just written my name in lowercase but here we are
let myAge = 34;
//this is the user's age
let earlyYears = 2;
//not sure why this will change but whatev this variable accounts for the two years where dogs mature quickly
earlyYears *= 10.5;
//comment not necessary but i guess when you start the program and if you're only 1 it might make a difference idk
let laterYears = myAge - 2;
//is the variable we do math on to dtermine the rest of how old you would be as a dog
laterYears *= 4;
//this turns laterYears into (myAge-2)*4
let myAgeInDogYears = earlyYears + laterYears;
//my age in dog years is early years plus later years. aparently does not account for if the user age is 2 or less.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
//hi i'm zac and i'm old and i'm even older in dog years tyvm
