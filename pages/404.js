import styles from "../styles/layout.module.scss";
import Navigation from "../comoponents/navigation";
import React from "react";

export default function Custom404() {
    return (
        <>
            <header className={styles.headerNotFound}>
                <Navigation />
            </header>
            <div className={styles.centerNotFound}>
            <img src="https://cdn.setapp.com/a534175d9d57910b1dc1cb27a97971836a023a0a/static/main/images/pages/404/confused.svg" alt="404"/>
            <h1>Sory, page not found</h1>
            </div>
        </>
    )
}
