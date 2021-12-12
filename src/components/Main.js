import React, { useState } from "react";
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

function Main() {

    const makeAuthor = (name, source, funFact = "nothing") => {
        return {
            name: name,
            source: source,
            funFact: funFact,
            clicked: false
        }
    }

    const [game, setGame] = useState({
        people: [
            makeAuthor("J.K. Rowling", jkr),
            makeAuthor("Malcom Gladwell", mg),
            makeAuthor("Mary Shelly", ms),
            makeAuthor("Robert Greene", rg),
            makeAuthor("Ryan Holiday", rh),
            makeAuthor("Ralph Waldo Emerson", rwe),
            makeAuthor("Theodor Seuss Geisel", tsg),
            makeAuthor("Virginnia Wolfe", vw)
        ],
        currScore: 0,
        highScore: 0,
        gameOver: false
    })

    const handleClick = (e) => {
        const status = e.target.closest("img").getAttribute("clickedstatus")
        if (status === "true") {
            setGame({...game, gameOver: true})
        } else {
            e.target.setAttribute("clickedstatus", "true")
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
            <DisplayCards cardArr={game.people}
                          clickHandler={handleClick}
            />


        </div>
    )
}

export default Main