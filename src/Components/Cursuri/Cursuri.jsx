import React from 'react'
import CursuriCard from './CursuriCard'

const Cursuri = () => {
  return (
    <div name="Cursuri" className='relative text-white flex justify-center w-full h-[95rem] lg:h-[42rem] '>
        <div className='relative w-[90%] shadow-xl h-full flex lg:flex-row flex-col justify-center items-center  lg:py-0 lg:px-[5rem]   bg-gradient-to-t from-[#e5c4cf] to-[#da95ac]'  >
            <div className='relative w-[80%] h-full lg:w-[90%] flex flex-col items-left justify-center'>
                <div className='flex lg:flex-row flex-col lg:items-center'>
                    <div className='flex flex-col'>
                        <h2 className='relative  text-[28px] mt-[2rem] lg:mt-[6rem] lg:text-[56px]  font-montSerrat  leading-[2rem] font-[600] w-[17.5rem] lg:w-[35rem]'>CURSURI UNGHII</h2>
                        <p className='relative mt-[1.5rem] lg:mt-[2.5rem]  w-full lg:w-[33rem]'>
                        Cursurile te ajuta atat în dezvoltarea profesionala cat si personala. 
                                Asadar daca iti doresti sa iti depasesti limitele si sa devii cea mai buna varianta a ta te astept sa pasim impreuna in lumea magica a unghiilor tehnice. ❤
                        </p>
                    </div>
                <a className='relative right-0 top-[2rem] lg:top-[5rem]' href="tel:+40-724-371-035"> <button  className=' w-full lg:w-[15rem] h-[3rem] border-[1px] border-white '>CONTACT</button></a>
                </div>
                <div className='w-full h-full py-[5rem] lg:py-[3rem] flex flex-col lg:flex-row  items-center justify-between'>
                    <CursuriCard title="CURS UNGHII CU GEL" />
                    <CursuriCard title="CURS UNGHII CU GEL" />
                    <CursuriCard title="CURS UNGHII CU GEL" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cursuri