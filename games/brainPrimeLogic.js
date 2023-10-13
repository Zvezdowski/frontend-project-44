import * as BL from '../src/index.js';

const brainPrimeGame = () => {
  let winsCounter = 0;
  const userName = BL.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
    const theNumber = BL.getRandomInteger();

    let rightAnswer = 'yes';
    for (let j = 2; j < theNumber; j += 1) {
      if (theNumber % j === 0) {
        rightAnswer = 'no';
        break;
      }
    }

    BL.askQuestion(theNumber);
    const userAnswer = BL.takeAnswer();

    if (userAnswer === rightAnswer) {
      winsCounter += 1;
      console.log('Correct!');
      BL.winDetector(winsCounter, userName);
    } else {
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }
  }
};

export default brainPrimeGame;
