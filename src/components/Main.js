import React, {useState} from "react";
import styles from "../styles/StyleMain.module.css"
import PersonCard from "./PersonCard";
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

    const [game, setGame] = useState({
        people: [],
        currScore: 0,
        highScore: 0,
        clicked: false
    })

    const cardArr = [jkr, mg, ms, rg, rh, rwe, tsg, vw]


    const handleClick = () => {
        // shuffle cards
        // Handle score
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
            <div className={styles.cardContainer}>
                {cardArr.map( (card) => (
                    <PersonCard path={card} />
                ))}
            </div>
        </div>
    )
}

export default Main