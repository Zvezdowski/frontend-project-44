import { startGame, genQuestionsAndAnswersByPredicate } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const questionsAndAnswers = genQuestionsAndAnswersByPredicate(isPrime);

const launchBrainPrimeGame = () => {
  startGame(description, questionsAndAnswers);
};

export default launchBrainPrimeGame;
