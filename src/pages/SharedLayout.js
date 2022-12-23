import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Order } from '../components/Order/Order';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Order />
      <Outlet />
    </>
  );
};

export default SharedLayout;
