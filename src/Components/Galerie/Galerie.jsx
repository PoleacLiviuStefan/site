import React from 'react'
import { useState } from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
const Galerie = () => {
    const [currentImage,setCurrentImage]=useState(1)
    const [maximizeImage,setMaximizeImage]=useState(-1)
    const imageSelection=['bg-unghii','bg-unghii2','bg-unghii3','bg-unghii4','bg-unghii5']
  return (
    <div name="Galerie" className='relative h-[55rem]  text-black flex justify-center w-full  '>
        <div className='w-[90%] lg:py-0 lg:px-[5rem] h-full bg-white shadow-xl flex flex-col items-center'>
            <div className=' w-[80%] h-full lg:w-[90%] flex flex-col items-left lg:justify-center'>
                <h2 className='relative  text-[28px]   lg:text-[56px]  font-montSerrat mt-[2rem] lg:mt-0  font-[600] '>GALERIE</h2>
                <div className='relative flex lg:flex-row flex-col justify-center w-full items-center mt-[5rem]'>
                    <span onClick={()=>{
                        if(0<currentImage)
                            setCurrentImage(prev=>prev=prev-1)
                         else
                         setCurrentImage(imageSelection.length-1)   
                    }} className='absolute left-[-3.3rem] lg:left-[-7rem] rotate-[180deg] text-[64px] lg:text-[128px] cursor-pointer'><MdArrowForwardIos /></span>
                    <div onClick={()=>setMaximizeImage(currentImage-1)} className={`w-[150px] h-[171px] lg:w-[330px] lg:h-[377px] mb-[1rem] lg:mb-0  mr-[.5rem] lg:mr-[2rem] ${imageSelection[currentImage-1]} bg-cover bg-center rounded-[10px]`} />
                    <div onClick={()=>setMaximizeImage(currentImage)} className={`w-[220px] h-[247px] lg:w-[450px] lg:h-[505px] ${imageSelection[currentImage]} bg-cover bg-center rounded-[10px]`} />
                    <div onClick={()=>setMaximizeImage(currentImage+1)} className={`w-[150px] h-[171px] lg:w-[330px] lg:h-[377px] mt-[1rem] lg:mt-0 ml-[.5rem] lg:ml-[2rem] ${imageSelection[currentImage+1]} bg-cover bg-center rounded-[10px]`} />
                    <span onClick={()=>{
                        if(imageSelection.length-1>currentImage)
                        setCurrentImage(prev=>prev=prev+1)
                        else
                        setCurrentImage(0)

                    }} className='absolute right-[-3.3rem] lg:right-[-7rem] text-[64px] lg:text-[128px] cursor-pointer'><MdArrowForwardIos /></span>
                </div>
            </div>
        </div>
        <div className={`fixed lg:hidden ${maximizeImage==-1 && "hidden"} z-50 bg-black w-full h-full bg-opacity-[80%]`} >
                    <div  className={` w-[330px] h-[377px] ${imageSelection[maximizeImage]}`} />
        </div>
    </div>
  )
}

export default Galerie