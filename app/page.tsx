"use client";
import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  
  return (
    <div className="hero bg-white min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='max-w-sm'>
          <Image
            src="/cards.svg" 
            alt="hero image"
            width={1019.09}
            height={897.62}
          />
        </div>
        
        <div className='lg:mr-20'>
          <h1 className=" text-5xl font-bold">Master Anything with <br/>Flashcards</h1>
          <p className="max-w-3xl py-6">
          Unlock your learning potential with customizable flashcards. Whether you&apos;re studying for exams, learning a new language, or enhancing your skills, our tool helps you retain knowledge more effectively and efficiently.
           
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

const IconGrid = () => {
  return (
    <div className="bg-gray-400 flex justify-center space-x-48 py-2">
      <div className="text-center">
        
        <p className="mt-2">lavet af/Made by Soufiane Zaydi</p>
      </div>
      
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <HeroSection />
      <IconGrid/>
    </div>
  );
};

export default Page;
