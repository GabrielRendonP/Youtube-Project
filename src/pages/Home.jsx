import PropTypes from 'prop-types';
import { useState } from 'react';
import Gallery from '../components/gallery/Gallery';
import Header from '../components/header/Header';
import Layout from '../layouts/Layout';
import styles from './home.module.scss';

function Home(props) {
  const [resultsList, setResultsList] = useState([]);
  return (
    <Layout>
      <div className={styles.container}>
        <Header setResultsList={setResultsList} />
        <h1> Welcome to my app </h1>
        <Gallery resultsList={resultsList} />
      </div>
    </Layout>
  );
}

export default Home;
