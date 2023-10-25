import * as BL from '../index.js';

const mainQuestion = 'What number is missing in the progression?';

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const missingElementIndex = Math.floor(Math.random() * progressionLength);
    const progressionStep = BL.getRandomInteger();
    const progression = [BL.getRandomInteger()];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const rightAnswer = progression[missingElementIndex].toString(10);
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
