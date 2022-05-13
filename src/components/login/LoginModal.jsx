import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiCloseCircleLine } from 'react-icons/ri';
import { login } from '../../redux/userService';
import styles from './login.module.scss';

const variants = {
  initial: { y: -100, opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function LoginModal({ toggleModal }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    toggleModal();
  };

  const userHandler = (username) => {
    setUsername(username.target.value);
  };

  const passwordHandler = (password) => {
    setPassword(password.target.value);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.overlay}
    >
      <RiCloseCircleLine className={styles.close} onClick={toggleModal} />
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <label>
            Username:
            <input onChange={userHandler} type="text" name="username" />
          </label>
          <label>
            Password:
            <input onChange={passwordHandler} type="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </motion.div>
  );
}
LoginModal.propTypes = {};
export default LoginModal;
