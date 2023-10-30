import { startGame, genQuestsAndAnswersByPredicate } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const questsAndAnswers = genQuestsAndAnswersByPredicate(isEven);

const launchBrainEvenGame = () => {
  startGame(description, questsAndAnswers);
};

export default launchBrainEvenGame;
