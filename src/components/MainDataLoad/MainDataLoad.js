import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './MainDataLoad.css'
 

const MainDataLoad = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect( () =>{
         fetch("data2.json")
        .then(res => res.json())
        .then(data => setVolunteers(data));
    } , []) 
    
   
    return (
        <div>
          
            <h1>Vlounteer Activities: {volunteers.length}</h1>
          <div className='container'>
          {
                volunteers.map(activity => <Activity
                  key={activity._id}
                  activity={activity}
                ></Activity>)
            }
          </div>
        </div>
    );
};

export default MainDataLoad;