import React from 'react';
import styles from "../styles/PersonCard.module.css"

function PersonCard(props) {
    const {...data} = props.info

    return (
        <div className={styles.card}
             onClick={(e) => props.clickHandler(e)}
        >
            <div className={styles.imageContainer}>
                <img src={data.source}
                     alt={data.name}
                     clickedstatus={data.clicked.toString()}/>
            </div>
        </div>
    )
}

export default PersonCard