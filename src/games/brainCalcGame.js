import { matrixDefinition, maxRoundsCount, startGame } from '../index.js';
import getRandomInteger from '../utils.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const getRandomOperator = () => operators[getRandomInteger(0, 2)];

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

const genQuestionsAndAnswers = () => {
  const questionsAndAnswers = matrixDefinition;
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const operator = getRandomOperator();

    const rightAnswer = calculate(firstInteger, secondInteger, operator);

    const question = `${firstInteger} ${operator} ${secondInteger}`;
    questionsAndAnswers[0].push(question);
    questionsAndAnswers[1].push(rightAnswer.toString());
  }
  return questionsAndAnswers;
};

const questionsAndAnswers = genQuestionsAndAnswers();

const launchBrainCalcGame = () => {
  startGame(description, questionsAndAnswers);
};

export default launchBrainCalcGame;
