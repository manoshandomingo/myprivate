import React from 'react';

const Hero = () => {
  return (
    <div className="bg-orange-100 border h-[70vh] p-8 flex flex-col mx-auto md:flex-row">
      <div>
        <img
          className="w-[50vw] h-auto md:w-[25vw] rounded-full mx-auto border-4 border-white"
          src="/images/ManoshanDom.png"
        ></img>
      </div>
      <div className="mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          Hi, I am Manoshan Domingo
        </h1>
      </div>
    </div>
  );
};

export default Hero;
