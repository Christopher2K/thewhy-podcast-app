import * as React from 'react';
import * as logo from '../assets/img/the-why-inline.png';
import '../assets/styles/components/_not-found.scss';

export const NotFoundPage: React.SFC = (): JSX.Element => (
  <div className="not-found page">
    <img className="not-found__logo" src={logo} alt="The Why Le Poukwa Logo" />
    <h1 className="not-found__title">Page introuvable</h1>
    <p className="not-found__message">La page demandée est introuvable.</p>
  </div>
);

export default NotFoundPage;
