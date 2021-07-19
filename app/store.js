import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/reducers/loginslice';

export default configureStore({
  reducer: {
    counter: loginReducer,
  },
});
