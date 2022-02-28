import React from 'react';
import ButtonResume from '../commun/ButtonResume';
import ButtonHire from '../commun/ButtonHire';
import ItemEnum from '../icons/ItemEnum';  
import Devloper from '/public/devloper.png'

function About() {
  return (
    <section id='About_me'>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">About Me</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          Why Choose Me ?
        </span>

      </div >


      <div className="flex my-12   relative justify-center">
        <div className="w-128 h-146 shadow-2xl shadow-slate-800 flex items-center pl-0">
          <div className=" w-1/2 ml-0 h-full bg-transparent  flex-shrink-0 self-center ">
             <img  src={Devloper} alt="" />
          </div>

          <div className=" w-7rem h-3rem bg-gray-300 flex flex-col space-y-6   self-center ">
            <span className=" text-xl font-sans text-slate-800 font-normal p-5">
              Full stack web and mobile developer with background knowledge of MERN stacks with redux,
              along with a knack of building applications with utmost efficiency. 
              Strong professional with a BSC willing to be an asset for an organization.</span>
            <div className='pl-4'>
              <span className=" text-xl font-medium text-slate-800">
                Here are a Few Highlights:
              </span>
              <ul className='mt-2 pl-6 space-y-2 font-light'>
                <li className='flex gap-6'>
                  <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> Full Stack web and mobile development</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> Interactive Front End as per the design</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> React and React Native</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> orangeu6 for State Mnanagement</span>
                </li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> Building REST API</span></li>
                <li className='flex gap-6'> <ItemEnum className='w-4 h-4 bg-orange-600' />
                  <span> Managing database</span></li>
              </ul>
            </div>
            <div className='flex space-x-16 pl-16 '>
              <ButtonHire className="h-12 w-32 bg-slate-900 text-white border-2 rounded-4xl" />
              <ButtonResume className="h-12 w-32 bg-orange-600 rounded-4xl " />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default About;