import * as BL from '../index.js';

const launchBrainEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = BL.greet();

  let rightAnswer = '';

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const randomInteger = BL.getRandomInteger();

    if (randomInteger % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomInteger % 2 === 1) {
      rightAnswer = 'no';
    }

    BL.askQuestion(randomInteger);
    const userAnswer = BL.takeAnswer();

    if (userAnswer !== rightAnswer) {
      BL.detectGameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.detectWin(i, userName, BL.numberOfAttempts);
  }
};

export default launchBrainEvenGame;
