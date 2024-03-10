import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));
  console.log(wordList);

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word, index) => (
            <Word word={word} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
