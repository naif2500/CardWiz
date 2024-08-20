"use client";
import React from 'react';
import CardSpread from '@/components/animata/card/card-spread';

const HeroSection = () => {
  
  return (
    <div className="hero bg-white min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='max-w-sm'>
          <CardSpread />
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

const Page = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Page;
