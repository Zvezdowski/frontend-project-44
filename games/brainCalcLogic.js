import * as BL from '../src/index.js'; //       BL means BrainLogic

const brainCalc = () => {
  let winsCounter = 0;

  const userName = BL.greeting();

  const mainQuestion = 'What is the result of the expression?';
  console.log(mainQuestion);

  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
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

    BL.askQuestion(`${firstInteger} ${operator} ${secondInteger}`);
    const userAnswer = BL.takeAnswer();

    if (userAnswer === rightAnswer.toString()) {
      winsCounter += 1;
      BL.winDetector(winsCounter, userName, BL.numberOfAttempts);
    } else {
      BL.gameOver(userAnswer, rightAnswer, userName);
      break;
    }
  }
};

export default brainCalc;
