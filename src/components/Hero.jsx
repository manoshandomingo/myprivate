import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <div className="bg-orange-100 border h-[70vh] p-8 flex flex-col mx-auto md:flex-row">
      <div className="pb-10">
        <img
          className="w-[50vw] h-auto md:w-[25vw] rounded-full mx-auto border-4 border-white"
          src="/images/ManoshanDom.png"
        ></img>
      </div>
      <div className="flex flex-col mx-auto items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl pb-6 text-center">
          {title}
        </h1>
        <p className="text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
