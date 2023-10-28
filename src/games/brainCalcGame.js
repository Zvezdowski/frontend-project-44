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
      return 'Switch error';
  }
};

const genQuestsAndAnswers = () => {
  const questsAndAnswers = matrixDefinition;
  for (let i = 0; i <= maxRoundsCount; i += 1) {
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

const questsAndAnswers = genQuestsAndAnswers();

const launchBrainCalcGame = () => {
  startGame(description, questsAndAnswers);
};

export default launchBrainCalcGame;
