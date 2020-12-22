import React from 'react';
import Layout from "../comoponents/layout";
import utilStyles from "../styles/utils.module.scss";
import styles from '../styles/layout.module.scss'

const About = () => (
    <Layout>
        <header className={styles.header}>
            <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>About us</h1>
        </header>
    </Layout>
)

export default About;
