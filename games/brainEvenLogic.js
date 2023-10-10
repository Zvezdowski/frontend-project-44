import * as BL from '../src/index.js';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = BL.greeting();

  let rightAnswer = '';

  let winsCounter = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < BL.numberOfAttempts; i += 1) {
    const randomInteger = BL.getRandomInteger();

    if (randomInteger % 2 === 0) {
      rightAnswer = 'yes';
    } else if (randomInteger % 2 === 1) {
      rightAnswer = 'no';
    }
    BL.askQuestion(randomInteger);

    const answer = BL.takeAnswer();

    if (answer === rightAnswer) {
      winsCounter += 1;
      console.log('Correct!');

      BL.winDetector(winsCounter, userName);
    } else {
      winsCounter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
  }
};

export default brainEvenGame;
