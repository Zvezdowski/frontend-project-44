import * as BL from '../src/index.js';

const brainGCDGame = () => {
  let winsCounter = 0;
  const userName = BL.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();

    const maxGCD = Math.min(firstInteger, secondInteger);
    let GCD;

    for (let j = 1; j <= maxGCD; j += 1) {
      if ((firstInteger % j === 0) && (secondInteger % j === 0)) {
        GCD = j;
      }
    }

    BL.askQuestion(`${firstInteger} ${secondInteger}`);
    const answer = BL.takeAnswer();
    if (answer === GCD.toString()) {
      winsCounter += 1;
      BL.winDetector(winsCounter, userName, BL.numberOfAttempts);
    } else {
      BL.gameOver(answer, GCD, userName);
      break;
    }
  }
};

export default brainGCDGame;
