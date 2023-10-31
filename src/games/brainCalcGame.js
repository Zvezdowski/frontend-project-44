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
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    console.log('i = ', i);
    const firstInteger = getRandomInteger();
    const secondInteger = getRandomInteger();
    const operator = getRandomOperator();
console.log(firstInteger, operator, secondInteger);
    const rightAnswer = calculate(firstInteger, secondInteger, operator);

    const question = `${firstInteger} ${operator} ${secondInteger}`;
    questionsAndAnswers[0].push(question);
    questionsAndAnswers[1].push(rightAnswer.toString());
  }
  console.log(questionsAndAnswers);
  return questionsAndAnswers;
};

const questionsAndAnswers = genQuestionsAndAnswers();

const launchBrainCalcGame = () => {
  startGame(description, questionsAndAnswers);
};

export default launchBrainCalcGame;
