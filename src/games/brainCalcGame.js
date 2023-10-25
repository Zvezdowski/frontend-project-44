import * as BL from '../index.js'; //       BL means BrainLogic
import getRandomInteger from '../utils.js';

const operators = ['+', '-', '*'];

const mainQuestion = 'What is the result of the expression?';

const getRandomOperator = () => operators[getRandomInteger(0, 2)];

const genQuestsAndAns = () => {
  const questsAndAns = BL.matrixDefinition;
  for (let i = 0; i <= BL.lastLevelIndex; i += 1) {
    const firstInteger = getRandomInteger(0, BL.maxRandomInteger);
    const secondInteger = getRandomInteger(0, BL.maxRandomInteger);
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
