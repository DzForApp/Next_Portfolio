import React, { useState } from 'react';
import FaceIcon from '../icons/FaceIcon' 

function Resume() {


  const [item, setItem] = useState(0)

  const [SelectedItemIndex, setSelectedItemIndex] = useState(0)
  const [offset, setCarouselOffsetStyle] = useState(0)

  function itemActive() {
    setItem(true)
  }
  const [menu, setMenu] = useState(false)

  const ResumeHeading = (props) => {
    return(
    <div className='w-250 h-146  mb-6 shadow-lg'>
      <div className='flex justify-between'>
        <span className='text-2xl '>{props.heading ? props.heading : ''}</span>
        {props.fromDate && props.toDate ? (
          <div className='bg-orange-500 rounded-xl w-32 text-center'>
            {props.fromDate + "_" + props.toDate}
          </div>
        ) : ''}
      </div>
      <div className='text-l font-serif m-2'>
        {props.subHeading ? props.subHeading : ""}
      </div>
      <div className='mb-2 '>
        {props.description ? props.description : ""}
      </div>
     
    </div>
    )
  }

  const resumeList = [
    { label: 'Front-End', logoSrc: "" },
    { label: 'Back-End', logoSrc: "" },
    { label: 'Databases', logoSrc: "" },
    { label: 'Security', logoSrc: "" },
    { label: 'Others', logoSrc: "" },
  ]

  const programmigSkillsDetails = [
    { skill: 'MongoDB', rate: 85 },
    { skill: 'MySQL', rate: 75 },
    { skill: 'Oracle', rate: 85 },
    { skill: 'PostgreSQL', rate: 85 },
    { skill: 'Firebase', rate: 85 },
    

  ]
  const projectDetails = [
    {
      title: 'ELK stack SIEM ',
      duration: { fromDate: '2021', toDate: "2022" },
      description: "Wreating My personel portfolio unsing React JS",
      subHeading: "Personal portfolio"
    },
    {
      title: 'Car Management',
      duration: { fromDate: '2021', toDate: "2022" },
      description: "Wreating My personel portfolio unsing React JS",
      subHeading: "Personal portfolio"
    },
    {
      title: 'School Management System',
      duration: { fromDate: '2021', toDate: "2022" },
      description: "Writing My personel portfolio unsing React JS",
      subHeading: "Personal portfolio"
    },
  
  ]
  const interestDetails = [
    {heading: "Tennis", description: "I loe tennis"},
    {heading: "Video Game", description: "I loe Video Games"},
    {heading: "Swimming", description: "I loe Swimming"},
    {heading: "Chesse", description: "I loe Chesse"},

  ]
  const resumeDetails = [

    <div className=' w-full' key="Front-End">
      <ResumeHeading
        heading={"React JS"}
        subHeading={"Computer Science Faculty"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Next JS"}
        subHeading={"Computer Science Faculty"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Tailwinds css"}
        subHeading={"Computer Science Faculty"}
        fromDate={"2016"}
        toDate={"2019"}
      />
    </div>,
    <div className='' key='work-experience'>
      <ResumeHeading
        heading={"Node Js "}
        subHeading={"Data Analyst"}
        fromDate={"2020"}
        toDate={"2021"}
        description={"This is the description of the job experience details"}
      />
      <ResumeHeading
        heading={"Express Js "}
        subHeading={"Data Analyst"}
        fromDate={"2020"}
        toDate={"2021"}
        description={"This is the description of the job experience details"}
      />
      <ResumeHeading
        heading={"Djanog Rest API"}
        subHeading={"Data Analyst"}
        fromDate={"80"}
        toDate={"%"}
        description={"This is the description of the job experience details"}
      />
      
    </div>,
    <div className='w-full ' key='programming-skills'>
      <div className='mb-2'>
        {programmigSkillsDetails.map((skill, index) => (
          <div className='flex justify-between mt-2' key={index}>
            <div className='ml-8'>{skill.skill}</div>
            <span className='w-32 h-6 mr-8 mb-2 bg-gray-700'>{skill.rate}</span>
          </div>
        ))}
      </div>
    </div>,
    <div className='w-full  ' key='projects'>
      <div>
        {projectDetails.map((project, index) =>
          <ResumeHeading
            key={index}
            heading={project.title}
            subHeading={project.subHeading}
            description={project.description}
            fromDate={project.duration.fromDate}
            toDate={project.duration.toDate}
          />
        )}
      </div>
    </div>,
    <div className='' key='interests'>
    <div>
      {interestDetails.map((interest, index) =>
        <ResumeHeading
          key={index}
          heading={interest.title}
          description={interest.description}
          
        />
      )}
    </div>
  </div>,

  ]

const handleCarousel = (index) =>{
  let offSetHeight = 360  
  let newCarouselOffSet = {
    style: { transform: "translateY("+ index * offSetHeight* -1 +  "px)"}
    
  }
  setCarouselOffsetStyle(newCarouselOffSet);
  setSelectedItemIndex(index);
}

  const getItem = () =>{
    return resumeList.map((item, index)=>(
      
      <div
       // className="w-full h-12 space-y-16  focus:bg-green-600"
        onClick={()=>handleCarousel(index)}
        className={index === SelectedItemIndex ? "item selectedItem flex gap-4 items-center  bg-orange-500 w-64 h-16 rounded-r-xl ": 
        " item flex gap-4 items-center  w-64 h-16 rounded-r-xl "}  
        key={index}
      >  
        <div src='' alt='' className='w-12 h-32 ounded-full  bg-orange-500  ' /> 
        <span className='items-center '>{item.label}</span>
      </div>
    ))
  }
  const getResumeScreen= () =>{
    return (
      <div className=" w-full h-full items-center justify-center py-16 px-12">
        { 
          resumeDetails.map((resumeDetails,index) => index===SelectedItemIndex && resumeDetails)
        }
            
       
        
      </div>
    )
  }


  return (
    <section id='Skills' className='justify-center flex flex-col'>
      <div className=" flex flex-col items-center text-slate-800   ">
        <span className=" text-6xl font-medium text-blx-900">Skills</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          My formal Bio Details
        </span>

      </div >


      <div className=" w-7rem h-3rem bg-red-800 flex my-20  self-center justify-center">
        <div className=" w-full shadow-2xl  text-slate-800  bg-gray-300  shadow-slate-800 flex items-center pl-0">
          <div className="  w-1/3 ml-0 h-full flex flex-col gap-12 place-items-start pl-8 justify-center ">

             {getItem()}       

          </div>

          <div className=" w-2/3  h-full bg-white  self-center ">

           
          {getResumeScreen()}
          </div>


        </div>
      </div>
    </section>
  );
}

export default Resume;