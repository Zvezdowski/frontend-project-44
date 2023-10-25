import * as BL from '../index.js';
import getRandomInteger from '../utils.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const number = getRandomInteger(0, BL.maxRandomInteger);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const question = number;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer);
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainPrimeGame = () => {
  BL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainPrimeGame;
