import { useState, useEffect } from "react";
import "./styles.css";

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
}

const Trivia = ({
  data,
  setTimeOut,
  setQuestionNumber,
  questionNumber,
}: any) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (item: any) => {
    setSelectedAnswer(item);
    setTimeout(() => {
      setSelectedAnswer(null);
      if (item.correct) {
        setQuestionNumber((prev: number) => prev + 1);
      } else {
        setTimeOut(true);
      }
    }, 3000);
  };

  return (
    <div className="trivia">
      <div className="question">
        <span className="question__text">{question?.question}</span>
      </div>
      <div className="answers">
        {question?.answers.map((answer: any) => (
          <div className="answer" onClick={() => handleClick(answer)}>
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
