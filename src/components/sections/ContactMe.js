import React, { useState } from 'react';
import InputItem from '../commun/InputItem';
import FaceIcon from '../icons/FaceIcon';
import GitIcon from '../icons/GitIcon';
import LinkedIcon from '../icons/LinkedIcon'

function ContactMe() {

  const [menu, setMenu] = useState(false)


  return (
    <section id='Contact_me'> 
      <div className=" flex flex-col items-center  ">
        <span className=" text-6xl font-medium text-blx-900">ContactMe</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          Let s Keep In Touch
        </span>

      </div >


      <div className="flex mt-12 mb-12  relative justify-center">
        <div className="w-7rem h-3rem pt-1 pl-1  shadow-xl bg-orange-400 flex items-center ">
          <div className=" w-full h-full bg-orange-400 items-center justify-center text-white text-justify ">
            <div className='uppercase ml-8 text-3xl'>
              Get in Touch
            </div>
            <div className='flex  ml-8 space-x-2'>
              <GitIcon className='w-12 h-12' />
              <FaceIcon className='w-12 h-12' />
              <LinkedIcon className='w-12 h-12' /> 
            </div>
            <div className='ml-1 mt-16'>
              <p>Send your message !</p>
              <div className='w-full h-48 bg-zinc-100'>

              </div>
            </div>
          </div>

          <div className=" w-1/2 m-4 h-5/6 bg-gray-300 flex flex-col   rounded-2xl flex-shrink-0 self-center ">

            <div className='flex flex-col space-y-8 w-full p-4'>
              <InputItem title="Name" />
              <InputItem title="Email" />
              <InputItem title="Message" />
            </div>

          </div>


        </div>
      </div>
    </section>
  );
}

export default ContactMe;