import { Link } from "react-router-dom";
import dummy from "../db/data.json";

const DayList = () => {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((day, index) => (
        <li key={index}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
