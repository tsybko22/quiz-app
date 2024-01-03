import AnswersSection from './components/AnswersSection';
import QuestionSection from './components/QuestionScreen';

const App = () => {
  return (
    <main className="min-h-screen grid grid-rows-2">
      <QuestionSection />
      <AnswersSection />
    </main>
  );
};

export default App;
