import { useEffect, useState } from 'react';

import AnswersSection from './components/AnswersSection';
import QuestionSection from './components/QuestionScreen';

import { getQuiz } from './utils/quizApi.js';

const App = () => {
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    getQuiz()
      .then((quizData) => setQuiz(quizData))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <main className="font-mono min-h-screen grid grid-rows-2">
      <QuestionSection />
      <AnswersSection />
    </main>
  );
};

export default App;
