import React from 'react';

import './styles.css'

const ComponentTest = () => {
  return <section className='circle relative w-[28rem] h-[28rem] mx-auto my-20 transition-all duration-700 ease-in-out hover:w-[30rem] hover:h-[30rem] hover:rotate-90 group'>
  <section className='container w-56 h-56 bg-black absolute left-0 top-0 hover:scale-125 transition-all duration-600 ease-in-out text-white flex justify-center items-center'>
    <p className='group-hover:-rotate-90 transition-all ease-in-out duration-700 text-sm px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eius nam, corporis, similique esse quod, velit temporibus voluptatibus illo pariatur dolore excepturi! Sit, odio eum alias blanditiis hic ipsa veritatis.</p>
    <section className='w-[28rem] h-[28rem] absolute left-0 top-0'>
      <img className=' w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-700' src="https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/1.JPG" alt="" />
    </section>
  </section>
  <section className='container2 w-56 h-56 bg-black absolute right-0 top-0 hover:scale-125 transition-all duration-600 ease-in-out  text-white flex justify-center items-center'>
  <p className='group-hover:-rotate-90 transition-all ease-in-out duration-700 text-sm px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eius nam, corporis, similique esse quod, velit temporibus voluptatibus illo pariatur dolore excepturi! Sit, odio eum alias blanditiis hic ipsa veritatis.</p>
    <section className='w-[28rem] h-[28rem] absolute right-0 top-0'>
      <img className='w-full h-full object-cover opacity-100  group-hover:opacity-0 transition-all ease-in-out duration-700' src="https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/1.JPG" alt="" />
    </section>
  </section>
  <section className='container3 w-56 h-56 bg-black absolute left-0 bottom-0 hover:scale-125 transition-all duration-600 ease-in-out text-white flex justify-center items-center'>
  <p className='group-hover:-rotate-90 transition-all ease-in-out duration-700 text-sm px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eius nam, corporis, similique esse quod, velit temporibus voluptatibus illo pariatur dolore excepturi! Sit, odio eum alias blanditiis hic ipsa veritatis.</p>
    <section className='w-[28rem] h-[28rem] absolute left-0 bottom-0'>
      <img className='w-full h-full object-cover opacity-100  group-hover:opacity-0 transition-all ease-in-out duration-700' src="https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/1.JPG" alt="" />
    </section>
  </section>
  <section className='container4 w-56 h-56 bg-black absolute right-0 bottom-0 hover:scale-125 transition-all duration-600 ease-in-out text-white flex justify-center items-center'>
  <p className='group-hover:-rotate-90 transition-all ease-in-out duration-700 text-sm px-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eius nam, corporis, similique esse quod, velit temporibus voluptatibus illo pariatur dolore excepturi! Sit, odio eum alias blanditiis hic ipsa veritatis.</p>
    <section className='w-[28rem] h-[28rem] absolute right-0 bottom-0'>
      <img className='w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-700' src="https://fundacionrh.vercel.app/images/sala_de_prensa/laguna_de_sonso/1.JPG" alt="" />
    </section>
  </section>
  </section>
}

export default ComponentTest;