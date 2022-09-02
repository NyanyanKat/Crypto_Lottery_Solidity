import { useMetamask } from "@thirdweb-dev/react";
import React from "react";

const Login = () => {
  // Login with Metamask
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full mb-10"
          // className="rounded-full h-56 w-56 mb-10" 
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold">THE JIMMY DRAW</h1>
        <h2 className="text-white">
          Get started by logging in with your Metamask
        </h2>

        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
};

export default Login;
