import {
    connect,
    Dispatch,
    MapDispatchToProps,
    MapStateToProps
} from 'react-redux';
import Menu, {
    MenuDispatchProps,
    MenuStateProps
} from '../dumbs/menu.component';
import { AppState } from '../../states/app-state.model';
import {
    closeMenu,
    openMenu
} from '../../actions/menu-state.action';

const mapStateToProps: MapStateToProps<MenuStateProps, null> = (state: AppState) => ({ menuOpened: state.menu.opened });
const mapDispatchToProps: MapDispatchToProps<MenuDispatchProps, null> = (dispatch: Dispatch<any>) => ({
    openMenu: () => {
        dispatch(openMenu());
    },
    closeMenu: () => {
        dispatch(closeMenu());
    }
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;