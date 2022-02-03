//takes a number and returns a text string
function cbgString(x){
  switch (x){
    case 0:
      return 'BOCK';
      break;
    case 1:
      return 'COUNTER';
      break;
    case 2:
      return 'GET';
      break;
    case 3:
      return 'MAKE LOVE';
      break;
    case 4:
      return 'IMPENETRABLE FORCE';
      break;
    default:
      return 1;
      break;
  }
}

//takes range and returns integer between 0 and range
function rollIntegerRange(range){
    return Math.round(Math.random() * range);
  }

/*  function damageCalc(mlc){
    if (mlc === 1){
      return 0;
    }else if (mlc === 2){
      return 1;
    }else{
      return 2;
    }
  }*/

//function for checking make love move
function isMakeLoveImpenetrable(atk,def){
  //case for making love to an impenetrable force.
  if (atk === 3 && def === 4){
    rollDamage = 100;
    defenderDef = 0;
  //case for impenetrably forcing a make love.
  }else if (atk === 4 && def === 3){
    rollDamage = 0;
    defenderDef = 100;
  }else {
    return;
  }
}

///function test(){return 0;}

const freeBase = 47;
//let attackerHP = 100;
//let attackerDef = 0;
let defenderHP = 100;
let defenderDef = 0;
let attackerCBG = rollIntegerRange(3);
let defenderCBG = rollIntegerRange(3);
let dialogAttack = cbgString(attackerCBG);
let dialogDefend = cbgString(defenderCBG);
let rollDamage = rollIntegerRange(100);
let rollDefend = rollIntegerRange(20);
let defenderCurrentHealth = defenderHP - rollDamage;
const attackerBrace = 'LEFT';
const defenderBrace = 'LEFT';
const dialogOne = 'My preferred leg is ';
const dialogTwo = 'I have attacked your ';
const dialogSix = 'You have defended';
const dialogThree = ' with a ';
const dialogFour = 'It did ';
const dialogSeven = 'It blocked ';
const dialogFive = ' damage.';

isMakeLoveImpenetrable(rollDamage, rollDefend);
console.log(`${dialogOne}${attackerBrace}.`);
console.log(`${dialogTwo}${defenderBrace}${dialogThree}${dialogAttack}. ${dialogFour}${rollDamage}${dialogFive}`);
console.log(`${dialogSix}${dialogThree}${dialogDefend}. ${dialogSeven}${rollDefend}${dialogFive}`)
console.log(`Your HP = ${defenderCurrentHealth}`);
//console.log(freeBase);
console.log()
