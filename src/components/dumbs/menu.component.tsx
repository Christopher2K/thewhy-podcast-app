import * as React from 'react';
import Socials from './socials.component';
import Legals from './legals.component';
import '../../assets/styles/components/_menu.scss';
import { Link } from 'react-router-dom';

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

//console.log(Link);

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
                    <Link to={`/`} onClick={ closeMenu }>Accueil</Link>
                </li>
                <li className="item">
                    <Link to={`/concept`} onClick={ closeMenu }>Concept</Link>
                </li>
                <li className="item">
                    <Link to={`/podcasts`} onClick={ closeMenu }>Podcasts</Link>
                </li>
                <li className="item">
                    <span className="item__link" onClick={ closeMenu }>A propos</span>
                </li>
            </ul>
            <Socials />

            <Legals />
        </div>
    </nav>
);

export default Menu;
