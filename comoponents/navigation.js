import React, {Component} from 'react';
import ActiveLink from './activeLink';
import navigation from '../styles/navigation.module.scss';

class Navigation extends Component {
    render() {
        return (
            <ul className={navigation.container}>
                <li className={navigation.item}>
                    <ActiveLink children={'Home'} href={'/'}/>
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={'About us'} href={'/about'} />
                </li>
                <li className={navigation.item}>
                    <ActiveLink children={'Blog'} href={'/blog'} />
                </li>
            </ul>
        )
    }
}

export default Navigation;
