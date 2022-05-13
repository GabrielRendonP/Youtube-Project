/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import styles from './item.module.scss';
import { BiBookmarkHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux/videoSlice';
import { motion } from 'framer-motion';

function Item({ videoId, title, description, thumbnails }) {
  const { favoriteVideos } = useSelector((state) => state.video);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const isFavorite = (id) => {
    return favoriteVideos.find((video) => video.videoId === id);
  };

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{scale: 0.99}} className={styles.video}>
        <Link to={`videos/${videoId}`} key={videoId}>
          <h2> {title} </h2>
          <p> {description} </p>
          <img src={thumbnails.medium.url} />
        </Link>
        {!isFavorite(videoId) && user && (
          <motion.div className={styles.favorite}>
            <BiBookmarkHeart
              className={styles.icon}
              onClick={() =>
                dispatch(addToFavorites({ videoId, title, description, thumbnails }))
              }
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
Item.propTypes = {};
export default Item;
