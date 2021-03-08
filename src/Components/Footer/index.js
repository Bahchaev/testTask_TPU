import React from "react";
import styles from './styles.module.css'
import logo from '../../Images/logo-tpu.png'
import docsIcon from '../../Images/docs_Icon.ico'
import instagramIcon from '../../Images/instagram_Icon.png'
import facebookIcon from '../../Images/facebook_Icon.png'
import youtubeIcon from '../../Images/youtube_Icon.png'
import locationIcon from '../../Images/location-Icon.png'
import atIcon from '../../Images/@-icon.ico'
import mobileIcon from '../../Images/mobile-icon.png'


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerColumn1}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <div className={styles.docLink}>
                    <img src={docsIcon} alt="docs"/>
                    <div>Документы Фонда</div>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://www.instagram.com/?hl=ru"><img src={instagramIcon} alt="instagram"/></a>
                    <a href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook"/></a>
                    <a href="https://www.youtube.com/"><img src={youtubeIcon} alt="youtube"/></a>
                </div>
            </div>
            <div className={styles.footerColumn2}>
                <div className={styles.address}>
                    <img src={locationIcon} alt="location"/>
                    <div>
                        <div> пр. Ленина. 30 </div>
                        <div> Главный корпус ТПУ, офис 200 </div>
                    </div>

                </div>
                <div className={styles.website}>
                    <img src={atIcon} alt=""/>
                    <div>tpu@tpu.ru</div>
                </div>
            </div>
            <div className={styles.footerColumn3}>
                <div className={styles.mobile}>
                    <img src={mobileIcon} alt="tel"/>
                    <div>
                        <div className={styles.mobileNumber}>+7 (3822) 70-16-02</div>
                        <div className={styles.mobileNumber}>+7 (3822) 70-64-06</div>
                    </div>
                </div>
            </div>
        </div>
    )
}