import React from 'react';
import Tile from './tile';
import './style.css'

const Grid = ({data, title}) => {
    return (
        <div className="grid-container">
            <span className='title'>
                {title}
            </span>
            <div className='grid'>
                {data.map(item =>
                    <Tile src={item.img} title={item.title} location={item.location}/>
            )}  
            </div>
        </div>
    );
}


export default Grid;