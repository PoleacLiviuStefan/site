import React from 'react'

const Footer = () => {
  return (
    <div name="Footer" className='relative bg-[#ebdae0] w-full h-[60rem] lg:h-[20rem]'>
            <div className='relative w-[90%] flex  justify-center h-full ' >
                <div className='w-[80%] mt-[4rem] flex flex-col items-center lg:grid lg:grid-cols-4'>
                     <div className='bg-cover bg-logo w-[120px] h-[96px]'  />
                     <div className='flex flex-col'>
                        <h2 className=' lg:text-[20px]'>UTILE</h2>
                        <ul className='mt-[1rem] '>
                            <li className='cursor-pointer'>Despre mine</li>
                            <li className='mt-2 cursor-pointer'>Cursuri</li>
                            <li className='mt-2 cursor-pointer'>Galerie</li>
                            <li className='mt-2 cursor-pointer'>Contact</li>
                        </ul>
                     </div>
                </div>
            </div>
    </div>
  )
}

export default Footer