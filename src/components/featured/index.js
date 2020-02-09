import React, { useState, useEffect} from 'react';
import Api from '../../services/Api';
import Grid from '../grid';

const Featured = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Api.getFeatured();  
            const json = await response.json();
            setData(json.data);
          };
        fetchData();
    }, []);  

    return (
        <Grid data={data} title='Featured'/>
    );
}


export default Featured;