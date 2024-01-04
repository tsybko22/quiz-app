import Btn from './Btn';

const ResultScreen = ({ correctCounter, handleRestartQuiz }) => {
  return (
    <section className="min-h-screen flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-3xl md:text-5xl text-zinc-300">
        Your result is:{' '}
        <span className={`${correctCounter > 5 ? 'text-green-400' : 'text-red-400'}`}>
          {correctCounter}
        </span>
      </h1>
      <Btn onClick={handleRestartQuiz}>Restart Quiz!</Btn>
    </section>
  );
};

export default ResultScreen;
