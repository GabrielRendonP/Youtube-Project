// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Playlist from '../components/playlist/Playlist';
import Video from '../components/video/Video';
import Layout from '../layouts/Layout';
import styles from './itemDescription.module.scss';

function ItemDescription() {
  const params = useParams();

  return (
    <Layout>
      <div className={styles.container}>
        <Header />
        <div className={styles.gridContainer}>
            <Video videoId={params.videoId} />
          <Playlist videoId={params.videoId} />
        </div>
      </div>
    </Layout>
  );
}
ItemDescription.propTypes = {};
export default ItemDescription;
