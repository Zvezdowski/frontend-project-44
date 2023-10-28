import { matrixDefinition, maxRoundsCount, startGame } from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';

const minProgressionLength = 5;
const maxProgressionLength = 10;

const genQuestsAndAnswers = () => {
  const questsAndAnswers = matrixDefinition;
  for (let i = 0; i <= maxRoundsCount; i += 1) {
    const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);
    const missingElementIndex = getRandomInteger(0, progressionLength - 1);
    const progressionStep = getRandomInteger();
    const progression = [getRandomInteger()];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const rightAnswer = progression[missingElementIndex].toString();
    progression[missingElementIndex] = '..';

    const question = progression.join(' ');

    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer.toString());
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAnswers();

const launchBrainProgressionGame = () => {
  startGame(description, questsAndAnswers);
};

export default launchBrainProgressionGame;
