import React, { useState } from "react";
import './quizz.css';
import questions from "./quizdata";
import Quizzresult from "./quizresult";
const Quizz=()=>{
    const[count,setcount] = useState(0);
    const [score,setscore] = useState(0);
    const [correct,setcorrect] = useState(0);
    const [res,setres] = useState(false);
    const [clicked,setclicked] = useState(false);
    const nextoption=()=>{
        setclicked(false)
        const nextquestion = count+1;
        if(nextquestion<questions.length)
        setcount(nextquestion)
        else
        setres(true)
    }

    const answer=(iscoreect)=>{
        if(iscoreect){
            setscore(score+5)
            setcorrect(correct+1)
        }
        setclicked(true)
    };
    const handlePlayagain=()=>{
        setscore(0);
        setcorrect(0);
        setres(false);
        setcount(0);
        setclicked(false);
    }
    return (
        <>
        <div className="app">
        {res?(<Quizzresult score={score} correct={correct} handlePlayagain={handlePlayagain}/>):(
            <>
        <div className="question-section">
        <h5>Score: {score}</h5>

        <div className="question-count">
            <span>Question {count+1}/{questions.length} </span>
        </div>

        <div className="question-text ">
            {questions[count].text}
        </div>
        </div>

        <div className="answer-section">
        {questions[count].answeroption.map((ans,i)=>{
            return (<button 
            className={`button ${clicked & ans.iscoreect? "correct":"button"}`}
            disabled={clicked}
            key={i} onClick={()=>answer(ans.iscoreect)} 
            
            >
            {ans.answertext}         
            
            </button>);
        })}
        
        <div className="actions">
        <button onClick={handlePlayagain}>Quit</button>
        <button disabled={!clicked}
        onClick={nextoption}>Next</button>


        </div>
        </div>
        </>
        )}
        
        </div>
        </>
    )
}

export default Quizz;