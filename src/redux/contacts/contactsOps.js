import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjUwMGJiNmQ1NzJiN2QzZGM2NTI2YWM2N2ZkYTU5YiIsInN1YiI6IjY2NWYwNDEwZjVlMjQwNDA4M2Y4NWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpdJQ_vH6ps7XHWmOcPLJobqrxzRtLJQalp-VcpJxdk';


export const fetchContacts =createAsyncThunk(
  "contacts/fetchAll",
  async(_,thunkAPI)=>{
    try {
      const response=await axios.get(`${BASE_URL}/contacts`, {
        headers: {
          Authorization: token, 
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async(contact,thunkAPI)=>{
    try {
      const response=await axios.post(`${BASE_URL}/contacts`, {
        headers: {
          Authorization: token, 
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);      
    }
  }
);

export const deleteContact=createAsyncThunk(
  "contacts/deleteContact",
  async(id,thunkAPI)=>{
    try {
      await axios.delete(`${BASE_URL}/contacts/${id}`, {
        headers: {
          Authorization: token, 
        },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)