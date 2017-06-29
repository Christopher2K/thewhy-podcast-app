import * as React from 'react';
import Socials from './socials.component';
import '../../assets/styles/components/_menu.scss';

const logo = require('../../assets/img/the-why-inline.png');

export interface MenuStateProps {
    menuOpened: boolean
}

export interface MenuDispatchProps {
    openMenu: any,
    closeMenu: any,
}

interface MenuProps extends MenuStateProps, MenuDispatchProps {
}

const Menu: React.SFC<MenuProps> = ({menuOpened, openMenu, closeMenu}): JSX.Element => (

    <nav className={ menuOpened ? 'menu menu--opened' : 'menu menu--closed' }>
        <i className="menu__burger fa fa-2x fa-bars"
           onClick={ openMenu }>
        </i>

        <div className="menu__content">
            <i className="content__exit fa fa-times"
               onClick={ closeMenu }>
            </i>

            <img className="content__logo" src={logo} alt="The Why, Le Poukwa"/>
            <ul className="content__items">
                <li className="item">
                    <a className="item__link" href="#">Concept</a>
                </li>
                <li className="item">
                    <a className="item__link" href="#">Podcasts</a>
                </li>
                <li className="item">
                    <a className="item__link" href="#">A propos</a>
                </li>
            </ul>
            <Socials />

            <div className="content__legals">
                <p className="legals__mentions">Mentions légales</p>
                <p className="legals__copyright">The Why Le Poukwa&copy; 2017</p>
            </div>
        </div>
    </nav>
);

export default Menu;