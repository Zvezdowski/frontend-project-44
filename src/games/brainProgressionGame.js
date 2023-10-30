import { matrixDefinition, maxRoundsCount, startGame } from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';
const minProgressionLength = 5;
const maxProgressionLength = 10;

const genProgression = (step, firstElement, length) => {
  const progression = [firstElement];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const genQuestsAndAnswers = () => {
  const questsAndAnswers = matrixDefinition;
  for (let i = 0; i <= maxRoundsCount; i += 1) {
    const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);
    const missingElementIndex = getRandomInteger(0, progressionLength - 1);
    const progressionStep = getRandomInteger();

    const progression = genProgression(progressionStep, getRandomInteger(), progressionLength);

    const rightAnswer = progression[missingElementIndex].toString();
    progression[missingElementIndex] = '..';

    const question = progression.join(' ');

    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer);
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAnswers();

const launchBrainProgressionGame = () => {
  startGame(description, questsAndAnswers);
};

export default launchBrainProgressionGame;
