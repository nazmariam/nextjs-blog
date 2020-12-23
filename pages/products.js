import Head from 'next/head';
import React from "react";
import Layout, {siteTitle} from "../comoponents/layout";
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Navigation from "../comoponents/navigation";
import LangSwitcher from "../comoponents/lang-switcher";
import styles from "../styles/layout.module.scss";
import products from "../styles/products.module.scss";
import {getPostData} from "../lib/posts";

function Products({t}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{t('title')}</title>
                <meta
                    name="description"
                    content="Main MacPaw products"
                />
                <meta
                    property="og:image"
                    content="https://cdn2.macpaw.com/images/og_index.png"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Navigation />
                    <LangSwitcher />
                </header>
            </div>

            <div className={products.wrapper}>
                    <div className={products.center}>
                        <div className={products.title}>{t('title')}</div>
                    </div>
                    <div className={products.center}>
                        <a className={products.navigation} href="store">{t('storeCTA')}</a>
                    </div>
                    <div className={products.products}>
                        <a href="#" className={products.productsProduct}>
                            <div className={products.productsImage}>
                                <img src="https://cdn2.macpaw.com/images/CleanMyMac-X@2x.png" alt=""/>
                            </div>
                            <div className={products.productsName}>CleanMyMac X</div>
                            <div className={products.productsDescription}>{t('cleanmymacDescription')}</div>
                        </a>
                        <a href="#" className={products.productsProduct}>
                            <div className={products.productsImage}>
                                <img src="https://cdn2.macpaw.com/images/256.png" alt=""/>
                            </div>
                            <div className={products.productsName}>ClearVPN</div>
                            <div className={products.productsDescription}>{t('clearvpnDescription')}</div>
                        </a>
                        <a href="#" className={products.productsProduct}>
                            <div className={products.productsImage}>
                                <img src="https://cdn2.macpaw.com/images/setapp@x2.png" alt=""/>
                            </div>
                            <div className={products.productsName}>Setapp</div>
                            <div className={products.productsDescription}>{t('setappDescription')}</div>
                        </a>
                    </div>
                    <div className={products.center}>
                        <div className={products.banner}><span>{t('BFoffer')}</span></div>
                    </div>
                    <div className={products.center}>
                        <div className={products.banner}><span>{t('CMoffer')}</span></div>
                    </div>
                </div>
                <footer className={products.productFooter}>
                    Copyright © 2020 MacPaw Inc. 601 Montgomery Street, Suite 1400, San Francisco, CA 94111 tel:
                    +1-(877)-5-MACPAW
                </footer>
            </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            namespacesRequired: ['products'],
        }
    }
}

Products.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('products')(Products);
