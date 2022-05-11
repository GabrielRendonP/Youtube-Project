import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import styles from './layout.module.scss';
import { motion } from 'framer-motion';

const variant = {
  initial: { opacity: 0, x: -200, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function Layout({ children }) {
  return (
    <motion.div
      className={styles.container}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variant}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
}

Layout.propTypes = {};

export default Layout;
