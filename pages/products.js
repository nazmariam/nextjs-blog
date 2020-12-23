import Head from 'next/head';
import React from "react";
import {siteTitle} from "../comoponents/layout";
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Navigation from "../comoponents/navigation";
import LangSwitcher from "../comoponents/lang-switcher";
import styles from "../styles/layout.module.scss";
import products from "../styles/products.module.scss";

function Products({t, productVariant, bannerVariant}) {
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
                        { productVariant.map((product) => {
                            const {id, name, link, image} = product;
                            return (
                                <a href={link} className={products.productsProduct} key={id}>
                                    <div className={products.productsImage}>
                                        <img src={image} alt=""/>
                                    </div>
                                    <div className={products.productsName}>{name}</div>
                                    <div className={products.productsDescription}>{t('cleanmymacDescription')}</div>
                                </a>)
                        })}
                    </div>
                    <div className={products.center}>

                        <div className={products.banner}><span>{ bannerVariant ? t('BFoffer') : t('CMoffer')}</span></div>
                    </div>

                </div>
                <footer className={products.productFooter}>
                    Copyright © 2020 MacPaw Inc. 601 Montgomery Street, Suite 1400, San Francisco, CA 94111 tel:
                    +1-(877)-5-MACPAW
                </footer>
            </>
    )
}

export async function setABTestProductVariant() {
    const variantId = Math.round(Math.random());
    const res = variantId ? require('../products/products-a.json') : require('../products/products-b.json');

    return res.map((item) => item);
}

export async function setABTestBannerVariant() {
    return  Math.round(Math.random());
}

export async function getServerSideProps() {
    const productVariantABTest = await setABTestProductVariant();
    const bannerVariantABTest = await setABTestBannerVariant();
    return {
        props: {
            namespacesRequired: ['products'],
            productVariant: productVariantABTest,
            bannerVariant: bannerVariantABTest,
        }
    }
}

Products.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('products')(Products);
