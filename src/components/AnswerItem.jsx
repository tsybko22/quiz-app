import Btn from './Btn';

const AnswerItem = ({ answerText }) => {
  return (
    <li>
      <Btn>{answerText}</Btn>
    </li>
  );
};

export default AnswerItem;
