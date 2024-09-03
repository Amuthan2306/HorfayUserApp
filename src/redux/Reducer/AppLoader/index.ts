import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type AppLoader = {
  isLoading: boolean;
};

const initialState = {
  isLoading: false,
} as AppLoader;

const appLoader = createSlice({
  name: 'appLoader',
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.isLoading = action.payload;
    },

  },
});

export const {setAppLoader} = appLoader.actions;

export default appLoader.reducer;
