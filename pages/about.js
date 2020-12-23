import React from 'react';
import Layout from "../comoponents/layout";
import utilStyles from "../styles/utils.module.scss";
import styles from '../styles/layout.module.scss'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

function About({t}) {
    const router = useRouter();
    const {locale, locales, defaultLocale} = router;
    return (
            <Layout>
                <header className={styles.header}>
                    <img
                        src="/images/profile.jpg"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    />
                    <h1 className={utilStyles.heading2Xl}>{t('aboutTitle')}</h1>
                    <p>
                        {`Locale is: ${locale}`}
                    </p>
                    <p>
                        {`Default locale is: ${defaultLocale}`}
                    </p>
                    <p>
                        {`All locales: ${locales}`}
                    </p>
                </header>
            </Layout>
        )
}

export async function getServerSideProps() {
    return {
        props: {
            namespacesRequired: ['common'],
        }
    }
}

About.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(About)
