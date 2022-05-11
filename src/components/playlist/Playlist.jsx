import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDataFecth } from '../hooks/useDataFetch';
import styles from './playlist.module.scss';
import { Link } from 'react-router-dom';

function Playlist({ videoId }) {
  const [data, fetchData, isReady] = useDataFecth();

  useEffect(() => {
    const options = {
      part: 'snippet',
      relatedToVideoId: `${videoId}`,
      type: 'video',
      maxResults: 4,
      key: process.env.REACT_APP_YOUTUBE_APY_KEY,
    };

    fetchData('https://youtube.googleapis.com/youtube/v3/search', options);
  }, []);

  return (
    <div className={styles.container}>
      {isReady &&
        data.slice(1).map(
          ({
            id: { videoId },
            snippet: {
              thumbnails: { medium },
              title,
            },
          }) => {
            return (
              <Link to={{pathname:`/videos/${videoId}`}} key={videoId}>
                <div key={videoId}>
                  <img src={medium.url} alt="Video thumbnail" />
                  <p> {title} </p>
                </div>
              </Link>
            );
          }
        )}
    </div>
  );
}

Playlist.propTypes = {};

export default Playlist;
