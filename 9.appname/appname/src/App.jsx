import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Routes 추가
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import EmptyPage from "./components/EmptyPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
