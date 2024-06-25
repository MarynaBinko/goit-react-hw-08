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
      // Retrieve token from state or storage
      const state = thunkAPI.getState();
      const token = state.auth.token;

      // Set token in headers
      setAuthHeader(token);
      console.log('Fetching contacts with token:', token);

      // Make GET request to fetch contacts
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

      // Set token in headers
      setAuthHeader(token);

      // Make POST request to add contact
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

      // Set token in headers
      setAuthHeader(token);

      // Make DELETE request to delete contact
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
    // Clear token in headers
    clearAuthHeader();
    
    // Perform any other logout operations as needed
    // For example, clearing token in local storage or state
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// const BASE_URL = 'https://connections-api.goit.global/contacts';

// // GET @ /contacts
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(BASE_URL);
//       return res.data;     
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /contacts
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post(BASE_URL, contact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // DELETE @ /contacts/:id
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       await axios.delete(`${BASE_URL}/${contactId}`);
//       return contactId;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
