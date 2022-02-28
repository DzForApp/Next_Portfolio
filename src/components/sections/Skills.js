import React, {useState} from 'react';
import Wave from '../icons/Wave'; 

function Skills() {
  
   
  return (
    <section id='Skills'>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">Skills</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          My formal Bio Details 
        </span>

      </div >


      <div className="flex flex-col my-20   relative">
        <div className="w-full h-64 bg-orange-400  flex items-center pl-0">
      
       

        </div>
        <div className=" w-full ml-0 h-1/4 flex flex-col space-y-0  flex-shrink-0 place-self-end ">
             <Wave className=" bg-red-0" />
            
          </div>
      </div>
    </section>
  );
}

export default Skills;