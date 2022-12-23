import { menuItems } from '../../../data/data';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: menuItems,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
