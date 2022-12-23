import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import { toggleMenu } from '../../redux/features/user/userSlice';
import {
  MenuOptionElement,
  MenuOptions,
  Shadow,
  UserMenuStyled,
} from './UserMenuElements';

export const UserMenu = ({ user }) => {
  const { hideMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {!hideMenu && <Shadow onClick={handleToggle}></Shadow>}
      <UserMenuStyled show={!hideMenu}>
        <MenuOptions>
          <Link to={'/ordenes-historial'}>
            <MenuOptionElement onClick={handleToggle}>
              Mis Ordenes
            </MenuOptionElement>
          </Link>
          <MenuOptionElement onClick={() => auth.signOut()}>
            Cerrar sesion
          </MenuOptionElement>
        </MenuOptions>
      </UserMenuStyled>
    </>
  );
};
