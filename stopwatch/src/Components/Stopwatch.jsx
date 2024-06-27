import React, { useEffect, useRef, useState } from "react";
import styles from "./stopwatch.module.css";

function Stopwatch() {
    const [timer, setTimer] = useState(0);
    const [started,setStarted]=useState(false)
    const counterRef=useRef()
    const handleStart = () => {
        if (started) {
            return
        }
        counterRef.current=setInterval(() => {
            setTimer(prev=>prev+1)
        }, 1000)
        setStarted(true)
    }
    const handelStop = () => {
        clearInterval(counterRef.current)
        setStarted(false)
    }
    const handleReset = () => {
        clearInterval(counterRef.current)
        setTimer(0)
        setStarted(false)
    }
    useEffect(() => {
        return () => {
           clearInterval(counterRef.current) 
        }
    },[])
  return (
    <div className={styles.container}>
      <p>{timer}</p>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handelStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
