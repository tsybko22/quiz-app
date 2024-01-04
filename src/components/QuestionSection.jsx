import { randomHexColor } from '../utils/generateRandomHexColor';

const QuestionSection = ({ quiz, step }) => {
  const currentQuestion = quiz[step].question;

  return (
    <section
      style={{ background: randomHexColor() }}
      className="px-4 flex flex-col justify-center items-center gap-4 transition-colors"
    >
      <span className="text-lg md:text-xl text-zinc-800">
        {step + 1} &#8212; {quiz.length}
      </span>
      <h1 className="text-3xl md:text-5xl font-serif font-bold md:font-normal text-zinc-900 text-center">
        0{step + 1}. {currentQuestion}
      </h1>
    </section>
  );
};

export default QuestionSection;
