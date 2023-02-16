import React from 'react'

const About = () => {
  return (
    <div name="Despre" className='relative h-[82rem] lg:h-[65rem] flex lg:flex-row flex-col items-center lg:justify-center   w-full  '>
          <div className='relative bg-white  h-full flex lg:flex-row flex-col justify-center items-center shadow-xl  w-[90%]'>
            <div className=' lg:hidden bg-adinaCard w-[300px] h-[465px] lg:w-[500px] lg:h-[500px] mt-[5rem]   bg-cover bg-center shadow-xl' />
            <div className='relative h-full mt-[3rem] lg:mt-[7rem] flex w-[80%]   lg:w-[45%] flex-col justify-start lg:justify-center lg:items-left  '>
            <h2 className='relative text-[28px] lg:text-[56px]  font-montSerrat  leading-[2rem] lg:leading-[4rem] font-[600] w-[17.5rem] lg:w-[35rem] '>DESPRE MINE SI ACTIVITATEA MEA
                <span className='absolute left-0 bottom-0 bg-gradient-to-r from-[#CD3F6E] to-[#B234FF] h-[5px] lg:h-[9px] w-[95%] ' />
                </h2>
                
                <p className='relative mt-[1.5rem] lg:mt-[3rem] w-full lg:w-[90%] text-[15px] lg:text-[20px] text-justify font-[400] font-sans targeting-[2rem]'>
                        🥰Draga viitoare cursanta , numele meu este Adina Hirsch . Activez în domeniul frumusetii unghiilor de peste 20 de ani. Cuvintele care ma definesc sunt pasiune , ambitie și determinare .

                        Aceasta scoala este un vis implinit si s-a nascut din dorinta de a transmite mai departe toate cunostintele mele în materie de unghii si sa insuflu dragostea si pasiunea pentru aceasta meserie . Indraznesc sa încadrez acest domeniu la rang de arta pentru ca ceea ce invatam aici nu este doar o simpla meserie ci este "arta pura" cum ar numi o o clienta draga mie 😊 
                        <br /> 
                        <br /> 
                        La randul meu invat de la cei mai buni traineri în domeniu cele mai noi tehnici de realizare, aducând astfel în scoala informații inovative în domeniu cu o teorie extrem de simpla și ușor de înțeles. 
                        Scopul meu ca trainer este sa răspund tuturor întrebărilor tale si sa te ajut sa devii cea mai buna varianta a ta . Nu spun ca va fi ușor dar promit sa ti supraveghez fiecare pas si sa te ajut sa corectezi fiecare greseala. 
                        In toti acesti ani am invatat ca cel mai important este sa exersezi cat mai mult caci totul este 10% talent și 90% munca . 
                       
                        
                    </p>
               
            </div>
            
            <div className='hidden lg:block bg-adinaCard w-[350px] h-[450px] lg:w-[500px] lg:h-[500px] mb-[3rem] lg:mb-[0rem]  bg-cover bg-center shadow-xl' />
          </div>
    </div>
  )
}

export default About