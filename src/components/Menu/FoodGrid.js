import styled from 'styled-components';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 20px;
`;

export const FoodCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* con $ {x} se puede correr JavaScript, todas las props que le pasemos al componente Food, pasaran como parametro a la funcion anonima dentro de $ {x},
  de esta manera background-image es dinamico */
  /* background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover; */
  background-color: rgba(255, 255, 255, 0.2);
  filter: contrast(75%);
  padding: 10px;
  margin-top: 5px;
  color: black;
  border-radius: 7px;
  transition-property: box-shadow margin-top;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px gray;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px gray;
    margin-top: 0px;
  }
`;

export const TypeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

export const TypeName = styled.div`
  color: red;
`;

export const SectionName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid red;
`;
