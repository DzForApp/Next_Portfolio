import React from 'react'
import Image from 'next/image' 
import FaceIcon from '../icons/FaceIcon'
import ButtonHire from '../commun/ButtonHire'
import ButtonResume from '../commun/ButtonResume'
import TwitIcon from '../icons/TwitIcon'
import LinkedIcond from '../icons/LinkedIcon'
import TelegIcon from '../icons/TelegIcon'
import GitIcon from '../icons/GitIcon'

export default function Intro() {
    return (
          <section id="Home" className="flex h-screen lg:flex-row lg:space-y-0 space-y-8 flex-col items-center justify-center pt-28 ">


            <div className=" flex-col items-center h-160  flex justify-center space-x-16 ">
                <div className='w-full '>

                </div>
                <div className='flex flex-row text-center '>
                    <div className='flex flex-col justify-center pb-0 items-center  h-full text-4xl  '>
                        <div className=' w-full space-y-8  text-center justify-items-center'>
                        
                            <div className='flex flex-col text-left ml-0 space-y-4 w-96 text-6xl'>
                                <p className='text-blue-900 '>Full Stack</p>
                                <p className='text-slate-900' >Web</p>
                                <p> Devloper</p>
                            </div>
                            <div className='text-slate-900 text-2xl text-left'>
                                <p>I am familiar with React, NextJs, TailWind for the Frontend. <br /> And Express, NestJs or Firebase for the backend.</p>
                            </div>
                            <div className='flex space-x-16 mt-16 pb-32'>
                       
                            <button className="h-16 w-64 bg-orange-600 text-white  border-0 font-sans rounded-xl">Contact me</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-96 h-96 bg-orange-500 rounded-full'>
                        <span className='-flex '>
                            <Image src="/Me.png" alt="Vercel Logo" width={380} height={470} />
                        </span>
                    </div>
                </div>
            </div>
            <div className='items-center'>

            </div>

        </section>
    )

}
