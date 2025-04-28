import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';

const store = configureStore({
  reducer: rootReducer,
});

//định nghĩa kiểu Appdispatch và RootState cho store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
