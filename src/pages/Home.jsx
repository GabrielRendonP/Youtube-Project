import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Gallery from '../components/gallery/Gallery';
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import Layout from '../layouts/Layout';
import styles from './home.module.scss';

function Home(props) {
  const [resultsList, setResultsList] = useState([]);
  const {videos, loading, error} = useSelector((state) => state.video)
  return (
    <Layout>
      <div className={styles.container}>
        <Header setResultsList={setResultsList} />
        <h1> Welcome to my app </h1>
        <Loader loading={loading}>
          <Gallery resultsList={videos} />
        </Loader>
      </div>
    </Layout>
  );
}

export default Home;
