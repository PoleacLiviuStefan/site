import React from 'react'
import {AiOutlinePhone,AiOutlineInstagram} from 'react-icons/ai'
import { useState } from 'react'
import {FaQuestion} from 'react-icons/fa'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {GiFingernail} from 'react-icons/gi'
import {GrContact} from 'react-icons/gr'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from 'react-router'
import {CiFacebook} from 'react-icons/ci'
import {AiFillStar} from 'react-icons/ai'

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  const navigate=useNavigate()
  return (
    <div className=' flex justify-center z-50  fixed top-0 left-0 bg-white  h-[6rem] shadow-lg w-full '>
      <div className='absolute bg-white h-full w-full z-20' />
        <div className='absolute z-50 flex justify-center items-center top-0 bg-[#CD3F6E] h-[2rem] w-full text-white text-[17px]' > 
          <span className='mr-2 text-[20px]' ><AiOutlinePhone /></span> <a href="tel:+40-724-371-035">0724371035</a>
          <a className='ml-2 text-[20px] cursor-pointer '  href="https://www.instagram.com/adina_hirsch_hairnails/"> <AiOutlineInstagram /></a>
          <a className='ml-2 text-[20px] cursor-pointer ' href="https://m.facebook.com/adinahirsch05/">  <CiFacebook /></a>
         </div>
         
         <Link
            activeClass="active"
            to="Hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Hero"
          ><div onClick={()=>navigate("/")} className='hidden lg:block absolute z-50 lg:right-[5rem] mt-[2.3rem] lg:mt-0 lg:top-[2.3rem] bg-logo  w-[70px] h-[56px] bg-cover bg-center cursor-pointer'  />
          </Link>
          <div className='relative hidden lg:flex justify-center w-full items-center bg-white  z-40 h-[4rem] mt-[2rem]'>
           
            
            <div className='flex w-[30%] justify-between text-[14px] '>
              
            <Link
            activeClass="active"
            to="Despre"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Despre"
          > <a onClick={()=>navigate("/")} className='relative flex flex-col items-left cursor-pointer ' >DESPRE MINE <span className='relative w-full h-[2px] bg-black ' /></a>
          </Link>
          <Link
            activeClass="active"
            to="Cursuri"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Cursuri"
          >
              <a onClick={()=>navigate("/")} className='relative  flex flex-col items-left cursor-pointer' >CURSURI <span className='relative w-full h-[2px] bg-black ' /></a>
          </Link>
          <Link
            activeClass="active"
            to="Galerie"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Galerie"
          >
              <a onClick={()=>navigate("/")} className='relative  flex flex-col items-left cursor-pointer' >GALERIE <span className='relative w-full h-[2px] bg-black ' /></a>
         </Link>
           <Link
            activeClass="active"
            to="Recenzii"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="Recenzii"
          >
              <a onClick={()=>navigate("/")} className='relative  flex flex-col items-left cursor-pointer' >RECENZII <span className='relative w-full h-[2px] bg-black ' /></a>
         </Link>
              <a onClick={()=>{navigate("/contact");window.scrollTo({top:0,left:0}) }} className='relative  flex flex-col items-left cursor-pointer' >CONTACT <span className='relative w-full h-[2px] bg-black ' /></a>
            
            </div>
         </div>

         <div  className='lg:hidden absolute z-50 top-0 left-0 flex justify-center  w-full h-full'>
          <div onClick={()=>setOpenMenu(prev=>!prev)} className='absolute left-0 flex flex-col items-center justify-center w-[3rem] h-[3rem] ml-[2rem] mt-[2.5rem] h-[3rem] rounded-[50%] bg-[#CD3F6E]'>
            <span className={`relative  ${openMenu ? "animate-[topArrowAnim_.5s_ease-in-out_forwards]":"animate-[topArrowAnimReverse_.5s_ease-in-out_forwards]"} h-[3px] w-[1.5rem] bg-white rounded-[5px]`} />
            <span className={`relative ${openMenu ? "animate-[midArrowAnim_.5s_ease-in-out_forwards]":"animate-[midArrowAnimReverse_.5s_ease-in-out_forwards]"} mt-[.3rem] left-[-.15rem] h-[3px] w-[1.2rem] bg-white rounded-[2px]  `} />
            <span className={`relative ${openMenu ? "animate-[bottomArrowAnim_.5s_ease-in-out_forwards]":"animate-[bottomArrowAnimReverse_.5s_ease-in-out_forwards]"} mt-[.3rem] h-[3px] w-[1.5rem] bg-white rounded-[2px]`} />
            </div>
            <div className='relative top-[2.3rem] w-[30%] z-50 flex justify-center '>
            <div onClick={()=>{navigate("/"); window.scrollTo({top:0,left:0})}} className='  z-50   bg-logo  w-[70px] h-[56px] bg-cover bg-center cursor-pointer'  />
            </div>
          </div>
          <div className={`absolute flex justify-center mt-[6rem] shadow-xl  ${openMenu ? 'animate-[menuSlideAnim_.5s_ease-in-out_forwards]':"animate-[menuSlideAnimReverse_.5s_ease-in-out_forwards]"}  z-10 w-screen h-[12rem] bg-white text-[14px]`}>

            <div className='absolute  flex flex-col items-left justify-between  w-[80%] h-full    '>
            <Link
            activeClass="active"
            to="Despre"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            href="Despre"
          >
          <a onClick={()=>{setOpenMenu(false); navigate("/") ; }} className='relative flex cursor-pointer mt-[.8rem]' ><span className='text-[20px] mr-2' ><FaQuestion /></span> DESPRE MINE </a>
          </Link>
          <Link
            activeClass="active"
            to="Cursuri"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            href="Cursuri"
          >
              <a onClick={()=>{setOpenMenu(false); navigate("/") ; }} className='relative  flex cursor-pointer ' ><span className='text-[20px] mr-2' ><BsFillJournalBookmarkFill /></span>CURSURI   </a>
            </Link>
            <Link
            activeClass="active"
            to="Galerie"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            href="Galerie"
          >
              <a onClick={()=>{setOpenMenu(false); navigate("/") ; }} className='relative  flex cursor-pointer' ><span className='text-[20px] mr-2' ><GiFingernail /></span>GALERIE  </a>
          </Link>
          <Link
            activeClass="active"
            to="Recenzii"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href="Recenzii"
          >
               <a onClick={()=>{setOpenMenu(false); navigate("/") ; }} className='relative  flex cursor-pointer' ><span className='text-[20px] mr-2' ><AiFillStar /></span>RECENZII  </a>
         </Link>
              <a onClick={()=>{setOpenMenu(false);navigate("/contact");window.scrollTo({top:0,left:0})}} className='relative  flex cursor-pointer mb-[.8rem]' ><span className='text-[20px] mr-2' ><GrContact/></span> CONTACT  </a>
          
              </div>
          </div>
    </div>
  )
}

export default Navbar
