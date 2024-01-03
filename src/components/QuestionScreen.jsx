import { randomHexColor } from '../utils/generateRandomHexColor';

const QuestionSection = () => {
  return (
    <section
      style={{ backgroundColor: randomHexColor }}
      className="flex flex-col justify-center items-center gap-4"
    >
      <span className="text-xl text-zinc-800">1 &#8212; 10</span>
      <h1 className="font-serif text-5xl text-zinc-900">01. What is blablabla?</h1>
    </section>
  );
};

export default QuestionSection;
