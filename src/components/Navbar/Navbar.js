import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import KosuriLogo from '../../assets/kosuri-logo.png';
import platterLogo from '../../assets/waiter.png';
import { showCart } from '../../redux/features/cart/cartSlice';
import { toggleMenu } from '../../redux/features/user/userSlice';
import { UserMenu } from '../UserMenu/UserMenu';
import userIcon from '../../assets/user.png';

const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => {
  return css`
    position: fixed;
    ${yProp}: ${y};
    ${xProp}: ${x};
  `;
};

const NavbarStyled = styled.div`
  padding: 10px;
  ${fixed()};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 3px solid #e5edef;
`;

const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
  @media screen and (max-width: 600px) {
    max-width: 150px;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
  @media screen and (max-width: 600px) {
    max-width: 150px;
  }
`;

const User = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Platter = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
  height: 25px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 16px;
  font-family: 'Julee', cursive;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

export const WelcomeTitle = styled.div`
  border-bottom: 1px solid #e5edef;
  width: 100%;
  padding-bottom: 5px;
  padding: 15px 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(showCart());
  };
  const handleUserMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <NavbarStyled>
      <Link to="/">
        <Logo src={KosuriLogo} />
      </Link>
      <NavigationMenu>
        <Platter src={platterLogo} onClick={handleCart} />
        <Divider />
        {currentUser ? (
          <>
            <WelcomeTitle>Hola {currentUser.displayName}!</WelcomeTitle>
            <User src={userIcon} onClick={handleUserMenu} />
            <UserMenu user={currentUser} />
          </>
        ) : (
          <Link to="/login">
            <LoginButton>Ingresar</LoginButton>
          </Link>
        )}
      </NavigationMenu>
    </NavbarStyled>
  );
};

export default Navbar;
