import React from "react";
import styles from './styles.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <button className={styles.btnGreen}>
                Вклад в развитие
            </button>
            <div className={styles.smallText}>
                Целевой капиталл
            </div>
            <div className={styles.largeText}>
                Для поддержки проектов по развитию науки и технологий
            </div>
            <button className={styles.btnWhite}>
                Поздравить Томский политех!
            </button>
        </div>
    )
}

export default Header