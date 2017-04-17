import * as React from 'react';

interface Props {
    title: string
}

export class App extends React.Component<Props, null> {
    public render() {
        const {title} = this.props;

        console.debug(title);
        
        return <div>
            <p>Hello ! This app name's is {title}</p>
            <div>Test Hot reloading :)</div>
        </div>
    }
}