import React from "react";
import questions from "./quizdata";
const Quizzresult=(props)=> {
    return(
        <div className="score-section">
        <h2>Completed!</h2>
        <h4>Tottal Score {props.score}/{5*questions.length}</h4>
        <h4>Your Correct Question {props.correct}/{questions.length}</h4>
        <button onClick={props.handlePlayagain}>Play Again</button>
        </div>
    );
};

export default Quizzresult