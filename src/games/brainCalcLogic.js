import * as BL from '../index.js'; //       BL means BrainLogic

const brainCalc = () => {
  const userName = BL.greeting();

  const mainQuestion = 'What is the result of the expression?';
  console.log(mainQuestion);

  for (let i = 1; i <= BL.numberOfAttempts; i += 1) {
    const firstInteger = BL.getRandomInteger();
    const secondInteger = BL.getRandomInteger();
    const operator = BL.getRandomOperator();

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
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }

    BL.winDetector(i, userName, BL.numberOfAttempts);
  }
};

export default brainCalc;
