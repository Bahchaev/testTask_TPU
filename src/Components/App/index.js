import React from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import styles from './styles.module.css'
import Main from "../Main";
import Footer from "../Footer";
import Copyright from "../Copyright";

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.topPart}>
                <div className={styles.navBarContainer}>
                    <div className={styles.contentWrapper}>
                        <NavBar/>
                    </div>
                </div>
                <div className={styles.headerContainer}>
                    <div className={styles.contentWrapper}>
                        <Header/>
                    </div>
                </div>
            </div>
            <div className={styles.mainPart}>
                <div className={styles.contentWrapper}>
                    <Main/>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.contentWrapper}>
                    <Footer/>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.contentWrapper}>
                    <Copyright/>
                </div>
            </div>
        </div>
    );
}

export default App;
