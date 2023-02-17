import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlinePhone} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='relative h-[60rem] lg:h-[40rem] w-full flex  w-full items-center justify-center '>
        <div className='relative w-[80%] h-full flex flex-col items-center justify-center '>
        <div className='absolute top-[35rem] lg:top-[8.2rem] lg:right-[1rem] h-[15rem] w-[25rem] z-20  bg-white shadow-2xl flex flex-col items-center '>
            <div className='flex flex-col w-[80%] mt-[1rem]  text-[14px]'>
                <h2 className='font-montSerrat   text-[20px] lg:text-[28px]  font-montSerrat   font-[600] '>
                        CONTACT
                </h2>
                <h3 className='mt-[.8rem] flex w-[18rem]'><span className='text-[20px] mr-2 mt-3'><FiMapPin /></span><span className='font-bold text-[16px]'>Strada Izbiceni 55 , Bucuresti Sectorul 1 , Romania</span></h3>
                <a href="https://www.instagram.com/adina_hirsch_hairnails/" className='mt-[.5rem] flex cursor-pointer'><span  className='text-[20px] mr-2' ><AiOutlineInstagram /></span><span className='font-bold text-[16px]'>adina_hirsch_hairnails</span></a>
                <a className='mt-[.8rem] text-[14px] cursor-pointer flex' href="https://m.facebook.com/adinahirsch05/"> <span className='text-[20px] mr-2'> <CiFacebook /></span><span className='font-bold text-[16px]'>Hirsch Adina Nails</span></a>
                <a className='mt-[.8rem] text-[14px] cursor-pointer flex' href="tel:+40-724-371-035"><span className='text-[20px] mr-2'  ><AiOutlinePhone /></span> <span className='font-bold text-[16px]'>0724371035</span></a>
        </div>
        </div>
        <div className='w-full h-full mt-[10rem]'>
        <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=izbiceni%2055%20,Bucuresti%20sectorul%201%20,Romania&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        </div>
    </div>
  )
}

export default Contact