import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GrOverview } from 'react-icons/gr';
import styles from './video.module.scss';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoInfo } from '../../redux/videoService';
import Loader from '../loader/Loader';

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
};

function Video({ videoId }) {
  const dispatch = useDispatch();

  const { currentVideo, infoLoading, error } = useSelector((state) => state.video);

  useEffect(() => {
    dispatch(fetchVideoInfo(videoId));
  }, [videoId]);

  return (
    <>
      <Loader loading={infoLoading}>
        {currentVideo && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={styles.container}
          >
            <iframe
              title={videoId}
              width="100%"
              height="100%"
              src={`//www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              allow={
                'accelerometer; autoplay; clipboard-write;' +
                'encrypted-media; gyroscope; picture-in-picture'
              }
            />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>
                <AiFillLike /> <span> Likes: {currentVideo.statistics.likeCount}</span>{' '}
              </div>
              <div>
                <GrOverview /> <span> Views: {currentVideo.statistics.viewCount}</span>{' '}
              </div>
            </div>
            <div>{currentVideo.snippet.description}</div>
          </motion.div>
        )}
      </Loader>
    </>
  );
}

Video.propTypes = {};

export default Video;
