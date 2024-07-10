import React from 'react';

function Home() {
  return (
    <div className=" p-5 flex space-x-3 flex-row  ">
      <div className="flex-1 p-4 bg-green-400 text-center transition-all duration-500 ease-in-out hover:flex-grow-[10] ">
        Home1
      </div>
      <div className="flex-1 p-4 h-1/4 bg-blue-400 text-center transition-all duration-500 ease-in-out hover:flex-grow-[10] w-10 ">
        Home2
      </div>
    </div>
  );
}

export default Home;
