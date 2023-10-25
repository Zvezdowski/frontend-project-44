import * as BL from '../index.js';
import getRandomInteger from '../utils.js';

const mainQuestion = 'What number is missing in the progression?';

const minProgressionLength = 5;
const maxProgressionLength = 10;

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);
    const missingElementIndex = getRandomInteger(0, progressionLength - 1);
    const progressionStep = getRandomInteger(0, BL.maxRandomInteger);
    const progression = [getRandomInteger(0, BL.maxRandomInteger)];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const rightAnswer = progression[missingElementIndex].toString();
    progression[missingElementIndex] = '..';

    const question = progression.join(' ');

    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer.toString());
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainProgressionGame = () => {
  BL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainProgressionGame;
