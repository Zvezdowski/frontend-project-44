import * as BL from '../index.js';
import getRandomInteger from '../utils.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const randomInteger = getRandomInteger(0, BL.maxRandomInteger);
    const rightAnswer = isEven(randomInteger) ? 'yes' : 'no';
    const question = randomInteger;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer);
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainEvenGame = () => {
  BL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainEvenGame;
