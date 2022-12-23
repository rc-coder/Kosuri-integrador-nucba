import { OrderDetails } from '../components/OrderHistory/OrderDetails';
import { CheckoutContainerStyled } from './Orders';

const OrderDetail = () => {
  return (
    <CheckoutContainerStyled>
      <OrderDetails />
    </CheckoutContainerStyled>
  );
};

export default OrderDetail;
