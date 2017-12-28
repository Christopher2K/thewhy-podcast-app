import * as React from 'react';
import '../assets/styles/components/_legals.scss';

const Legals: React.SFC<null> = (): JSX.Element => (
  <div className="legals">
    <p className="legal__mentions">Mentions légales</p>
    <p className="legal__copyright">The Why Le Poukwa&copy; 2017</p>
  </div>
);

export default Legals;
