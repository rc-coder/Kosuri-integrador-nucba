import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { status } from '../../Styles/utilities';
import { CustomButton } from '../UI';

const OrderContainer = styled.div`
  width: 90%;
  background-color: #fafafa;
  color: black;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  padding: 20px;
  margin-top: 8.5rem;

  @media screen and (max-width: 650px) {
    padding: 0;
    margin-top: 6.5rem;
  }
`;

const TitleContainerStyled = styled.div`
  width: 100%;
  @media screen and (max-width: 650px) {
    grid-area: resumen;
  }
`;

const StatusContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 650px) {
    grid-area: status;
  }
`;

const Status = styled.div`
  padding: 8px 18px;
  border-radius: 0 8px;
  font-family: Poppins-SemiBold, Helvetica, Arial, sans-serif;
  text-align: center;
  ${({ type }) => status(type)}
  width: 100%;
`;

const HeaderDetail = styled.div`
  display: flex;
  border-bottom: 3px solid #ff0038;
  padding: 20px 0;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-areas: 'volver resumen' 'status status';
    gap: 10px;
  }
`;

const VolverButtonStyled = styled(Link)`
  @media screen and (max-width: 650px) {
    grid-area: volver;
  }
`;

const ProductDetail = styled.div`
  padding: 20px 30px;
  border-bottom: 3px solid #ff0038;

  h3 {
    margin-bottom: 10px;
  }
`;

const ProductUl = styled.ul`
  padding: 0px;
  list-style: none;
`;
const ProductLi = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const ItemImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-color: #ff0038;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 50%;
`;
const ProductsInfo = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const PriceDetail = styled.div`
  text-align: right;
  padding: 10px;
`;

const Quantity = styled.span`
  display: block;
  color: #7d7d7d;
`;

const CostDetail = styled.div`
  border-top: 1px solid #e5edef;
  padding: 20px 30px;
`;

const CostLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const OrderDetails = () => {
  let { orderId } = useParams();
  let { orders } = useSelector((state) => state.orders);
  let [order] = orders.filter((order) => order.id === orderId);

  return (
    <OrderContainer>
      <HeaderDetail>
        <VolverButtonStyled to={'/ordenes-historial'}>
          <CustomButton w="60px">Volver</CustomButton>
        </VolverButtonStyled>
        <TitleContainerStyled>
          <h3>Detalles</h3>
          <p>Orden: {orderId}</p>
        </TitleContainerStyled>
        <StatusContainerStyled>
          <Status type={order.status}>{order.status}</Status>
        </StatusContainerStyled>
      </HeaderDetail>
      <ProductDetail>
        <h3>Productos</h3>
        <ProductUl>
          {order.items.map((item) => (
            <ProductLi key={item.id}>
              <ItemImg img={item.img} />
              <ProductsInfo>
                <p>{item.name}</p>

                <p>{item.description}</p>
              </ProductsInfo>
              <PriceDetail>
                <Quantity>{item.quantity}U</Quantity>
                <p>
                  <strong>${item.price}</strong>
                </p>
              </PriceDetail>
            </ProductLi>
          ))}
        </ProductUl>
      </ProductDetail>
      <CostDetail>
        <h3>Costos</h3>
        <ProductUl>
          <CostLi>
            <span>Costo de los productos </span>

            <span>${order.subTotal}</span>
          </CostLi>
          <CostLi>
            <span>Costo de envío </span>

            <span>${order.shippingPrice}</span>
          </CostLi>
          <CostLi>
            <span>
              <strong>Total</strong>
            </span>

            <span>
              <strong>${order.total}</strong>
            </span>
          </CostLi>
        </ProductUl>
      </CostDetail>
    </OrderContainer>
  );
};
