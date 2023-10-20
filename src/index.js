import readlineSync from 'readline-sync';

export const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const numberOfAttempts = 3;

export const getRandomInteger = () => {
  const randomInteger = Math.floor(Math.random() * 100) + 1;
  return randomInteger;
};

export const detectWin = (winsCounter, userName, attemptsToWin) => {
  console.log('Correct!');
  if (winsCounter === attemptsToWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const takeAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const detectGameOver = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};
