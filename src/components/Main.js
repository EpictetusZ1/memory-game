import React, {useEffect, useState} from "react";
import DisplayCards from "./DisplayCards";
import styles from "../styles/StyleMain.module.css"
import {
    jkr,
    mg,
    ms,
    rg,
    rh,
    rwe,
    tsg,
    vw
} from "../people/index"
import ShowGameOver from "./ShowGameOver";

function Main() {

    const makeAuthor = (name, source, funFact = "nothing") => {
        return {
            name: name,
            source: source,
            funFact: funFact,
            clicked: 0,
        }
    }
    const setPeople = () => {
        return [
            makeAuthor("J.K. Rowling", jkr),
            makeAuthor("Malcom Gladwell", mg),
            makeAuthor("Mary Shelly", ms),
            makeAuthor("Robert Greene", rg),
            makeAuthor("Ryan Holiday", rh),
            makeAuthor("Ralph Waldo Emerson", rwe),
            makeAuthor("Theodor Seuss Geisel", tsg),
            makeAuthor("Virginnia Wolfe", vw)
        ]
    }

    const [game, setGame] = useState({
        people: setPeople(),
        currScore: 0,
        highScore: 0,
        gameOver: false
    })

    useEffect(() =>{
        const checkScore = () => {
            if (game.currScore > game.highScore) {
                setGame({...game, highScore: game.currScore})
            }
        }
        checkScore()
    }, [game.currScore, game.gameOver])


    const handleClick = (e) => {
        const target = e.currentTarget
        const status = target.getAttribute("clickedstatus")
        if (status === "1") {
            setGame(() => ( {...game, gameOver: true} ))
        } else if (status === "0") {
            target.setAttribute("clickedstatus", "1")
            setGame(prevState => (
                {...game, currScore: prevState.currScore + 1}
            ))
        }
    }

    const resetGame = () => {
        if (game.gameOver === true) {
            setGame(() => ( {...game, gameOver: false, currScore: 0, people: setPeople()}) )
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}> Who's That Author ? </h2>
                <hr/>
                <div className={styles.score}>
                    Current Score: {game.currScore}
                    &nbsp; &nbsp; &nbsp;
                    High Score: {game.highScore}
                </div>
            </div>
            {!game.gameOver
                ? <DisplayCards gameState={game}
                                clickHandler={handleClick} />

                : <ShowGameOver gameState={game.gameOver}
                                handleReset={resetGame} />
            }
        </div>
    )
}

export default Main