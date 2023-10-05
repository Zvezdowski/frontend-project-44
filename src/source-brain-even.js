import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log('Hello, ', userName, '!');

  const numberOfAttempts = 3;

  let rightAnswer = '';

  let winsCounter = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < numberOfAttempts; i += 1) {
    const randomInteger = Math.floor(Math.random() * 100) + 1;

    if (randomInteger % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomInteger % 2 === 1) {
      rightAnswer = 'no';
    }

    const answer = readlineSync.question(`Question: ${randomInteger} `);

    if (answer === rightAnswer) {
      winsCounter += 1;
      console.log('Correct!');
      if (winsCounter === numberOfAttempts) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      winsCounter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
  }
};

export default brainEvenGame;
