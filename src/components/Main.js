import React, {useEffect, useState} from "react";
import DisplayCards from "./DisplayCards";
import styles from "../styles/Main.module.css"
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
            makeAuthor("Malcolm Gladwell", mg),
            makeAuthor("Mary Shelley", ms),
            makeAuthor("Robert Greene", rg),
            makeAuthor("Ryan Holiday", rh),
            makeAuthor("Ralph Waldo Emerson", rwe),
            makeAuthor("Dr. Seuss", tsg),
            makeAuthor("Virginia Woolf", vw)
        ]
    }

    const [game, setGame] = useState({
        people: setPeople(),
        currScore: 0,
        highScore: 0,
        gameOver: false,
        winCondition: false
    })

    const [rules, setRules] = useState(true)

    useEffect(() => {
        if (game.currScore >= 1) {
            setRules(false)
        }

    },[game.currScore])

    useEffect(() => {
        const checkScore = () => {
            if (game.currScore === 8) {
                return setGame({...game, winCondition: true})
            }
            if (game.currScore >= game.highScore) {
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
            setRules(true)
            setGame(() => ( {...game, gameOver: false, winCond: false, currScore: 0, people: setPeople()}) )
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}> Who's That Author ? </h2>
                <hr/>
                { rules && <p className={styles.howTo}>Get points by clicking on an image, just don't click on any more than once !</p> }
                <div className={styles.scoreContainer}>
                    <div className={styles.score}>
                        Current Score: {game.currScore}
                    </div>
                    <div className={styles.score}>
                        High Score: {game.highScore}
                    </div>
                </div>
            </div>
            { game.winCondition && <div className={styles.congrats}>Congratulations you won!</div> }
            { !game.gameOver
                ? <DisplayCards gameState={game}
                                clickHandler={handleClick}
                />

                : <ShowGameOver gameState={game.gameOver}
                                handleReset={resetGame} />
            }
        </div>
    )
}

export default Main