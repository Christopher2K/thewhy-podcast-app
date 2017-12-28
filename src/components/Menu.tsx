import * as React from 'react';
import Socials from './Socials';
import Legals from './Legals';
import { Link } from 'react-router-dom';
import * as logo from '../assets/img/the-why-inline.png';
import '../assets/styles/components/_menu.scss';

export interface StateProps {
  menuOpened: boolean;
}

export interface DispatchProps {
  openMenu: () => any;
  closeMenu: () => any;
}

export type Props = StateProps & DispatchProps;

const Menu: React.SFC<Props> = ({ menuOpened, openMenu, closeMenu }): JSX.Element => (
  <nav className={menuOpened ? 'menu menu--opened' : 'menu menu--closed'}>
    <i className="menu__burger fa fa-2x fa-bars" onClick={openMenu} />

    <div className="menu__content">
      <i className="content__exit fa fa-times" onClick={closeMenu} />

      <img className="content__logo" src={logo} alt="The Why, Le Poukwa" />
      <ul className="content__items">
        <li className="item">
          <Link to={`/`} onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li className="item">
          <Link to={`/concept`} onClick={closeMenu}>
            Concept
          </Link>
        </li>
        <li className="item">
          <Link to={`/podcasts`} onClick={closeMenu}>
            Podcasts
          </Link>
        </li>
        <li className="item">
          <span className="item__link" onClick={closeMenu}>
            A propos
          </span>
        </li>
      </ul>
      <Socials />

      <Legals />
    </div>
  </nav>
);

export default Menu;
