import { configureStore } from '@reduxjs/toolkit';
import VideoReducer from './videoSlice';
import UserReducer from './userSlice';

export default configureStore({
  reducer: {
    video: VideoReducer,
    user: UserReducer,
  },
});
