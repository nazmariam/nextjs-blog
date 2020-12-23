import ActiveLink from './activeLink';
import navigation from '../styles/navigation.module.scss';
import {useRouter} from "next/router";
import React from "react";
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n';

function Navigation({t}) {
        const router = useRouter();
        const {locale} = router;

        return (
            <ul className={navigation.container}>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.home')} href={'/'} locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.about')} href={'/about'}  locale={locale} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={t('navigation.blog')} href={'/blog'}  locale={locale} />
                </li>
            </ul>
        )
}

Navigation.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Navigation.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Navigation)
