import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-24"
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
          alt=""
        />
        <h1 className="text-lg text-white font-bold">Loading the Jimmy Draw</h1>
      </div>
      <PacmanLoader color="white" size={30} />
    </div>
  );
};

export default Loading;
