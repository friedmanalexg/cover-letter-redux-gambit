import { configureStore } from '@reduxjs/toolkit';
import letterReducer from '../features/letterSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    letter: letterReducer
  }
})

export default store;
