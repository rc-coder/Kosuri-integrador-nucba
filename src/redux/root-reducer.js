import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './features/products/productsSlice';
import selectedFoodReducer from './features/selectedFood/selectedFoodSlice';
import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import ordersReducer from './features/orders/ordersSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  //Modificar el whitelist
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  selectedFood: selectedFoodReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
