import { MenuItem } from '../interfaces';
import * as React from 'react';
import { Menu } from './';
import { AppState } from '../states';

const menuItems: MenuItem[] = [
   {
       label: 'Menu 1',
       link: '#'
   },
   {
       label: 'Menu 3',
       link: '#'
   },
   {
       label: 'Menu 4',
       link: '#'
   },
   {
       label: 'Menu 5',
       link: '#'
   },
   {
       label: 'Menu 6',
       link: '#'
   },
];

export class App extends React.Component<null, AppState> {
    public constructor(public props: null) {
        super(props);
        this.state = new AppState;
    }

    public render(): JSX.Element {
        return (
            <Menu title="The Why, The Menu" links={menuItems} />
        );
    }
}