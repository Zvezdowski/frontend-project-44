import * as bL from '../index.js'; //       BL means BrainLogic
import getRandomInteger from '../utils.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

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
  const questsAndAnswers = bL.matrixDefinition;
  for (let i = 0; i <= bL.maxRoundsCount; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const operator = getRandomOperator();

    const rightAnswer = calculate(firstInteger, secondInteger, operator);

    const question = `${firstInteger} ${operator} ${secondInteger}`;
    questsAndAnswers[0].push(question);
    questsAndAnswers[1].push(rightAnswer.toString());
  }
  return questsAndAnswers;
};

const questsAndAnswers = genQuestsAndAns();

const launchBrainCalcGame = () => {
  bL.startGame(description, questsAndAnswers);
};

export default launchBrainCalcGame;
