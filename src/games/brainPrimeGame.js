import * as BL from '../index.js';

const definePrimeNum = (theNumber) => {
  for (let j = 2; j < theNumber; j += 1) {
    if (theNumber % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const launchBrainPrimeGame = () => {
  const userName = BL.greet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const theNumber = BL.getRandomInteger();

    const rightAnswer = definePrimeNum(theNumber);

    BL.askQuestion(theNumber);
    const userAnswer = BL.takeAnswer();

    if (userAnswer !== rightAnswer) {
      BL.detectGameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.detectWin(i, userName, BL.numberOfAttempts);
  }
};

export default launchBrainPrimeGame;
