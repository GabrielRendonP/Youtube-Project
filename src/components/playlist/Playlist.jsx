import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDataFecth } from '../hooks/useDataFetch';
import styles from './playlist.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos, fetchVideoInfo } from '../../redux/videoService';

function Playlist({ videoId }) {
  const dispatch = useDispatch()
  const { relatedVideos, loadingPlaylist, error } = useSelector((state) => state.video)

  useEffect(() => {
    dispatch(fetchRelatedVideos(videoId))
  }, []);

  return (
    <div className={styles.container}>
      {!loadingPlaylist &&
        relatedVideos.map(
          ({
            id: { videoId },
            snippet: {
              thumbnails: { medium },
              title,
            },
          }) => {
            return (
              <Link className={styles.playListElement} 
              to={{pathname:`/videos/${videoId}`}} key={videoId}>
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
