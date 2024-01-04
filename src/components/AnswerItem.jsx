import Btn from './Btn';

const AnswerItem = ({ answerText, handleAnswerClick }) => {
  return (
    <li>
      <Btn
        className="w-full"
        onClick={() => handleAnswerClick(answerText)}
      >
        {answerText}
      </Btn>
    </li>
  );
};

export default AnswerItem;
