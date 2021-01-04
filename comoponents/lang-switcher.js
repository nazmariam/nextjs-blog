import React from 'react';
import { useRouter } from 'next/router';
import { i18n } from '../i18n';

export default function LangSwitcher() {
    const router = useRouter();
    const {locale, locales, pathname} = router;
    return (
        <>
            <select
                onChange={ ({target}) => {
                        i18n.changeLanguage(target.value);
                        router.push(pathname, pathname, { locale: target.value });
                    }
                }
                value={locale}
                name={'lang'} id={'lang-select'}>
                {locales.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                ))}
            </select>
        </>
        )
}
