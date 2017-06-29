import * as React from 'react';
import '../../assets/styles/components/_socials.scss';

const Socials: React.SFC<null> = (): JSX.Element => (
    <div className="socials">
        <a className="social social--twitter"
           href="https://twitter.com/thewhy_Podcast"
           target="_blank">
            <i className="social__icon fa fa-twitter">
            </i>
        </a>
        <a className="social social--facebook"
           href="https://www.facebook.com/thewhylepoukwa"
           target="_blank">
            <i className="social__icon fa fa-facebook">
            </i>
        </a>
        <a className="social social--instagram"
           href="https://www.instagram.com/thewhylepoukwa"
           target="_blank">
            <i className="social__icon fa fa-instagram">
            </i>
        </a>
        <a className="social social--soundcloud"
           href="https://soundcloud.com/lepoukwa"
           target="_blank">
            <i className="social__icon fa fa-soundcloud">
            </i>
        </a>
    </div>
);

export default Socials;