import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {i18n} from "../i18n";

function LocaleCookieSet () {

    const router = useRouter();
    const {locale, defaultLocale, pathname} = router;
    const currentLocaleCookie = Cookies.get('locale');

    if (!currentLocaleCookie) {
        // Cookies.set('locale', locale, 5000)
    }

    console.log(currentLocaleCookie);
}

export default LocaleCookieSet;
