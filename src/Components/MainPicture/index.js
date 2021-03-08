import React from "react";
import styles from './styles.module.css'

export default function MainPicture({text, img}) {

    return (
        <div
            className={styles.picture}
            style={{backgroundImage: `url(${img})`}}
        >
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.greenRectangle}>

            </div>

        </div>
    )
}