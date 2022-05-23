import Image from 'next/image'
import React from 'react'; 
import ItemEnum from '../icons/ItemEnum';  
import Devloper from '/public/devloper.png'

function About() {
  return (
    <section id='About_me' className='justify-center flex flex-col h-screen'>
     


      <div className="flex my-8  justify-center">
        <div className="w-7rem flex items-center pl-0">
          <div className=" w-1/2 ml-0 h-full   flex-shrink-0 self-center ">
             <Image  src={Devloper} alt="" />
          </div>

          <div className=" w-7rem flex flex-col space-y-6   self-center ">
          <div className=" flex flex-col items-center ">
        <span className=" text-4xl font-medium text-blx-900">About Me</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          Why Choose Me ?
        </span>

      </div >
            <span className=" text-xl font-sans  font-normal p-5">
            <p className="text-gray">
                I am a software engineer and a full stack developer with over three years of experience.
              </p>
             </span>
            <div className='pl-4'>
              <span className=" text-xl font-medium text-slate-800">
                Here are a Few Highlights:
              </span>
              <ul className='mt-2 pl-6 space-y-2 font-light'>
                <li className='flex gap-6'>
                  <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> Full Stack web and mobile development</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> Interactive Front End as per the design</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> React and React Native</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> Redux Toolkit for State Mnanagement</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> Building REST API</span></li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-rdn-yellow' />
                  <span> Managing database</span></li>
              </ul>
            </div>
            <div className='flex space-x-16 pl-16 '>
             
              <button className="h-12 w-32 bg-rdn-yellow text-black rounded-xl ">Konw More</button > 
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default About;