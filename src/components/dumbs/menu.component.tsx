import * as React from 'react';
import { MenuItem } from '../../interfaces';


export interface MenuStateProps {
    menuOpened: boolean
}

export interface MenuDispatchProps {
    openMenu: any,
    closeMenu: any,
}

interface MenuProps extends MenuStateProps, MenuDispatchProps {}

const Menu: React.SFC<MenuProps> = ({menuOpened, openMenu, closeMenu}): JSX.Element => (
    <nav className={ menuOpened ? 'menu menu__opened' : 'menu menu__closed' }>
        <i className="menu-open fa fa-2x fa-bars"
           onClick={ openMenu }>
        </i>

        <div className="menu-content">
            <i className="content-close fa fa-times"
               onClick={ closeMenu }>
            </i>
            <h1 className="content-title">The Why, The Poukwa</h1>
            <ul className="content-items">

            </ul>
        </div>
    </nav>
);

export default Menu;