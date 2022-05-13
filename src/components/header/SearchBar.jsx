// import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../redux/videoService';
import styles from './header.module.scss';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (input) => {
    setSearchInput(input.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(fetchVideos(searchInput))
    setSearchInput('');
  };

  return (
    <div className={styles.searchBar}>
      <BiSearch />
      <form onSubmit={submitHandler}>
        <input type="text" value={searchInput} onChange={inputHandler} />
      </form>
    </div>
  );
}

SearchBar.propTypes = {};
export default SearchBar;
