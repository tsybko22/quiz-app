import AnswerItem from './AnswerItem';

const AnswersSection = ({ correctAnswer, incorrectAnswers, handleAnswerClick }) => {
  const answers = [...incorrectAnswers, correctAnswer].sort(() => 0.5 - Math.random());

  return (
    <section className="px-4 flex items-center justify-center bg-zinc-900">
      <ul className="grid grid-cols-2 gap-5">
        {answers.map((answer) => (
          <AnswerItem
            key={answer}
            answerText={answer}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default AnswersSection;
