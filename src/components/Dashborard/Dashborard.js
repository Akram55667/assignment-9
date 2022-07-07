import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import PieChart from "../PieChart/MyPieChart";

const Dashborard = () => {
  return (
    <div className="flex mt-20 justify-center ">
       
     <div>
     <MyLineChart></MyLineChart>
     </div>
       
      
      <div>
      <PieChart></PieChart>
      </div>
       

      
    </div>
     
  );
};

export default Dashborard;
