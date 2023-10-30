import { startGame, genQuestionsAndAnswersByPredicate } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const questionsAndAnswers = genQuestionsAndAnswersByPredicate(isEven);

const launchBrainEvenGame = () => {
  startGame(description, questionsAndAnswers);
};

export default launchBrainEvenGame;
