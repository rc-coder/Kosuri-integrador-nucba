import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOrder } from '../redux/features/orders/ordersSlice';
import styled from 'styled-components';
import { OrderHistory } from '../components/OrderHistory/OrderHistory';

export const CheckoutContainerStyled = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: calc(100vh - 75px);

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }

  @media (orientation: landscape) {
    align-items: flex-start;
  }

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fe8c00; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f83600,
      #fe8c00
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f83600,
      #fe8c00
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    mix-blend-mode: color;
  }

  &::after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000bd;
  }
`;

const Orders = () => {
  const { currentUser } = useSelector((state) => state.user);
  let { orders } = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchOrders = useCallback(async () => {
    await dispatch(fetchOrder(currentUser.id));
  }, [dispatch, currentUser]);

  if (!currentUser) {
    navigate('/');
  }
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <CheckoutContainerStyled>
      <OrderHistory orders={orders} />
    </CheckoutContainerStyled>
  );
};

export default Orders;
