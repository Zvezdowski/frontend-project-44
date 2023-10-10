import * as BL from '../src/index.js';

const brainGCDGame = () => {
  let winsCounter = 0;
  const userName = BL.greeting();

  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();

    const maxGCD = Math.min(firstInteger, secondInteger);
    let GCD;

    for (let j = 1; j <= maxGCD; j += 1) {
      if (firstInteger % j === 0 && secondInteger % j === 0) {
        GCD = j;
      }
    }

    BL.askQuestion(`${firstInteger} ${secondInteger}`);
    const answer = BL.takeAnswer();
    if (answer === `${GCD}`) {
      winsCounter += 1;
      console.log('Correct!');
      BL.winDetector(winsCounter, userName);
    } else {
      console.log(`'${answer}' is wrong answer ;(, Correct answer was '${GCD}'`);
      break;
    }
  }
};

export default brainGCDGame;
