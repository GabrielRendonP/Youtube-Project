import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDataFecth } from '../hooks/useDataFetch';
import styles from './header.module.scss';

function SearchBar({setResultsList}) {
  const [data, fetchData] = useDataFecth();
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (input) => {
    setSearchInput(input.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const options=
      {
        part: 'snippet',
        q: `${searchInput}`,
        key: process.env.REACT_APP_YOUTUBE_APY_KEY,
        maxResults: '4',
      }

    fetchData('https://youtube.googleapis.com/youtube/v3/search', options)
    setSearchInput('');
  };

  useEffect(() => {
    setResultsList(data)
  }, [data])
  

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
