import React from 'react';
import './style.css'

const Tile = ({ src, title, location }) => {
  return (
    <div className='tile'>
        <img src={src} alt={title} />
        <div className='tile-text'>
          <p>{title}</p>
          <p>
            <span className='location'></span>{location}
          </p>
        </div>
    </div>
  );
}


export default Tile;