import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
