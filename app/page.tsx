'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="hero bg-white min-h-screen relative p-[20px]  box-border"> {/* Full viewport height with 20px padding */}
      <div className="hero-content  flex flex-col lg:flex-row lg:items-center lg: justify-between p-0 w-full h-full gap-0"> {/* Removed spacing between text and image */}

        {/* Left section: Text content */}
        <div className="lg:max-w-2xl h-full bg-[#7568AF] pl-10 p-[20px] rounded-tl-lg rounded-bl-lg z-10 flex flex-col justify-center ">
          <h1 className="text-6xl font-bold text-white leading-tight">
            Master Anything <br/> with Flashcards
          </h1>
          <p className="py-8 text-white text-lg">
            Unlock your learning potential with customizable flashcards. Whether you&apos;re studying for exams, learning a new language, or enhancing your skills, our tool helps you retain knowledge more effectively and efficiently.
          </p>
          <div className="flex space-x-2">
            <button className="btn bg-yellow-500 hover:bg-yellow-600 rounded-lg text-gray-600 font-semibold py-4 px-8  text-sm">
              <Link href="/login">Get Started</Link>
            </button>
            <button className="btn border-none bg-transparent text-white hover:text-yellow-300 underline font-semibold py-4 px-8  text-sm">
              <Link href="/learn-more">Learn More</Link>
            </button>
          </div>
        </div>

        {/* Right section: Image with gradient */}
        <div className="relative w-full lg:w-[50%] h-full ">
          <div className="relative w-full h-full ">
            <Image
              src="/image.png"  // Replace with the actual path to the image
              alt="Students studying"
              layout="fill"  // Ensures the image fills its container
              objectFit="cover"  // Ensures the image scales properly
              className="block rounded-tr-lg rounded-br-lg"
            />
            {/* Gradient overlay on the left 20% of the image */}
            <div
              className="absolute top-0 left-0 h-full"
              style={{
                width: '20%',
                background: 'linear-gradient(to right, #7568AF, transparent)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const IconGrid = () => {
  return (
    <div className="bg-gray-200 py-6 text-center">
      <p className="text-gray-700 font-semibold text-lg">
        Made by Soufiane Zaydi
      </p>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <HeroSection />
      <IconGrid />
    </div>
  );
};

export default Page;
