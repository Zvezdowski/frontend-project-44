// import readlineSync from 'readline-sync';
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
    const randomExpression = (`${firstInteger} ${operator} ${secondInteger}`);

    let rightAnswer = '';
    switch (operator) {
      case '+':
        rightAnswer = (firstInteger + secondInteger);
        break;
      case '-':
        rightAnswer = (firstInteger - secondInteger);
        break;
      case '*':
        rightAnswer = (firstInteger * secondInteger);
        break;
      default:
        rightAnswer = 'switch error, check source';
    }

    rightAnswer = `${rightAnswer}`;

    BL.askQuestion(randomExpression);
    const userAnswer = BL.takeAnswer();

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      winsCounter += 1;
      if (winsCounter === BL.numberOfAttempts) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default brainCalc;
