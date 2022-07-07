import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {title, name, img} = activity
    return (
       <div>
         <div className='cartStyle'>
            <img src= {img} alt="" />
            <h1 className='text-2xl'>Name: {name}</h1>
            <h5 className='  '>Title: {title}</h5>
        </div>
        <div>

        </div>
       </div>
    );
};

export default Activity;