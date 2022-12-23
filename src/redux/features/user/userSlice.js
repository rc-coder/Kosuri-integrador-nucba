import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  hideMenu: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
      state.hideMenu = true;
    },
    toggleMenu: (state) => {
      state.hideMenu = !state.hideMenu;
    },
  },
});

export const { setCurrentUser, toggleMenu } = userSlice.actions;
export default userSlice.reducer;
