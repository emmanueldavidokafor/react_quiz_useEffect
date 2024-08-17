import React, { useEffect, useState } from 'react'

export default function QuestionTimer({onTimeout ,timeout}) {
    const [remainingTime, setRemainingTime] = useState();

    


    useEffect(() => {
        console.log("SETTING TIMEOUT");
        setTimeout(timeout, onTimeout)
    }, [timeout, onTimeout]);
    
    useEffect(() => {
            console.log("SETTING INTERVAL");
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
    }, []);
    
  return <progress id='question-time' max={timeout} value={remainingTime}/>
}
