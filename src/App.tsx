import { useEffect, useState } from "react";
import classNames from "classnames";
import Trivia from "./components/Trivia";
import { moneyPyramid, questions } from "./data";
import "./App.css";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
            data={questions}
            setTimeOut={setTimeOut}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item) => (
            <li
              className={classNames(
                "moneyListItem",
                questionNumber === item.id && "active"
              )}
            >
              <span className="moneyListItem__number ">{item.id}</span>
              <span className="moneyListItem__amount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
