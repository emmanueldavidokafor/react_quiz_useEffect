import React, { useCallback, useState } from 'react';
import QUESTIONS from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('');

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectAnswer) {
        setAnswerState('Answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectAnswer];
        });
        
        setTimeout(() => {
            if (selectAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('Correct');
            } else {
                selectAnswer('Wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

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
            <QuestionTimer 
                key={activeQuestionIndex}
                timeout={10000} 
                onTimeout={handleSkipAnswer}
            
            />
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
