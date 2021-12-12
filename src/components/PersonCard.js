import React from 'react';
import styles from "../styles/PersonCard.module.css"

function PersonCard({info, clickHandler}) {

    return (
        <div className={styles.card}
             onClick={clickHandler}
             clickedstatus={info.clicked.toString()}
        >
            <div className={styles.imageContainer}>
                <img src={info.source}
                     alt={info.name}
                    />
            </div>
        </div>
    )
}

export default PersonCard