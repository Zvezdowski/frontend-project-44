import * as BL from '../index.js';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = BL.greeting();

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
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.winDetector(i, userName, BL.numberOfAttempts);
  }
};

export default brainEvenGame;
