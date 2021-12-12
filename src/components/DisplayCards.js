import React, {useEffect, useState} from 'react';
import styles from "../styles/StyleMain.module.css"
import PersonCard from "./PersonCard";

function DisplayCards( {initCardArray, clickHandler} ) {

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
                />
            ))}
        </div>
    );
}

export default DisplayCards;
