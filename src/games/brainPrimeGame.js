import * as bL from '../index.js';
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

const genQuestsAndAns = () => {
  const questsAndAnswers = bL.matrixDefinition;
  for (let i = 0; i <= bL.maxRoundsCount; i += 1) {
    const number = getRandomInteger();
    let rightAnswer;
    if (isPrime(number)) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const question = number;
    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer);
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAns();

const launchBrainPrimeGame = () => {
  bL.startGame(description, questsAndAnswers);
};

export default launchBrainPrimeGame;
