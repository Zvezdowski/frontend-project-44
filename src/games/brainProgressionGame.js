import * as BL from '../index.js';

const launchBrainProgressionGame = () => {
  const userName = BL.greet();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const missingElementIndex = Math.floor(Math.random() * progressionLength);
    const progressionStep = BL.getRandomInteger();
    const progression = [BL.getRandomInteger()];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const missingValue = progression[missingElementIndex].toString(10);
    progression[missingElementIndex] = '..';

    BL.askQuestion(progression.join(' '));
    const userAnswer = BL.takeAnswer();

    if (userAnswer !== missingValue) {
      BL.detectGameOver(userAnswer, missingValue, userName);
      break;
    }

    BL.detectWin(i, userName, BL.numberOfAttempts);
  }
};
export default launchBrainProgressionGame;
