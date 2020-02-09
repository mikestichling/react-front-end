import React, { useState, useEffect} from 'react';
import Api from '../../services/Api';
import Grid from '../grid';
import Search from './search';

import './style.css';


const PAGE_SIZE = 4;

const filterData = (data, filter) => {
    return data.filter(function(item){
        return filter == null || filter === '' || item.title.toLowerCase().includes(filter.trim().toLowerCase())
    });
}

const sliceData = (data, index) => {
    return data.slice(index, index + PAGE_SIZE);
}

const Carousel = () => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [filterString, setFilterString] = useState(null);

    const left = () => {
        var newIndex = index - 1;
        if (newIndex >= 0 && newIndex <= filterData(data, filterString).length)
        {
            setIndex(newIndex);
        }
        else
        {
            setIndex(0);
        }
    }
    
    const right = () => {
        var newIndex = index + 1;
        if (newIndex >= 0 && newIndex + PAGE_SIZE <= filterData(data, filterString).length)
        {
            setIndex(newIndex);
        }
        else
        {
            setIndex(filterData(data, filterString).length - PAGE_SIZE);
        }
    }

    const updateFilterString = (e) => {
        setIndex(0);
        setFilterString(e.target.value);
    }

    useEffect(async () => {      
        const response = await Api.getCarousel();
        const json = await response.json();
        setData(json.data);
    }, []);  
    
    return (
        <div className='carousel'>
            <Search inputChangedHandler={(e) => updateFilterString(e)}></Search>
            <Grid data={sliceData(filterData(data, filterString), index)} title='Popular Around you'/>
            <div className='carousel-button-container'>
                <div className='left carousel-button' onClick={left}></div>
            </div>
            
            <div className='carousel-button-container pull-right'>
                <div className='right carousel-button' onClick={right}></div>
            </div>
        </div>
    );
}

export default Carousel;