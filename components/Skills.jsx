import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pt-24 mb-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Skills</p>
      <h2 className='py-4'>What I can do</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/html.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/css.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/javascript.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/react.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>React</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/tailwind.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/github1.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/material_ui.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>MATERIAL UI</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/figma.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>FIGMA</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/nextjs.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>NEXT</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/redux.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>REDUX</h3>
            </div>
        </div>
       </div>

       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/firebase.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>FIREBASE</h3>
            </div>
        </div>
       </div>

       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/express.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>EXPRESS</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/node.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>NODE</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/mongo.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>MONGO</h3>
            </div>
        </div>
       </div>
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 flex items-center '>
        <div className='grid grid-cols-2 gap-4 items-center justify-around w-[100%]'>
            <div className='m-auto'>
            <Image src='/assets/salesforce.webp' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center uppercase'>
                <h3>Salesforce</h3>
            </div>
        </div>
       </div>   
{/* 
       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/firebase.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
            </div>
        </div>
       </div>

       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/firebase.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
            </div>
        </div>
       </div>

       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src='/assets/firebase.png' width='64' height='64' alt='/'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
            </div>
        </div>
       </div> */}

     </div>
     </div>
    </div>
  )
}

export default Skills
