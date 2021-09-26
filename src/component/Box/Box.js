import React, { useEffect, useState } from 'react';
import 
const Box = () => {
    const [series , setSeries] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
         .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Box;