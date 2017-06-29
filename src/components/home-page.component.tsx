import * as React from 'react';
import '../assets/styles/components/_home.scss';
import Legals from './dumbs/legals.component';
import Socials from './dumbs/socials.component';
import { Link } from 'react-router-dom';
const whyLogo = require('../assets/img/the-why-inline.png');


export const Home: React.SFC = (): JSX.Element => (
    <div className="home page">
        <div className="home__header">
            <img className="header__logo" src={whyLogo} alt="The Why Le Poukwa Logo" />
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