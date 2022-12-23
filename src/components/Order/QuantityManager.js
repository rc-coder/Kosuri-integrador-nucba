import styled from 'styled-components';
import { Red } from '../../Styles/utilities';
import DeleteIcon from '../../assets/delete-button.png';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/features/cart/cartSlice';

const QuantityManagerStyled = styled.div`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButtonsStyled = styled.div`
  width: 23px;
  color: ${Red};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;

const DeleteIconStyled = styled.img`
  width: 23px;
  height: auto;
  padding: 10px;
  cursor: pointer;
`;

export const QuantityManager = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <QuantityManagerStyled>
      {+item.quantity === 1 ? (
        <DeleteIconStyled
          onClick={() => dispatch(removeItem(item))}
          src={DeleteIcon}
        ></DeleteIconStyled>
      ) : (
        <QuantityButtonsStyled onClick={() => dispatch(removeItem(item))}>
          -
        </QuantityButtonsStyled>
      )}
      <QuantityStyled>{item.quantity}</QuantityStyled>
      <QuantityButtonsStyled onClick={() => dispatch(addItem(item))}>
        +
      </QuantityButtonsStyled>
    </QuantityManagerStyled>
  );
};
