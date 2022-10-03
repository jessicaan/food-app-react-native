import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    adress: null,
    short_description: null,
    dishes: null,

  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
      },
    }
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
