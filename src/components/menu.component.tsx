import * as React from 'react';
import { MenuState } from '../states';
import { MenuItem } from '../interfaces';


interface MenuProps {
    title: string,
    links: MenuItem[],
}

export class Menu extends React.Component<MenuProps, MenuState> {

    public constructor(public props: MenuProps) {
        super(props);

        this.state = {
            opened: true
        }
    }

    public render(): JSX.Element {
        const { title, links } = this.props;
        const { opened } = this.state;
        return (
            <nav className={ opened ? "menu menu__opened" : "menu menu__closed" }>
                <i className="menu-open fa fa-2x fa-bars"
                    onClick={ this.onOpenMenuClicked }>
                </i>

                <div className="menu-content">
                    <i className="content-close fa fa-times"
                        onClick={ this.onCloseMenuClicked }>
                    </i>
                    <h1 className="content-title">{ title }</h1>
                    <ul className="content-items">
                        { links.map((item: MenuItem) => 
                            <li className="item">
                                <a className="item-link" href={item.link}>{item.label}</a>
                            </li>) 
                        }
                    </ul>
                </div>
            </nav>
        );
    }

    public onOpenMenuClicked: () => void = () => {
        let { opened, ...otherThings } = this.state;
        opened = true;
        const newState: MenuState = { opened, ...otherThings };
        this.setState(newState);
    }

    public onCloseMenuClicked: () => void = () => {
        let { opened, ...otherThings } = this.state;
        opened = false;
        const newState: MenuState = { opened, ...otherThings };
        this.setState(newState);
    }
}