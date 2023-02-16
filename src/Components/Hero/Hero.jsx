import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import { useState,useEffect } from 'react'

const Hero = () => {
  const [activateAnim,setActivateAnim]=useState(false)

  return (
    <div name="Hero" className='relative z-20 flex justify-center items-center bg-hero bg-cover bg-center  w-screen h-screen shadow-lg'>
            <div className='absolute w-full h-full bg-black bg-opacity-30'  />
            <div className='absolute bottom-[-2rem] w-full h-[2rem] opacity-[20%]  bg-gradient-to-t from-transparent to-black'  />
            <div className='flex justify-center items-center w-[80%] h-full'>
                <div className='absolute flex flex-col items-center ' >
                    <h1 className='text-white text-[56px] lg:text-[100px] text-center  font-bold italic font-oldStandard'>Adina Hirsch<br/>
                       <span className='text-[32px] lg:text-[56px]'> NAIL TRAINER</span>
                       
                    </h1>
                    <button className='flex text-white justify-center items-center border-[1px] font-sans font-thin w-[16rem] lg:w-[18rem] h-[3rem] border-white  text-[14px] lg:text-[18px]  '>AFLA MAI MULTE <span className='rotate-[90deg] ml-2'> <MdArrowForwardIos /> </span> </button>
                </div>
                
            </div>
            <div className={`absolute  animate-[appear_2s_ease-in-out_infinite] bottom-[1rem] opacity-[80%] text-white z-30 text-[16px] flex flex-col w-full h-[2.5rem] items-center justify-between`}>
              
              Scroll Down<span className='rotate-[90deg] text-[20px] '><MdArrowForwardIos /></span>
              
            </div>
    </div>
  )
}

export default Hero