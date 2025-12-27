import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowAltCircleDown } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2  flex mt-4 items-center'>

      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
        <p className='uppercase tracking-widest text-xl text-[#5651e5]'>About</p>
        <h2 className='py-4'>Who I am</h2>
        <p className='py-2 text-gray-600'>I am a passionate and skilled web developer with a strong foundation in React.js and Node.js. With a deep understanding of front-end and back-end technologies, I thrive in creating dynamic and user-friendly web applications. My journey into the world of web development has also led me to explore and delve into the realms of UX/UI design, allowing me to create seamless and visually appealing user experiences.</p>
        <p className='py-2 text-gray-600'>My dedication to crafting efficient and responsive web solutions is matched only by my commitment to staying up-to-date with the latest industry trends and best practices. As a proactive learner, I continuously seek to expand my skill set and adapt to the ever-evolving landscape of web development.</p>
       <Link href='/#projects'> <button className="font-bold text-sm w-[12rem] py-1.5 px-2 mt-4 mb-4 capitalize ease-in duration-300 hover:scale-105 text-gray-100 bg-[#5651e5] flex justify-center gap-2 items-center" >Checkout my projects <FaArrowAltCircleDown /></button>
       </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 items-center justify-center flex hover:scale-105 ease-in duration-300'>
          <Image className='rounded-lg' src="/assets/me.jpg" width="390" height="170" alt="" />
        </div>
      </div>
      

    </div>
  )
}

export default About
