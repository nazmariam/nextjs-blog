import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import React from "react";
import Navigation from "./navigation";
import LangSwitcher from "./lang-switcher";

export const siteTitle = 'MacPaw next site'

export default function Layout({ children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Main seo description"
                />
                <meta
                    property="og:image"
                    content="https://cdn2.macpaw.com/images/og_index.png"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Navigation/>
                <LangSwitcher />
            </header>
            <main>{children}</main>
        </div>
    )
}
