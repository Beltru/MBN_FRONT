"use client"

import { transform } from 'next/dist/build/swc';
import React from 'react';
import { useState, useEffect } from 'react';

const ScrollCards = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 300) {
        setActiveCard(1);
      } else if (scrollPosition >= 300 && scrollPosition < 600) {
        setActiveCard(2);
      } else if (scrollPosition >= 600) {
        setActiveCard(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='relative h-[100vh] overflow-hidden'>
        <div className={`${activeCard === 1 ? "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-[16vw]" : 'hidden'}`}>
            <aside className="row-span-3 col-span-1 bg-black rounded-2xl flex items-center justify-center ">
                
            </aside>
        </div>
        <div className={`${activeCard === 2 ? "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-[16vw]" : 'hidden'}`}>
            <aside className="row-span-3 col-span-1 bg-black rounded-2xl flex items-center justify-center">
                
            </aside>
        </div>
        <div className={`${activeCard === 3 ? "fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 grid grid-rows-3 grid-cols-2 h-[100vh] w-[100vw] pl-[6vw] py-[8vh] pb-[16vh] gap-[16vw]" : 'hidden'}`}>
            <aside className="row-span-3 col-span-1 bg-black rounded-2xl flex items-center justify-center">
                
            </aside>
        </div>
    </section>
  );
};

export default ScrollCards;