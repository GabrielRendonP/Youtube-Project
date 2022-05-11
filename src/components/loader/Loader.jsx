import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './loader.module.scss';

const ballVariants = {
  animate: {
    rotate: 360,
    borderRadius: ['0%', '100%', '0%'],
    margin: [10, 50],
    width: 50,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const cont = {
  animate: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
    },
  },
};

const balls = [1, 2, 3, 4];

function Loader() {
  const createBalls = () =>
    balls.map((b, index) => {
      return (
        <motion.div
          key={index + b}
          className={styles.ball}
          variants={ballVariants}
          animate="animate"
        />
      );
    });

  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <motion.div
        style={{
          backgroundColor: 'black',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
        variants={cont}
        animate="animate"
      >
        {createBalls()}
      </motion.div>
    </motion.div>
  );
}
Loader.propTypes = {};
export default Loader;
