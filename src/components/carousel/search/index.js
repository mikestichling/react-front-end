import React from 'react';
import './style.css';

const Search = ({inputChangedHandler}) => {
    return (
        <input
            type='text'
            name='search'
            placeholder='Search for...'
            autoComplete='off'
            onChange={inputChangedHandler}
        />
    );
}


export default Search;