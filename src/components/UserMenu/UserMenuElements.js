import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 5em;
  right: 0;
  z-index: 100000000000;
  opacity: 1;
  border-left: 3px solid #ff0038;
  visibility: visible;
  min-width: 250px;
  background: #ffffff;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition-property: transform;
  transition-duration: 0.5s;
`;

export const MenuOptions = styled.div`
  width: 100%;
`;

export const MenuOptionElement = styled.div`
  transition: all 0.3s linear;
  padding: 15px 20px;
  color: #7d7d7d;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ff441f;
  }
`;

export const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
`;
