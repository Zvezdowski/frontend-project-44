import * as bL from '../index.js';
import getRandomInteger from '../utils.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

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

const genQuestsAndAns = () => {
  const questsAndAns = bL.matrixDefinition;
  for (let i = 0; i <= bL.lastLevelIndex; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const rightAnswer = findGcd(firstInteger, secondInteger);
    const question = (`${firstInteger} ${secondInteger}`);
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer.toString(10));
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainGCDGame = () => {
  bL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainGCDGame;
