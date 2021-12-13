import React, {useEffect} from "react";
import style from "../styles/ShowGameOver.module.css"

function ShowGameOver({handleReset, gameState}) {

    useEffect(() => {
        const showGameOver = () => {

        }
        showGameOver()
    }, [gameState])

    return (
        <div className={style.gameOverCard}>
            <h3>Game Over</h3>
            <h4>Play Again?</h4>
            <button onClick={() => handleReset()}>Yes</button>
        </div>
    );
}

export default ShowGameOver;