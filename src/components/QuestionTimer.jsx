import React, { useEffect, useState } from 'react'

export default function QuestionTimer({onTimeout ,timeout}) {
    const [remainingTime, setRemainingTime] = useState();

    


    useEffect(() => {
        console.log("SETTING TIMEOUT");
        const timer = setTimeout(timeout, onTimeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);
    
    useEffect(() => {
            console.log("SETTING INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);
    
  return <progress id='question-time' max={timeout} value={remainingTime}/>
}
