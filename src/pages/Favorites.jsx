import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import { useSelector } from 'react-redux';
import Item from '../components/item/Item';

function Favorites() {
  const { favoriteVideos } = useSelector((state) => state.video);

  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center', color: 'var(--color5)'}}> Favorite videos! </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {favoriteVideos.map((video) => {
          return (
            <Item
              key={video.videoId}
              description={video.description}
              title={video.title}
              thumbnails={video.thumbnails}
              videoId={video.videoId}
            />
          );
        })}
      </div>
    </div>
  );
}

Favorites.propTypes = {};

export default Favorites;
