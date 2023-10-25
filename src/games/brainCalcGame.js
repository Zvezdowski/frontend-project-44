import * as BL from '../index.js'; //       BL means BrainLogic

const mainQuestion = 'What is the result of the expression?';

const getRandomOperator = () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;

  switch (randomIndex) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return 'switch error';
  }
};

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();
    const operator = getRandomOperator();

    let rightAnswer;
    if (operator === '+') {
      rightAnswer = firstInteger + secondInteger;
    } else if (operator === '-') {
      rightAnswer = firstInteger - secondInteger;
    } else if (operator === '*') {
      rightAnswer = firstInteger * secondInteger;
    }
    const question = `${firstInteger} ${operator} ${secondInteger}`;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer.toString());
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainCalcGame = () => {
  BL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainCalcGame;
