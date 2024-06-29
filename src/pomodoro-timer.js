import { useEffect, useState } from "react";

export const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;
        
            if (isActive) {
                interval = setInterval(() => { 
                if (seconds === 0) {
                    if (minutes === 0) {
                        alert("It's your Break Time");
                        setMinutes(isBreak ? 25 : 5);
                        setIsBreak(!isBreak);
                        setSeconds(0);
                    }else{
                        setMinutes(minutes-1);
                        setSeconds(59);
                    }
                }else{
                    setSeconds(seconds-1);
                }
            },1000);
            }else if(seconds!==0 && minutes!==0){
                   clearInterval(interval);
            }
                
            return ()=> clearInterval(interval);
        
    },[isActive,minutes,seconds,isBreak]);

    const resetTimer=()=>{
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
        setIsBreak(false);
    }

    return(
        <div>
            <h1> Pomodoro Timer </h1>
        <div className="pomodoro">
            <h2> { isBreak ? "BreakTime" : "WorkTime" }</h2>
           <div className="timer">
               {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
           </div>
           <button type="button" class="btn btn-primary" onClick={()=>setIsActive(!isActive)}> {isActive ? "Pause" : "Start"}</button>
           <button type="button" class="btn btn-primary" onClick={resetTimer}>Reset</button>
        </div>
        </div>
    )
};
