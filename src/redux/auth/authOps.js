import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setUser, setToken, setRefreshing, logout} from "./authSlice";
import { set } from "react-hook-form";


const BASE_URL = "https://connections-api.goit.global";

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI)=>{
    try {
        const response = await axios.post(`&{BASE_URL}/users/signup`, userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async(userData,
    thunkAPI)=>{
        try {
            const response = await axios.post(`&{BASE_URL}/users/login`, userData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk("auth/logout", async(_,
thunkAPI)=>{
    try {
        await axios.post(`&{BASE_URL}/users/logout`);
        return null;        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
)

export const refreshUser = createAsyncThunk("auth/refresh", async(_,
    thunkAPI)=>{
        const token = thunkAPI.getState().auth.token;
        if(!token) return;
        thunkAPI.dispatch(setRefreshing(true));
        try {
            const response = await axios.get(`&{BASE_URL}/users/current`);
            thunkAPI.dispatch(setUser(response.data));
            return response.data;        
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        finally{
            thunkAPI.dispatch(setRefreshing(false));
        }
    }
    );
