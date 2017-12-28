import * as React from 'react';
import { Link } from 'react-router-dom';
import * as logo from '../assets/img/the-why-inline.png';
import { Legals, Socials } from '../components';
import '../assets/styles/components/_home.scss';

export const Home: React.SFC = (): JSX.Element => (
  <div className="home page">
    <div className="home__header">
      <img className="header__logo" src={logo} alt="The Why Le Poukwa Logo" />
      <h2 className="header__tag-line">Slogan de la mort qui tue sa mère la ****</h2>
    </div>

    <div className="home__buttons">
      <button className="button">
        <Link to={`/concept`}>Concept</Link>
      </button>
      <button className="button">
        <Link to={`/podcasts`}>Podcasts</Link>
      </button>
    </div>

    <Socials />

    <Legals />
  </div>
);

export default Home;
