// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Gallery from '../components/gallery/Gallery';
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import Layout from '../layouts/Layout';
import styles from './home.module.scss';

function Home() {
  const {videos, loading} = useSelector((state) => state.video)
  return (
    <Layout>
      <div className={styles.container}>
        <Header />
        {!videos && <h1> Welcome to my app </h1>}
        <Loader loading={loading}>
          <Gallery resultsList={videos} />
        </Loader>
      </div>
    </Layout>
  );
}

export default Home;
