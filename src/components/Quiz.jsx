import React, { useCallback, useState } from 'react';
import QUESTIONS from "../questions";
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectAnswer];
        });
        
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

  return (
    <div id='quiz'>
        <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer} // <-- FIXED: changed from onSelect to onSelectAnswer
            onSkipAnswer={handleSkipAnswer}
        />
    </div>
  );
}
