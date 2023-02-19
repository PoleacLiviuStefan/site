import React from 'react'
import {AiFillStar} from 'react-icons/ai'
const Recenzie = ({nume,stars,data,comentariu}) => {
  return (
    <div className='relative lg:ml-[2rem] mt-[2.5rem] shadow-xl bg-white px-[2rem] py-[1rem] w-full lg:w-[32rem] h-[25rem] lg:h-[14rem]'>
        <div className='flex flex-col w-full h-full '>
            <h3 className='font-bold'>{nume}</h3>
            <h3 className='text-gray-600 text-[14px]'>{data}</h3>
          
            <div className='flex mt-[.2rem]'>
                {
                [...Array(stars)].map(() => <span className='text-[24px] text-yellow-400 '><AiFillStar /></span>)

                }
            </div>
            <p className='text-[14px] mt-[.5rem]' > {comentariu}</p>
        </div>   
    </div>
  )
}

export default Recenzie