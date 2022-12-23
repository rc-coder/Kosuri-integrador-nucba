import styled from 'styled-components';
import banner from '../../assets/banner-background.jpg';

export const Banner = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  filter: contrast(80%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  padding: 60px 10px 0px 10px;
`;
