import startGame from '../index.js';
import getRandomInteger from '../utils.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const getRandomOperator = () => operators[getRandomInteger(0, operators.length - 1)];

const calculate = (firstInteger, secondInteger, operator) => {
  switch (operator) {
    case '+':
      return firstInteger + secondInteger;
    case '-':
      return firstInteger - secondInteger;
    case '*':
      return firstInteger * secondInteger;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const firstInteger = getRandomInteger();
  const secondInteger = getRandomInteger();
  const operator = getRandomOperator();
  const question = (`${firstInteger} ${operator} ${secondInteger}`);
  const answer = calculate(firstInteger, secondInteger, operator).toString();
  return [question, answer];
};

const launchBrainCalcGame = () => {
  startGame(description, getQuestionAndAnswer);
};

export default launchBrainCalcGame;
