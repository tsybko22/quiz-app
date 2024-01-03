import AnswerItem from './AnswerItem';

const AnswersSection = () => {
  return (
    <section className="px-4 flex items-center justify-center bg-zinc-900">
      <ul className="grid grid-cols-2 gap-5">
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
        <AnswerItem />
      </ul>
    </section>
  );
};

export default AnswersSection;
