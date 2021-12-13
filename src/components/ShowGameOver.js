import React from "react";
import style from "../styles/ShowGameOver.module.css"

function ShowGameOver({handleReset}) {

    return (
        <div className={style.gameOverCard}>
            <h3>Game Over</h3>
            <h4>Play Again?</h4>
            <button onClick={() => handleReset()}>Yes</button>
        </div>
    );
}

export default ShowGameOver;