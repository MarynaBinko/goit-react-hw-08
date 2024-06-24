import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';


const middleware = (getDefaultMiddleware) => {
  return [
    ...getDefaultMiddleware(),
  ];
};

import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

export const persistor = persistStore(store);
