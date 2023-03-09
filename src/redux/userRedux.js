import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser : null,
    isFetching: false,
    isLoggedIn: false,
    error:false
  },
  reducers: {
      loginStart:(state)=>{
        state.isFetching=true
      },
      loginSucess:(state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload
        state.isLoggedIn = true 
      },
      loginFailure:(state)=>{
        state.isFetching = false;
        state.error = true;
      },
      logout: (state) => {
        state.isLoggedIn = false
        state.currentUser = null
      }
    },
  },
);

export const {loginStart,loginSucess,loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
