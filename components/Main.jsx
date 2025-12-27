import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { AiOutlineMail, } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
  
      <div className='max-w-[1240px] w-full h-full flex justify-center p-2 items-center mx-auto'>
        <div className='mt-6' >
          <div className=' flex flex-col justify-center items-center pt-8 pb-4'>
          <Image src='/assets/projects/me.jpg' alt='aditya yadav' height="200" width="200" className=' rounded-full object-cover object-top  ' />
          </div>
        <p className='uppercase text-sm tracking-widest text-gray-600 '>Let's build something together</p>
        <h2 className='py-2 text-gray-700 '>Hi, I'm <span className='text-[#5651e5]'>Aditya!</span></h2>
        <h2 className='py-2 text-gray-700'> Web Developer & Designer</h2>
        <p className='text-gray-600 max-w-[70%] m-auto py-4'>I'm an enthusiastic web developer specializing in building exceptional digital experiences including user interfaces. Currently, I'm focused  on building responsive front-end web applications while starting to hold my grip on back-end technologies.</p>
        <div className='flex items-center py-4 justify-between max-w-[330px] m-auto'>
           <Link href='https://www.linkedin.com/in/aditya-yadav-348052289/' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' target='_blank'>
            <FaLinkedin/>
           </Link>
           <Link href='https://github.com/aditya2049' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' target='_blank'>
            <FaGithub/>
           </Link>
           <Link href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBxqGCMSmgwBScTLzJVGnJtFzQNBFjZNpPpgPXkZRcBTJHvFNFZDDWnRVjmdzZgKmKtFDx' className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' target='_blank'>
           <AiOutlineMail/>
           </Link>  
           <Link href="https://drive.google.com/file/d/1ZPJpCtf5LDED_lpUAwZnmfUb8oREvQi0/view?usp=drive_link" download className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' target='_blank'>
           <BsFillPersonLinesFill/>
           </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default main
