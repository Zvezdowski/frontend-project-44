import * as BL from '../index.js';

const findGcd = (firstInteger, secondInteger) => {
  const maxPossibleGcd = Math.min(firstInteger, secondInteger);
  let gcd;
  for (let j = 1; j <= maxPossibleGcd; j += 1) {
    if ((firstInteger % j === 0) && (secondInteger % j === 0)) {
      gcd = j;
    }
  }
  return gcd;
};

const launchBrainGCDGame = () => {
  const userName = BL.greet();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();

    const rightAnswer = findGcd(firstInteger, secondInteger);

    BL.askQuestion(`${firstInteger} ${secondInteger}`);
    const userAnswer = parseInt(BL.takeAnswer(), 10);

    if (userAnswer !== rightAnswer) {
      BL.detectGameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.detectWin(i, userName, BL.numberOfAttempts);
  }
};

export default launchBrainGCDGame;
