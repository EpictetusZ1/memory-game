import React from 'react';
import styles from "../styles/PersonCard.module.css"

function PersonCard( {info, clickHandler, winCond} ) {

    return (
        <div className={`${styles.card} person`}
             onClick={clickHandler}
             clickedstatus={info.clicked}
        >
            <div className={styles.imageContainer}>
                <img src={info.source}
                     alt={info.name}
                    />
            </div>
            {winCond && <p>{info.name}</p>}
        </div>
    )
}

export default PersonCard