/* tslint:disable:max-line-length */
import * as React from 'react';
import '../assets/styles/components/_podcast.scss';

interface Props {
  title: string;
  imageUrl: string;
  streamUrl: string;
}

class Podcast extends React.Component<Props, null> {
  public render(): JSX.Element {
    const { imageUrl, streamUrl, title } = this.props;
    return (
      <div className="podcast">
        <h3 className="podcast__title">{title}</h3>
        <img className="podcast__image" src={imageUrl} alt="Test"/>
        <audio className="podcast__audio" src={streamUrl} controls></audio>
      </div>
    );
  }
}

export default Podcast;
