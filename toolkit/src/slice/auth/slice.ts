import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {InitialAuthState, User} from './type';

const initialState: InitialAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authoriztion(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export default authSlice.reducer;

export const {authoriztion, logout} = authSlice.actions;
