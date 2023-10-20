import * as BL from '../index.js';

const brainGCDGame = () => {
  const userName = BL.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();

    const rightAnswer = BL.findGCD(firstInteger, secondInteger);

    BL.askQuestion(`${firstInteger} ${secondInteger}`);
    const userAnswer = parseInt(BL.takeAnswer(), 10);

    if (userAnswer !== rightAnswer) {
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.winDetector(i, userName, BL.numberOfAttempts);
  }
};

export default brainGCDGame;
