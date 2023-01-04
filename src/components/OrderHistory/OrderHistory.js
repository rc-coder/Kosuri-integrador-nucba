import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { status } from '../../Styles/utilities';
import { formatDate, formatPrice } from '../../Utils';
import { CustomButton } from '../UI';

const OrdersContainer = styled.div`
  box-sizing: border-box;
  width: 90%;
  background-color: #474747;
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(20px);
  color: white;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 5px;
    margin-top: 6rem;
  }
`;

const OrderTitle = styled.div`
  padding-bottom: 20px;
  border-bottom: 3px solid #ff0038;
  margin-bottom: 20px;
  width: 90%;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

const OrderContent = styled.div`
  background-color: #fff;
  border: 1px solid #ff0038;
  border-radius: 8px;
  margin-bottom: 30px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const OrderDetails = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Status = styled.div`
  padding: 8px 18px;
  border-radius: 0 8px;
  font-family: 'Julee', cursive;
  text-align: center;
  ${({ type }) => status(type)}
`;

const OrderUl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const OrderLi = styled.p`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  zoom: 1;
  line-height: 1.7;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #7d7d7d;
`;

const OrderSpan = styled.span`
  min-width: 50px;
  padding-right: 5px;
  display: inline-block;
  color: #332927;
`;

const StatusContainerStyled = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const OrderHistory = ({ orders }) => {
  let url = useLocation().pathname;
  return (
    <OrdersContainer>
      <OrderTitle>
        <h2>Mis últimos pedidos</h2>
        <p>
          Haz seguimiento al detalle de tus pedidos anteriores y solicita ayuda
          si hay algún inconveniente con una de tus compras.
        </p>
      </OrderTitle>
      <div>
        {orders.map((order) => (
          <OrderContent key={order.id}>
            <OrderDetails>
              <OrderUl>
                <OrderLi>
                  <OrderSpan>Fecha:</OrderSpan>
                  {formatDate(new Date(order.createdAt.seconds))}
                </OrderLi>
                <OrderLi>
                  <OrderSpan>Total:</OrderSpan>
                  {formatPrice(order.total)}
                </OrderLi>
              </OrderUl>
              <StatusContainerStyled>
                <Status type={order.status}>{order.status}</Status>
                <Link to={`${url}/${order.id}`}>
                  <CustomButton w="100px" m="0">
                    Ver Detalles
                  </CustomButton>
                </Link>
              </StatusContainerStyled>
            </OrderDetails>
          </OrderContent>
        ))}
      </div>
    </OrdersContainer>
  );
};
