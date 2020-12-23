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
export const siteTitle = 'SEO title'

function BlogLayout({ children, main, t }) {
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
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <Navigation />
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
            <LangSwitcher />
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
