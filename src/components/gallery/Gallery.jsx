import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';
import styles from './content.module.scss';
import Item from '../item/Item';

function Gallery({ resultsList }) {
  return (
    <div className={styles.container}>
      {resultsList?.length > 0 &&
        resultsList.map(
          ({
            id: { videoId },
            snippet: { channelTitle, description, thumbnails },
          }) => {
            return (
              <Link to={`videos/${videoId}`} key={videoId}>
                <Item
                  key={videoId}
                  title={channelTitle}
                  description={description}
                  thumbnails={thumbnails}
                />
              </Link>
            );
          }
        )}
      <Outlet />
    </div>
  );
}

Gallery.propTypes = {};

export default Gallery;
