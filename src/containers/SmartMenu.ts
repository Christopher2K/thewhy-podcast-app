import { connect, Dispatch, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Menu, MenuDispatchProps, MenuStateProps } from '../components';
import { closeMenu, openMenu } from '../actions/menu.actions';
import { AppState } from '../reducers';

const mapStateToProps: MapStateToProps<MenuStateProps, null> = (state: AppState) => ({ menuOpened: state.menu.opened });
const mapDispatchToProps: MapDispatchToProps<MenuDispatchProps, null> = (dispatch: Dispatch<any>) => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
