import * as bL from '../index.js'; //       BL means BrainLogic
import getRandomInteger from '../utils.js';

const operators = ['+', '-', '*'];

const mainQuestion = 'What is the result of the expression?';

const getRandomOperator = () => operators[getRandomInteger(0, 2)];

const calculate = (firstInteger, secondInteger, operator) => {
  let result;
  if (operator === '+') {
    result = firstInteger + secondInteger;
  } else if (operator === '-') {
    result = firstInteger - secondInteger;
  } else if (operator === '*') {
    result = firstInteger * secondInteger;
  }
  return result;
};

const genQuestsAndAns = () => {
  const questsAndAns = bL.matrixDefinition;
  for (let i = 0; i <= bL.lastLevelIndex; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const operator = getRandomOperator();

    const rightAnswer = calculate(firstInteger, secondInteger, operator);

    const question = `${firstInteger} ${operator} ${secondInteger}`;
    questsAndAns[0].push(question);
    questsAndAns[1].push(rightAnswer.toString());
  }
  return questsAndAns;
};

const questsAndAns = genQuestsAndAns();

const launchBrainCalcGame = () => {
  bL.startGame(mainQuestion, questsAndAns);
};

export default launchBrainCalcGame;
