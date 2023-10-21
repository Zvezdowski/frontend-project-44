import * as BL from '../index.js'; //       BL means BrainLogic

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

const launchBrainCalcGame = () => {
  const userName = BL.greet();

  const mainQuestion = 'What is the result of the expression?';
  console.log(mainQuestion);

  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
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

    rightAnswer = rightAnswer.toString();
    BL.askQuestion(`${firstInteger} ${operator} ${secondInteger}`);
    const userAnswer = BL.takeAnswer();

    if (userAnswer !== rightAnswer) {
      BL.detectGameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.detectWin(i, userName, BL.numberOfAttempts);
  }
};

export default launchBrainCalcGame;
