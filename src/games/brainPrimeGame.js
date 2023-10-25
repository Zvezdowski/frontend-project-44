import * as BL from '../index.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const definePrimeNum = (theNumber) => {
  for (let j = 2; j < theNumber; j += 1) {
    if (theNumber % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const theNumber = BL.getRandomInteger();
    const rightAnswer = definePrimeNum(theNumber);
    const question = theNumber;
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
