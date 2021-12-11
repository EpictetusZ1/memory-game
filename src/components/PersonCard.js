import React from 'react';
import styles from "../styles/PersonCard.module.css"

function PersonCard(props) {
    const source = props.path
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={source} alt="famous authors" />
            </div>
        </div>
    )
}

export default PersonCard