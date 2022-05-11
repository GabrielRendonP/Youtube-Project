import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDataFecth } from '../hooks/useDataFetch';
import { AiFillLike } from 'react-icons/ai';
import { GrOverview } from 'react-icons/gr';
import styles from './video.module.scss';
import Loader from '../loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1,
    transition: {
      duration: 2,
    },
  },
  exit: { opacity: 0,
    transition: {
      duration: 2,
    },
  },
}

function Video({ videoId }) {
  const [data, fetchData, isReady] = useDataFecth();

  useEffect(() => {
    console.log('re render');
    const options = {
      id: `${videoId}`,
      key: process.env.REACT_APP_YOUTUBE_APY_KEY,
      part: 'snippet, statistics',
    };

    fetchData('https://youtube.googleapis.com/youtube/v3/videos', options);
  }, [videoId]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isReady ? (
          <motion.div 
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          className={styles.container}>
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
            {console.log(data)}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>
                <AiFillLike /> <span> Likes: {data[0].statistics.likeCount}</span>{' '}
              </div>
              <div>
                <GrOverview /> <span> Views: {data[0].statistics.viewCount}</span>{' '}
              </div>
            </div>
            <div>{data[0].snippet.description}</div>
          </motion.div>
        ) : (
          <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          >

            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

Video.propTypes = {};

export default Video;
