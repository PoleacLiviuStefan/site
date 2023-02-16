import React from 'react'

const CursuriCard = ({title,description,imageCard}) => {
  return (
    <div className='relative w-[270px] h-[310px] rounded-[15px] bg-unghii bg-cover bg-center shadow-[5px_5px_38px_5px_rgba(0,0,0,0.12)]'>
            <div className='absolute  w-full h-full   flex flex-col justify-end items-left px-[1.5rem] '>
                <h2 className='text-white z-20 text-[20px] font-[600] font-montSerrat text-left mb-[2rem] w-[70%]'>{title}</h2>
                    
            </div>
            <h2 className='absolute flex flex-col top-[1.5rem] z-20 left-[1rem] text-[15px] text-white font-montSerrat tracking-[5px]'>ADINA HIRSCH <span className='mt-[.5rem] bg-white h-[2px] w-[2rem]' /></h2>
            <div className='absolute bottom-0 rounded-[15px] w-full h-[6rem] opacity-[60%] bg-gradient-to-t from-black to-transparent' />
            <div className='absolute top-0 rounded-[15px] w-full h-full bg-black opacity-[10%]' />
    </div>
  )
}

export default CursuriCard