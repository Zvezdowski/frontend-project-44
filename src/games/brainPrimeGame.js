import startGame from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const launchBrainPrimeGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchBrainPrimeGame;
