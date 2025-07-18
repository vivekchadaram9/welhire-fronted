import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducer/authSlice';
import interviewReducer from '../features/QuestionSettings/reducer/interviewSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    interview: interviewReducer,
  },
});

export default store;
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
