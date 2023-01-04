import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOrder } from '../redux/features/orders/ordersSlice';
import styled from 'styled-components';
import { OrderHistory } from '../components/OrderHistory/OrderHistory';

export const CheckoutContainerStyled = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 75px);

  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }

  @media (orientation: landscape) {
    align-items: flex-start;
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
