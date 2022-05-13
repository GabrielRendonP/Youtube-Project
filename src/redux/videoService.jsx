import { createAsyncThunk } from '@reduxjs/toolkit';
import { youtubeEndpoint } from '../shared/common';
import axios from 'axios';

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async (searchParam) => {
  const options = {
    part: 'snippet',
    q: `${searchParam}`,
    key: process.env.REACT_APP_YOUTUBE_APY_KEY,
    maxResults: 8,
  };
  const { data: response } = await axios.get(`${youtubeEndpoint}/search`, {
    params: options,
  });
  return response;
});

export const fetchVideoInfo = createAsyncThunk(
  'videos/fetchVideoInfo',
  async (videoId) => {
    const options = {
      id: `${videoId}`,
      key: process.env.REACT_APP_YOUTUBE_APY_KEY,
      part: 'snippet, statistics',
    };

    const { data: response } = await axios.get(`${youtubeEndpoint}/videos`, {
      params: options,
    });
    return response;
  }
);

export const fetchRelatedVideos = createAsyncThunk(
  'videos/fetchRelatedVideos',
  async (videoId) => {
    const options = {
      part: 'snippet',
      relatedToVideoId: `${videoId}`,
      type: 'video',
      maxResults: 4,
      key: process.env.REACT_APP_YOUTUBE_APY_KEY,
    };

    const { data: response } = await axios.get(`${youtubeEndpoint}/search`, {
      params: options,
    });

    return response;
  }
);
