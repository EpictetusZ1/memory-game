import React from 'react';
import styles from "../styles/Main.module.css"
import PersonCard from "./PersonCard";

function DisplayCards( {gameState, clickHandler} ) {
    const initCardArray = gameState.people

    const shuffleCards = (cardArr) => {
        for (let i = cardArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
        }
        return cardArr
    }

    return (
        <div className={styles.cardContainer}>
            {shuffleCards(initCardArray).map( (card) => (
                <PersonCard key={card.name}
                            info={card}
                            clickHandler={clickHandler}
                            winCond={gameState.winCondition}
                />
            ))}
        </div>
    );
}

export default DisplayCards;
