import startGame from '../index.js';
import getRandomInteger from '../utils.js';

const description = 'What number is missing in the progression?';
const minProgressionLength = 5;
const maxProgressionLength = 10;

const getProgression = (step, firstElement, length) => {
  const progression = [firstElement];
  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomInteger(minProgressionLength, maxProgressionLength);
  const missingElementIndex = getRandomInteger(0, progressionLength - 1);
  const progressionStep = getRandomInteger();

  const progression = getProgression(progressionStep, getRandomInteger(), progressionLength);

  const answer = progression[missingElementIndex].toString();
  progression[missingElementIndex] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const launchBrainProgressionGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchBrainProgressionGame;
