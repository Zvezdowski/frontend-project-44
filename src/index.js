import readlineSync from 'readline-sync';

export const lastLevelIndex = 2;

export const matrixDefinition = [[], []];

export const startGame = (mainQuestion, questsAndAns) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(mainQuestion);

  for (let i = 0; i <= lastLevelIndex; i += 1) {
    console.log(`Question: ${questsAndAns[0][i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questsAndAns[1][i]) {
      console.log('Correct!');

      if (i === lastLevelIndex) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questsAndAns[1][i]}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
