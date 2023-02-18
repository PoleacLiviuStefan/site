import React from 'react'
import CursuriCard from './CursuriCard'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Fade from 'react-reveal/Fade'
const Cursuri = () => {
    const navigate=useNavigate()
  return (
    <div  name="Cursuri" className='relative text-white flex justify-center w-full h-[70rem] lg:h-[42rem] '>
        <div className='relative w-[90%] shadow-xl h-full flex lg:flex-row flex-col justify-center items-center  lg:py-0 lg:px-[5rem]   bg-gradient-to-t from-[#e5c4cf] to-[#da95ac]'  >
            <div className='relative w-[80%] h-full lg:w-[90%] flex flex-col items-left justify-center'>
                <div className='flex lg:flex-row flex-col lg:items-center'>
                    <div className='flex flex-col'>
                        <Fade left> 
                             <h2 className='relative  text-[28px] mt-[2rem] lg:mt-[6rem] lg:text-[56px]  font-montSerrat  leading-[2rem] font-[600] w-[17.5rem] lg:w-[35rem]'>CURSURI UNGHII</h2>
                        </Fade>
                        <Fade bottom> 
                        <p className='relative mt-[1.5rem] lg:mt-[2.5rem]  w-full lg:w-[33rem]'>
                        Cursurile te ajuta atat în dezvoltarea profesionala cat si personala. 
                                Asadar daca iti doresti sa iti depasesti limitele si sa devii cea mai buna varianta a ta te astept sa pasim impreuna in lumea magica a unghiilor tehnice. 
                        </p>
                        </Fade>
                    </div>
                    <Fade right>
                 <button onClick={()=>{navigate("/contact"); window.scrollTo({top:0,left:0})}}  className=' w-full lg:w-[15rem] h-[3rem] border-[1px] border-white '>CONTACT</button>
                 </Fade>
                </div>
                <div className='w-full h-full py-[5rem] lg:py-[3rem] flex flex-col lg:flex-row  items-center justify-between lg:justify-center '>
                    <Fade left>
                         <CursuriCard  title="CURS MANICHIURA BASIC " routing="curs-manichiura-basic" imageCard="bg-unghii7" />
                    </Fade>
                    <Fade right>
                         <CursuriCard title="CURS MANICHIURA SEMIPERMANENTA" routing="curs-manichiura-semipermanenta" imageCard="bg-unghii" />
                    </Fade>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cursuri