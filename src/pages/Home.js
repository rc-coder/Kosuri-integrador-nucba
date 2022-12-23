import { Banner, BannerImg } from '../components/Banner/Banner';
import kosuriLogo from '../assets/kosuri-sushi-y-cocina-oriental.png';
import { Menu } from '../components/Menu/Menu';
import { FoodDetail } from '../components/FoodDetail/FoodDetail';

const Home = () => {
  return (
    <>
      <FoodDetail />
      <Banner>
        <BannerImg src={kosuriLogo} />
      </Banner>
      <Menu />
    </>
  );
};

export default Home;
