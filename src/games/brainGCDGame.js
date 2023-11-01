import getRandomInteger from '../utils.js';
import startGame from '../index.js';

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

const getQuestionAndAnswer = () => {
  const firstInteger = getRandomInteger();
  const secondInteger = getRandomInteger();
  const question = `${firstInteger} ${secondInteger}`;
  const answer = findGcd(firstInteger, secondInteger).toString();
  return [question, answer];
};

const launchBrainGCDGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchBrainGCDGame;
