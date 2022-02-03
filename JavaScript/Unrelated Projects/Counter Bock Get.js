/*
COUNTER takes advantage of GET
BOCK    takes advantage of COUNTER
GET     takes advantage of BOCK
IMPENETRABLE FORCE destroys COUNTER, BOCK, and GET
MAKE LOVE destroys IMPENETRABLE FORCE
equivalent moves nullify
*/
const playerOneName = '';//user input value unsanitized
const playerTwoName = '';//user input value unsanitized
const playerOneAttack = '';//unsanitized
const playerTwoAttack = '';//unsanitized

const gameOutput = (p1name = 'Player 1', p1atk = 'SWAY', p1dam = '0', p2name = 'Player 2', p2atk = 'SWAY', p2dam = '0') => {
  const gameDialog = [' has attacked ', "'s", ' brace with a ', ' brace with an ', ' defends with a ', ' defends with an ', ' It does ', ' It blocks ', ' damage. ', 'BOCK', 'COUNTER', 'GET', 'MAKE LOVE', 'IMPENETRABLE FORCE', '.'];
  console.log(`${p1name}${gameDialog[0]}${p2name}${gameDialog[1]}${gameDialog[2]}${p1atk}${gameDialog[14]}${gameDialog[6]}${p1dam}${gameDialog[8]}${p2name}${gameDialog[4]}${p2atk}${gameDialog[14]}${gameDialog[7]}${p2dam}${gameDialog[8]}`);
}
gameOutput();
//test commit