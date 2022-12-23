import styled from 'styled-components';
import { formatPrice } from '../../Utils';
import { CustomButton } from '../UI';

export const DetailContainer = styled.div`
  max-width: 660px;
  width: 100%;
`;

export const DetailStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

export const DetailContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px 15px;
  background-color: #fff;
`;

export const UlDetail = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiDetail = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #9faab7;
  margin-bottom: 15px;
`;

export const RowDetail = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #e5edef;
`;

export const TotalDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CheckoutDetail = ({ isValid, envio, subTotal }) => {
  return (
    <DetailContainer>
      <DetailStyled>
        <DetailContent>
          <UlDetail>
            <LiDetail>
              <p>Costo de productos</p>
              <span>{formatPrice(subTotal)}</span>
            </LiDetail>
            <LiDetail>
              <p>Costo de Envío</p>
              <span>{formatPrice(envio)}</span>
            </LiDetail>
          </UlDetail>
          <RowDetail />
          <TotalDetail>
            <h4>Total</h4>
            <h4>{formatPrice(envio + subTotal)}</h4>
          </TotalDetail>
          <CustomButton type="submit" w="100%" m="0px" disabled={isValid}>
            Pagar
          </CustomButton>
        </DetailContent>
      </DetailStyled>
    </DetailContainer>
  );
};
