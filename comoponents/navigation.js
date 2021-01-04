import ActiveLink from './activeLink';
import navigation from '../styles/navigation.module.scss';
import React from "react";
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n';
import Cookies from 'js-cookie';

function Navigation({t}) {
        const locale = Cookies.get('locale');

    return (
            <ul className={navigation.container}>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.home')} href={'/'} locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.about')} href={'/about'} locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.blog')} href={'/blog'} locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.products')} href={'/products'} locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.store')} href={'/store'} locale={locale} />
                </li>
            </ul>
        )
}

export async function getServerSideProps() {
    return {
        props: {
            namespacesRequired: ['common'],
        }
    }
}

Navigation.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Navigation)
