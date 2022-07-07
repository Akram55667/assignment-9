import React from "react";

const Home = () => {
  return (
   <div>
     <div className="flex m-11 h-full">
      <div>
        <h1 className="text-5xl w-full">
          Your next phone
          <br /> <span className="text-blue-600">Your best phone</span>
        </h1>

        <p className="mt-6">
          Anim aute id magna aliqua ad ad non deserunt sunt.Qui irure qui lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          architecto possimus laudantium odio adipisci totam consectetur fugit
          accusamus saepe perspiciatis.
        </p>

        <button className=" mt-4 bg-red-200 border border-indigo-600 py-2 px-2 rounded-md ">
          Live demo
        </button>
      </div>
      <div className="h-full">
        <img
          src="https://media.4rgos.it/i/Argos/9520103_R_Z001A?w=1500&h=880&qlt=70&fmt=webp"
          alt=""
        />
      </div>
    </div>
    
     <div>
        <h3 className="text-4xl">Customer Reviews(3)</h3>
     </div>
   </div>


    

  );
};

export default Home;
