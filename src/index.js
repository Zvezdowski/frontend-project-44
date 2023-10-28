import readlineSync from 'readline-sync';

export const maxRoundsCount = 2;

export const matrixDefinition = [[], []];

export const startGame = (description, questsAndAnswers) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i <= maxRoundsCount; i += 1) {
    console.log(`Question: ${questsAndAnswers[0][i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questsAndAnswers[1][i]) {
      console.log('Correct!');

      if (i === maxRoundsCount) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questsAndAnswers[1][i]}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
