import getRandomInteger from '../utils.js';
import { startGame, matrixDefinition, maxRoundsCount } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstInteger, secondInteger) => {
  const maxPossibleDivisor = Math.min(firstInteger, secondInteger);
  let gcd = 1;
  if (!maxPossibleDivisor) return gcd;
  for (let i = 1; i <= maxPossibleDivisor; i += 1) {
    if (firstInteger % i === 0 && secondInteger % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const genQuestsAndAns = () => {
  const questionsAndAnswers = matrixDefinition;
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const rightAnswer = findGcd(firstInteger, secondInteger);
    const question = (`${firstInteger} ${secondInteger}`);
    questionsAndAnswers[0].push(question);
    questionsAndAnswers[1].push(rightAnswer.toString());
  }
  return questionsAndAnswers;
};

const questionsAndAnswers = genQuestsAndAns();

const launchBrainGCDGame = () => {
  startGame(description, questionsAndAnswers);
};

export default launchBrainGCDGame;
