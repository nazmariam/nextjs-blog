import Head from 'next/head';
import React, {Component} from "react";
import {siteTitle} from "../comoponents/layout";
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import Navigation from "../comoponents/navigation";
import LangSwitcher from "../comoponents/lang-switcher";
import styles from "../styles/layout.module.scss";
import products from "../styles/products.module.scss";

class Store extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        const savedProducts = JSON.parse(localStorage.getItem('products'));

        if (savedProducts && savedProducts.length) {
            this.setState(() => {
                const products = savedProducts;
                return ({products})
            })
        }
    }

    handleAddProductButtonClick () {
        const availableProducts = [
            {
                'name': 'Setapp',
                'img': 'https://cdn2.macpaw.com/images/store/40-off@2x.png',
            },
            {
                'name': 'Gemini 2',
                'img': 'https://cdn2.macpaw.com/images/store/upgrade/gemini-upgrade@2x.png',
            },
            {
                'name': 'CleanMyMacX',
                'img': 'https://cdn2.macpaw.com/images/store/upgrade/cleanmymacx-upgrade@2x.png',
            },

        ];
        const productVariant = Math.floor(Math.random() * availableProducts.length);

         this.setState((prevState) => {
             const {products} = prevState;
             const product = availableProducts[productVariant];
             products.push(product);
             return ({products})
        })
    }

    handleRemoveProductClick (productIndex) {
        this.setState((prevState) => {
            const {products} = prevState;
            products.splice(productIndex, 1);
            return ({products})
        })
    }

    componentWillUnmount() {
        localStorage.setItem('products', JSON.stringify(this.state.products));
    }

    render () {
        const t = this.props.t;
        console.log('!!! ', this.state.products);
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>{t('title')}</title>
                    <meta
                        name="description"
                        content="Main MacPaw products"
                    />
                    <meta
                        property="og:image"
                        content="https://cdn2.macpaw.com/images/og_index.png"
                    />
                    <meta name="og:title" content={siteTitle}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </Head>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <Navigation/>
                        <LangSwitcher/>
                    </header>
                </div>


                <div className={products.wrapper}>
                    <div className={products.center}>
                        <div className={products.title}>Special Offers</div>
                    </div>
                    <div className={products.center}>
                        <a className={products.navigation} href="/products">Go to Products</a>
                    </div>
                    <div className={products.center}>
                        <div className={products.center}>
                            <div className={products.title}>You have {this.state.products.length} special offers</div>
                            <button onClick={() => {this.handleAddProductButtonClick()}}>Add 1 more</button>
                        </div>
                        <div className={products.store}>
                            {this.state.products.map((product, index) => (
                                <div className={products.storeProduct} key={index}>
                                    <button className={products.storeRemove} onClick={() => this.handleRemoveProductClick(index)}>×</button>
                                    <img src={product.img} width="96" alt=""/>
                                    <div className={products.storeAbout}>
                                        <div className={products.storeName}>Special offer #{index+1}</div>
                                        <div className={products.storeDescription}>Users of previous versions of CleanMyMac
                                            can upgrade to {product.name} at 50% off.
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className={products.productFooter}>
                    Copyright © 2020 MacPaw Inc. 601 Montgomery Street, Suite 1400, San Francisco, CA 94111 tel:
                    +1-(877)-5-MACPAW
                </footer>

            </>
        )
    }
}

export async function getServerSideProps() {
    return {
        props: {
            namespacesRequired: ['store'],
        }
    }
}

Store.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Store);
