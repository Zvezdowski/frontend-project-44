import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const numberOfAttempts = 3;

export const getRandomInteger = () => {
  const randomInteger = Math.floor(Math.random() * 100) + 1;
  return randomInteger;
};

// export const getAnswer = (expression) => {
//   const answer = readlineSync.question(`Question: ${expression}`);
//   return answer;
// };

export const winDetector = (winsCounter, userName, attemptsToWin) => {
  console.log('Correct!');
  if (winsCounter === attemptsToWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const getRandomOperator = () => {
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

export const askQuestion = (question) => {
  console.log('Question: ', question);
};

export const takeAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const gameOver = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export const findGCD = (firstInteger, secondInteger) => {
  const maxPossibleGCD = Math.min(firstInteger, secondInteger);
  let GCD;
  for (let j = 1; j <= maxPossibleGCD; j += 1) {
    if ((firstInteger % j === 0) && (secondInteger % j === 0)) {
      GCD = j;
    }
  }
  return GCD;
};
