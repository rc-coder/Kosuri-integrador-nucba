import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addItem } from '../../redux/features/cart/cartSlice';
import { selectFood } from '../../redux/features/selectedFood/selectedFoodSlice';
import { Red } from '../../Styles/utilities';
import { formatPrice } from '../../Utils';

const Dialog = styled.div`
  width: 450px;
  background-color: white;
  position: fixed;
  top: 30%;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 80%;
    left: 10%;
  }
`;

const DialogBanner = styled.div`
  min-height: 120px;
  margin-bottom: 10px;
  ${({ img }) => `background-image: url(${img})`};
  background-color: #ff0038;
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px 0px;
`;

const DialogBannerName = styled.div`
  font-weight: 700;
  z-index: 9999;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  font-size: 20px;
  top: 75px;
  padding: 5px 10px;
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 60px;
  max-height: 500px;
  padding: 40px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 8px;
  width: 200px;
  cursor: pointer;
  background-color: ${Red};
  text-align: center;
  padding: 10px;
  &:hover {
    opacity: 0.8;
    color: darkgray;
  }
  &:active {
    opacity: 1;
  }
`;

/* ${above.med`
  background-color: blue;
  `} */

const FoodDetailContainer = () => {
  const dispatch = useDispatch();
  let { food } = useSelector((state) => state.selectedFood);

  const handlerClose = () => {
    dispatch(selectFood());
  };

  const addToOrder = () => {
    dispatch(addItem(food));
    handlerClose();
  };
  return (
    <>
      <DialogShadow onClick={handlerClose} />
      <Dialog>
        <DialogBanner img={food.img}>
          <DialogBannerName>{food.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <p>{food.description}</p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Agregar: {formatPrice(food.price)}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const FoodDetail = () => {
  let { food } = useSelector((state) => state.selectedFood);
  if (!food) {
    return null;
  }
  return <FoodDetailContainer />;
};
