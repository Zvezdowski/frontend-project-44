import * as BL from '../index.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';

const genQuestsAndAns = () => {
  const questsAndAns = [[], []];
  let rightAnswer;
  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
    const randomInteger = BL.getRandomInteger();
    if (randomInteger % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomInteger % 2 === 1) {
      rightAnswer = 'no';
    }

    const question = randomInteger;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer);
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainEvenGame = () => {
  BL.launchGameCore(mainQuestion, questsAndAns);
};

export default launchBrainEvenGame;
