import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './options.module.scss';

const container = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 1,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

const parent = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const children = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1,
  },
};

const overlayVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const MenuOptions = ({ toggleMenu }) => {
  const navigate = useNavigate()

  return (
    <>
      <motion.div
        variants={overlayVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className={styles.overlay}
        onClick={toggleMenu}
      />
      <motion.div
        className={styles.menuContainer}
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.ul
          variants={parent}
          initial="initial"
          animate="animate"
          exit="exit"

        >
          <motion.li
            key="option1"
            variants={children}
            style={{ backgroundColor: '#f94e90' }}
            onClick={() => {
              toggleMenu();
              navigate('/');
            }}
          >
          Home
          </motion.li>
          <motion.li
            key="option2"
            variants={children}
            style={{ backgroundColor: '#5687e3' }}
            onClick={() => {
              toggleMenu();
              navigate('/favorites');
            }}
          >
            Favorites
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};
export default MenuOptions;
