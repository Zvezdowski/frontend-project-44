import * as bL from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstInteger, secondInteger) => {
  const impossibleDivisor = 0;
  const maxPossibleDivisor = Math.min(firstInteger, secondInteger);
  let gcd = 1;
  if (maxPossibleDivisor === impossibleDivisor) return gcd;
  for (let i = 1; i < maxPossibleDivisor; i += 1) {
    if (firstInteger % i === 0 && secondInteger % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const genQuestsAndAns = () => {
  const questsAndAnswers = bL.matrixDefinition;
  for (let i = 0; i <= bL.maxRoundsCount; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const rightAnswer = findGcd(firstInteger, secondInteger);
    const question = (`${firstInteger} ${secondInteger}`);
    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer.toString());
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAns();

const launchBrainGCDGame = () => {
  bL.startGame(description, questsAndAnswers);
};

export default launchBrainGCDGame;
