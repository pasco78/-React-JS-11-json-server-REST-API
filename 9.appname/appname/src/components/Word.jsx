import { useState } from "react";

export default function Word({ word: w }) {
  const [currentWord, setCurrentWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(w.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3000/words/${currentWord.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...currentWord,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(prevIsDone => !prevIsDone); // 이전 상태를 기반으로 업데이트
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3000/words/${currentWord.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setCurrentWord({ id: 0 }); // 삭제된 단어를 렌더링하지 않음
        }
      });
    }
  }

  if (currentWord.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{currentWord.eng}</td>
      <td>{isShow && currentWord.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
