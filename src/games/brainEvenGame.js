import * as bL from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const genQuestsAndAns = () => {
  const questsAndAnswers = bL.matrixDefinition;
  for (let i = 0; i <= bL.maxRoundsCount; i += 1) {
    const randomInteger = getRandomInteger();
    const rightAnswer = isEven(randomInteger) ? 'yes' : 'no';
    const question = randomInteger;
    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer);
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAns();

const launchBrainEvenGame = () => {
  bL.startGame(description, questsAndAnswers);
};

export default launchBrainEvenGame;
