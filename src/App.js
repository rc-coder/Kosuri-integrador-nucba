import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import { GlobalStyle } from './Styles/GlobalStyle';
import Login from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileDoc } from './Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = await createUserProfileDoc(user);
      onSnapshot(userRef, (snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, setCurrentUser);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute user={currentUser}>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/ordenes-historial" element={<Orders />}></Route>
          <Route
            path="/ordenes-historial/:orderId"
            element={<OrderDetail />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
