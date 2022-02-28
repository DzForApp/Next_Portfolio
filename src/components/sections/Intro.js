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
        <div className=' justify-items-center'>


            <div className="relative flex-col items-center h-160  flex justify-center space-x-16 ">
                <div className='w-full '>

                </div>
                <div className='flex flex-row text-center '>
                    <div className='flex flex-col justify-center pb-0 items-center  h-full text-4xl  '>
                        <div className='relative w-full space-y-8 text-center justify-items-center'>
                            <div className='flex ml-32 space-x-2'>
                                <GitIcon className='w-6 h-6 ' />
                                <FaceIcon className='w-6 h-6 text-blue-900  bg-indigo-50 rounded-full fill-current' />
                                <TwitIcon className='w-12 h-12' />
                                <LinkedIcond className='w-6 h-6 text-blue-900 bg-blue-900   fill-current' />
                                <TelegIcon className='w-6 h-6  fill-current ' />
                            </div>
                            <div className='flex flex-col text-left ml-0 space-y-4 w-96 text-6xl'>
                                <p className='text-blue-900 '>Full Stack</p>
                                <p className='text-slate-900' >Web</p>
                                <p> Devloper</p>
                            </div>
                            <div className='text-slate-900 text-2xl text-left'>
                                <p>I am familiar with React, NextJs, TailWind for the Frontend. <br /> And Express, NestJs or Firebase for the backend.</p>
                            </div>
                        </div>
                        <div className='flex space-x-16 mt-16 pb-32'>
                            <ButtonHire className="h-16 w-64 bg-slate-900 text-white  border-2 rounded-4xl" />
                            <ButtonResume className="h-16 w-64 text-blue-900  border-4 hover:bg-gray-900 rounded-4xl " />
                        </div>
                    </div>
                    <div className='w-96 h-96 bg-orange-500 rounded-full'>
                        <span className="">
                            <Image src="/../public/Me.png" alt="Vercel Logo" width={380} height={470} />
                        </span>
                    </div>
                </div>
            </div>
            <div className='items-center'>

            </div>

        </div>
    )

}
