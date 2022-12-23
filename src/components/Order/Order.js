import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatPrice } from '../../Utils';
import { Link } from 'react-router-dom';
import { clearCart, showCart } from '../../redux/features/cart/cartSlice';
import {
  ConfirmButton,
  DialogContent,
  DialogFooter,
  DialogShadow,
} from '../FoodDetail/FoodDetail';
import { QuantityManager } from './QuantityManager';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px gray;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition-property: transform;
  transition-duration: 0.5s;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid #f7f7f7;
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
`;

const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const Order = () => {
  const { show } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();

  const handlerShow = () => {
    dispatch(showCart());
  };

  return (
    <>
      {show && <DialogShadow onClick={handlerShow} />}
      <OrderStyled show={show}>
        {cartItems?.length === 0 ? (
          <OrderContent>Agrega algun plato para verlo aqui.</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu Pedido:</OrderContainer>
            {cartItems.map((item) => (
              <OrderContainer key={item.id}>
                <OrderItem>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                  <div>
                    <QuantityManager item={item} />
                  </div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter>
          <Link to={'/checkout'} onClick={handlerShow}>
            <ConfirmButton>Pagar {formatPrice(total)}</ConfirmButton>
          </Link>
        </DialogFooter>
      </OrderStyled>
    </>
  );
};
