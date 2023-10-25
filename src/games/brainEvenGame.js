import * as bL from '../index.js';
import getRandomInteger from '../utils.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const genQuestsAndAns = () => {
  const questsAndAns = bL.matrixDefinition;
  for (let i = 0; i <= bL.lastLevelIndex; i += 1) {
    const randomInteger = getRandomInteger();
    const rightAnswer = isEven(randomInteger) ? 'yes' : 'no';
    const question = randomInteger;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer);
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainEvenGame = () => {
  bL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainEvenGame;
