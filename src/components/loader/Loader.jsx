import { AnimatePresence, motion } from 'framer-motion';
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

function Loader({ children, loading }) {
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
    <AnimatePresence initial exitBeforeEnter>
      {loading ? (
        <motion.div
          key='balls'
          initial={{opacity: 0}}
          animate= {{opacity: 1}}
          exit={{opacity: 0}}
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
      ) : (
        <motion.div
          key='children'
          initial={{opacity: 0, rotateX: 100}}
          animate={{opacity: 1, rotateX: 0}}
          exit={{opacity: 0}}
        >{ children }
        </motion.div>
      )}
    </AnimatePresence>
  );
}
Loader.propTypes = {};
export default Loader;
