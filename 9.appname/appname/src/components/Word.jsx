import PropTypes from "prop-types";
import { useState } from "react";

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState();

  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻{isShow ? "숨기기" : "보기"}</button>
      </td>
      <td>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
};

// PropTypes를 사용하여 word 객체의 타입 정의
Word.propTypes = {
  word: PropTypes.shape({
    eng: PropTypes.string.isRequired,
    kor: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default Word;
