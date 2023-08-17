import React from 'react';
import Banner from '../assets/pic1.jpg';

const Hero = () => {


  
  return (
   
    <div className="  py-3 w-full relative h-600px">
        <div className=''> <img src={Banner} alt="" className='w-full md:h-[500px]' /></div>
        <div className='absolute bottom-5 px-4 py-3 bg-marian/50 w-full'>
            <h1 className='text-xan  md:text-6xl text-2xl font-bold uppercase'>2023 Annual Corporate Governance Conference </h1>
        </div>
        
       
    </div>
  );
};

export default Hero;
