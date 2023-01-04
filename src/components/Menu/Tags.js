import styled from 'styled-components';
import { backgroundGray } from '../../Styles/utilities';

// styled(ScrollContainer)

export const TagsMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
  margin: 20px 0;
  padding: 10px 0;
  overflow-x: hidden;
  margin: 20px 0;
  padding: 10px 0;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`;

export const TagCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ selected }) => (selected ? '#e8e8e8' : '#fff')};
  /* color: ${(props) => props.theme.gray}; */
  color: ${backgroundGray};
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.09);
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    background: #e8e8e8;
    box-shadow: none;
  }
  width: 60px;
`;

export const TagImg = styled.div`
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: 60px;
  height: 60px;
  /* margin-right: 20px; */
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
