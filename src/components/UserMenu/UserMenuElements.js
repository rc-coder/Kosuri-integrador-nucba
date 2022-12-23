import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 135%;
  right: 0;
  z-index: 12;
  opacity: 1;
  border: 1px solid #c7c7c7;
  visibility: visible;
  min-width: 250px;
  border-radius: 8px;
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
  font-family: 'Poppins-Regular', Helvetica, Arial, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 68, 31, 0.04);
    color: #ff441f;
  }
`;

export const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
`;
