import { useEffect, useState } from 'react';

import AnswersSection from './components/AnswersSection';
import Loader from './components/Loader.jsx';
import QuestionSection from './components/QuestionSection';
import ResultScreen from './components/ResultScreen.jsx';

import { getQuiz } from './utils/quizApi.js';

const App = () => {
  const [quiz, setQuiz] = useState([]);
  const [step, setStep] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isFinished) {
      getQuiz()
        .then((quizData) => setQuiz(quizData))
        .catch((err) => alert(err.message));
    }
  }, [isFinished]);

  const handleRestartQuiz = () => {
    setIsFinished(false);
    setStep(0);
    setCorrectCounter(0);
    setQuiz([]);
  };

  const handleAnswerClick = (answer) => {
    setStep((prev) => prev + 1);

    if (step === quiz.length - 1) {
      setIsFinished(true);
    }

    if (answer === quiz[step].correct_answer) {
      setCorrectCounter((prev) => prev + 1);
    }
  };

  if (quiz.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <Loader />
      </div>
    );
  }

  return (
    <main className="font-mono bg-zinc-900">
      {isFinished ? (
        <ResultScreen
          correctCounter={correctCounter}
          handleRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <div className="min-h-screen grid grid-col-2">
          <QuestionSection
            quiz={quiz}
            step={step}
          />
          <AnswersSection
            correctAnswer={quiz[step].correct_answer}
            incorrectAnswers={quiz[step].incorrect_answers}
            handleAnswerClick={handleAnswerClick}
          />
        </div>
      )}
    </main>
  );
};

export default App;
