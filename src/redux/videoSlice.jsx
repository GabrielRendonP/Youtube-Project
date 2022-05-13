import { createSlice } from '@reduxjs/toolkit'
import { fetchVideos, fetchVideoInfo, fetchRelatedVideos } from './videoService';

const initialState = {
  videos: null,
  relatedVideos: null,
  currentVideo: null,
  favoriteVideos: null,
  loading: true,
  infoLoading: true,
  loadingPlaylist: true,
  error: null,  
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchVideos.pending]: (state) => {
      state.loading = true;
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.loading = false;
      state.videos = action.payload.items;
      state.error = null
    },
    [fetchVideos.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchVideoInfo.pending]: (state) => {
      state.infoLoading = true;
    },
    [fetchVideoInfo.fulfilled]: (state, action) => {
      state.infoLoading = false;
      state.currentVideo = action.payload.items[0]
      state.error = null 
    },
    [fetchVideoInfo.rejected]: (state, action) => {
      state.infoLoading = false
      state.error = action.error
    },
    [fetchRelatedVideos.pending]: (state) => {
      state.loadingPlaylist = true;
    },
    [fetchRelatedVideos.fulfilled]: (state, action) => {
      state.loadingPlaylist = false;
      state.relatedVideos = action.payload.items.filter((item) => item.snippet !== undefined )
      state.error = null 
    },
    [fetchRelatedVideos.rejected]: (state, action) => {
      state.loadingPlaylist = false
      state.error = action.error
    },
  },
});

// export const {} = videoSlice.actions

export default videoSlice.reducer