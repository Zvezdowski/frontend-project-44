import readlineSync from 'readline-sync';
import getRandomInteger from './utils.js';

export const maxRoundsCount = 3;

export const matrixDefinition = [[], []];

export const genQuestionsAndAnswersByPredicate = (predicate) => {
  const questionsAndAnswers = matrixDefinition;
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const randomInteger = getRandomInteger();
    const rightAnswer = predicate(randomInteger) ? 'yes' : 'no';
    const question = randomInteger;
    questionsAndAnswers[0].push(question);
    questionsAndAnswers[1].push(rightAnswer);
  }
  return questionsAndAnswers;
};

export const startGame = (description, [questions, answers]) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= maxRoundsCount; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answers[i]) {
      console.log('Correct!');

      if (i === maxRoundsCount) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
