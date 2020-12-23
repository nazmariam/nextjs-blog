import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import React from "react";
import Navigation from "./navigation";
import LangSwitcher from "./lang-switcher";
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const name = 'Articles'
export const siteTitle = 'MacPaw next blog'

function BlogLayout({ children, main, t, article }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content="https://cdn2.macpaw.com/images/og_index.png"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Navigation />
                {!article ?  <LangSwitcher /> : ''}

                {main ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{t('title')}</h1>
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/blog">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!main && (
                <div className={styles.backToHome}>
                    <Link href="/blog">
                        <a>← Back to all articles</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

BlogLayout.getInitialProps = async () => ({
    namespacesRequired: ['blog'],
})

BlogLayout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('blog')(BlogLayout)
