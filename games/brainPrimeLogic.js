import * as BL from '../src/index.js';

const brainPrimeGame = () => {
  const userName = BL.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const theNumber = BL.getRandomInteger();

    const rightAnswer = BL.isPrime(theNumber);

    BL.askQuestion(theNumber);
    const userAnswer = BL.takeAnswer();

    if (userAnswer !== rightAnswer) {
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.winDetector(i, userName, BL.numberOfAttempts);
  }
};

export default brainPrimeGame;
