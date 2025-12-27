import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, Url, tech}) => {
  return (
    <div className='flex justify-center items-center shadow-gray-400 h-auto w-full relative rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
    <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
    <Link href={Url} target='_blank'>
       <p className='text-center text-gray-700 bg-white rounded-lg cursor-pointer py-2 font-bold text-md'>More Info</p> 
    </Link>
    </div>
  </div>
  )
}

export default ProjectItem
