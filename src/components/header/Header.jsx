// import PropTypes from 'prop-types';
import styles from './header.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { Switch } from '@material-ui/core';
import SearchBar from './SearchBar';
import { useState } from 'react';
import MenuOptions from '../menu/MenuOptions';
import { AnimatePresence, AnimateSharedLayout, motion, useCycle } from 'framer-motion';
import LoginModal from '../login/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/userService';
import useThemify from '../themify/useThemify';

function Header({ setResultsList }) {
  const [setTheme] = useThemify('green');
  const [currentTheme, toggleTheme] = useCycle('gold', 'green');
  const { user } = useSelector((state) => state.user);
  const [open, toggleOpen] = useCycle(false, true);
  const [show, setShow] = useCycle(false, true);
  const [checked, setChecked] = useState(false);
  const [modal, toggleModal] = useCycle(false, true);
  const dispatch = useDispatch();

  const handleSwitch = () => {
    setChecked(!checked);
    toggleTheme();
    setTheme(currentTheme);
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <GiHamburgerMenu
          onClick={toggleOpen}
          style={{ color: open ? 'red' : 'white', transform: 'scale(1.5)' }}
        />
        <AnimatePresence>
          {open && <MenuOptions toggleMenu={toggleOpen} />}
        </AnimatePresence>
        <SearchBar setResultsList={setResultsList} />
      </div>

      <AnimateSharedLayout>
        <motion.div layout className={styles.innerContainer}>
          <Switch checked={checked} onChange={() => handleSwitch()} />
          <motion.div whileHover={{ scale: 1.3 }} onClick={setShow}>
            {user ? (
              <img
                style={{ borderRadius: '50%', width: '30px', height: '30px' }}
                src={user.avatarUrl}
                alt='avatar'
              />
            ) : (
              <CgProfile style={{ transform: 'scale(2)' }} />
            )}
          </motion.div>
          {show && (
            <motion.div
              className={styles.loginBtn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <button type="button" onClick={user ? handleLogout : toggleModal}>
                {user ? 'Logout' : 'Login'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimateSharedLayout>
      {modal && <LoginModal toggleModal={toggleModal} />}
    </nav>
  );
}

Header.propTypes = {};

export default Header;
