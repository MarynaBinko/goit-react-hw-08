import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global/contacts';

// Utility to set and clear JWT token in Axios headers
const setAuthHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

// Async thunk to fetch contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
    
      const state = thunkAPI.getState();
      const token = state.auth.token;

    
      setAuthHeader(token);
      console.log('Fetching contacts with token:', token);


      const response = await axios.get(BASE_URL);
      console.log('Contacts response:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to add a new contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // Retrieve token from state or storage
      const state = thunkAPI.getState();
      const token = state.auth.token;

     
      setAuthHeader(token);

     
      const response = await axios.post(BASE_URL, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to delete a contact by ID
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      // Retrieve token from state or storage
      const state = thunkAPI.getState();
      const token = state.auth.token;

    
      setAuthHeader(token);

   
      await axios.delete(`${BASE_URL}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Utility thunk to handle logging out and clearing token
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
 
    clearAuthHeader();
    
  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

