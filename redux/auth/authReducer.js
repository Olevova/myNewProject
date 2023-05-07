import { createSlice } from "@reduxjs/toolkit";
// import { authSignInState } from './authReducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    login: null,
    stateChange: false,
  },
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login
      
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange
    }), 
    authSignOut: () => ({
        userId: null,
        login: null,
        stateChange: false
      }
    )
    
  }
});