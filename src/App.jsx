import { useEffect, useState } from 'react';

import AnswersSection from './components/AnswersSection';
import QuestionSection from './components/QuestionSection';

import { getQuiz } from './utils/quizApi.js';

const App = () => {
  const [quiz, setQuiz] = useState([]);
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    getQuiz()
      .then((quizData) => setQuiz(quizData))
      .catch((err) => alert(err.message));
  }, []);

  const handleNextAnswer = () => {
    if (step === quiz.length) {
      setIsFinished(true);
      setStep(0);
      return;
    }
    setStep((answerCounter) => answerCounter + 1);
  };

  if (quiz.length === 0) return;

  return (
    <main className="font-mono bg-zinc-900">
      <div className="min-h-screen grid grid-col-2">
        <QuestionSection
          quiz={quiz}
          step={step}
        />
        <AnswersSection />
      </div>
    </main>
  );
};

export default App;
