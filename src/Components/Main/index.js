import React from "react";
import cn from 'classnames'

import styles from './styles.module.css'
import MainPicture from "../MainPicture";

import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from "./images/pic4.jpg"
import pic5 from "./images/pic5.jpg"
import pic6 from "./images/pic6.jpg"
import pic7 from "./images/pic7.jpg"
import pic8 from "./images/pic8.jpg"
import pic9 from "./images/pic9.jpg"
import pic10 from "./images/pic10.jpg"

const pictures = [
    {
        text: "Комплексные исследования арктического шельфа",
        img: pic1
    },
    {
        text: "Космос",
        img: pic2
    },
    {
        text: "Большие данные",
        img: pic3
    },
    {
        text: "Особенные люди",
        img: pic4
    },
    {
        text: "Промышленная томография и неразрушающий контроль",
        img: pic5
    },
    {
        text: "Робототехника и управление распределенными объектами",
        img: pic6
    },
    {
        text: "Трудноизвлекаемые природные ресурсы",
        img: pic7
    },
    {
        text: "Чистая вода",
        img: pic8
    },
    {
        text: "Экоэнергетика",
        img: pic9
    },
    {
        text: "Ядерные технологии для медицины",
        img: pic10
    },
];

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.greenLine}></div>
            <div className={styles.title}>
                <div className={styles.titleHeader}>
                    Научные проекты
                </div>
                <div className={styles.titleText}>
                    Научные направления, которые развивают в Томском
                    Политехническом Университете - это мега-проекты,
                    способные изменить жизнь на планете в лучшую сторону
                </div>
            </div>

            {pictures.map((pic) => {
                return (
                    <MainPicture text={pic.text} img={pic.img}/>
                )
            })}

        </div>
    )

}

