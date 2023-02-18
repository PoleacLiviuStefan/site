import React from 'react'
import CursorZoom from 'react-cursor-zoom';
const CursDetalii = ({title,imagine,detalii,diploma,dimensions}) => {
 
  return (
    <div  className='relative h-[97rem] lg:h-[70rem] flex lg:flex-row flex-col items-center lg:justify-center   w-full  '>
          <div className='relative bg-white  h-full flex flex-col  justify-center items-center  w-[90%] lg:w-[62rem]'>
               <div className='flex justify-center lg:justify-start w-[90%] lg:w-full'> 
                 <h2 className='text-[24px] text-left    lg:text-[34px] font-libre '>{title}</h2>
                 </div>
             <div className='flex lg:flex-row flex-col w-[90%] lg:w-full justify-center items-center lg:items-start'>
              <div className=' w-[350px]  h-[439px]'> 
             <CursorZoom
                image={{
                    src: imagine,
                    width: 350,
                    height: 439
                }}
                zoomImage={{
                    src: imagine,
                    width: dimensions[0],
                    height: dimensions[1]
                }}
                cursorOffset={{ x: 0, y: 0}}
            />
            </div>
                <div className='flex flex-col mt-[2rem] lg:mt-0 items-center w-full bg-white lg:ml-[5rem]  lg:w-[36rem] shadow-[5px_5px_38px_5px_rgba(0,0,0,0.22)] ' >
                  <div className=' h-[720px] lg:h-[750px] w-[90%] lg:w-[90%] flex flex-col items-center' >
                      <h2 className='text-[24px] text-left mt-[2rem]  lg:text-[42px]   font-libre leading-[35px]'>{title}</h2>
                      <h3 className={`flex justify-center items-center ${!diploma && "hidden" } font-bold mt-[1.5rem] h-[1.5rem] w-full bg-green-200 `}>Se acorda diploma de participare</h3>
                      <div className='font-montSerrat mt-[2rem] w-full text-gray-500'>
                        {detalii}
                      </div>
                  </div>
                </div>
             </div>
        </div>

  </div>
  )
}

export default CursDetalii