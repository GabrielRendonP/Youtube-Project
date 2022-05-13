import { configureStore } from '@reduxjs/toolkit';
import VideoReducer from './videoSlice';

export default configureStore({
  reducer: {
    video: VideoReducer,
  },
});
