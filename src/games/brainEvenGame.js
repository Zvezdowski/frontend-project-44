import startGame from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const launchBrainEvenGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchBrainEvenGame;
