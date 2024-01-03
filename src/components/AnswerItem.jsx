const AnswerItem = ({ answerText }) => {
  return (
    <li>
      <button className="px-10 py-3 rounded-full transition-colors text-2xl text-zinc-300 bg-zinc-800 hover:bg-zinc-700">
        {answerText}
      </button>
    </li>
  );
};

export default AnswerItem;
