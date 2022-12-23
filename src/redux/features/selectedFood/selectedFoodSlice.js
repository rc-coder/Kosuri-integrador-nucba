import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  food: null,
};

const selectedFoodSlice = createSlice({
  name: 'selectedFood',
  initialState,
  reducers: {
    selectFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const { selectFood } = selectedFoodSlice.actions;
export default selectedFoodSlice.reducer;
