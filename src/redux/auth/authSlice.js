import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        name: null,
        email:null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
        },
        setToken: (state, action)=>{
            state.token = action.payload;
        },
        setRefreshing: (state, action)=>{
           state.isRefreshing = action.payload;
        },
        logout: (state)=>{
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },
    },
});


export const { setUser, setToken, setRefreshing, logout} = authSlice.actions;
export const selectUser = (state)=> state.auth.user;
export const selectToken = (state)=> state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;