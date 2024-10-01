"use client"

import React, { useState } from 'react';

import './styles.css'

const data = [
  <img src='https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/1.JPG'/>,
  <img src='https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/2.JPG'/>,
  <img src='https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/3.JPG'/>,
  <img src='https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/4.JPG'/>
]

const Component = () => {
  const [selected, setSelected] = useState(0);
  return <section className='relative w-full h-96 flex justify-center overflow-hidden'>
    <span onClick={() => setSelected(selected-1)} className='absolute left-4 top-1/2 text-black w-min h-min z-10 bg-white'>Back</span>
    <span onClick={() => setSelected(selected+1)} className='absolute right-4 top-1/2 text-black w-min h-min z-10 bg-white'>Next</span>
    
      {
        data.map((item, index) => <section key={index}
        className={`container  w-96 aspect-square transition-all ease-in-out duration-500 absolute top-0 overflow-hidden ${selected === index ? '' : ' opacity-0 -rotate-90'}`}>
          {item}</section>)
      }
    
  </section>;
}

export default Component;