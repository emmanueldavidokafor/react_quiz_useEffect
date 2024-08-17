import React, { useState } from 'react';
import QUESTIONS from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectAnswer];
        });
    }

    if (quizIsComplete) {
        return <div id='summary'>
            <img src={QuizCompleteImg} alt='Trophy Icon' />
            <h2>Quiz Completed</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);


  return (
    <div id='quiz'>
        <div id='question'>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2> 
            <ul id='answers'>
                {shuffledAnswers.map((answer) => (
                    <li className='answer' key={answer}>
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
