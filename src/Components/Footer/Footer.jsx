import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from 'react-router';
const Footer = () => {
  const navigate=useNavigate()
  return (
    <div name="Footer" className='flex lg:justify-center relative bg-[#ebdae0] w-full h-[45rem] lg:h-[22rem]'>
            <div className='relative w-[90%] flex  justify-center h-full ' >
                <div className='w-[80%] mt-[4rem] flex flex-col items-center justify-between  h-[80%] lg:h-full  lg:grid lg:grid-cols-3 lg:self-center'>
                     <div className='bg-cover bg-logo w-[120px] h-[96px]'  />
                     <div className='flex flex-col  '>
                        <h2 className=' lg:text-[20px]'>UTILE</h2>
                        <ul className='mt-[1rem] '>
                              
                            <Link
                            activeClass="active"
                            to="Despre"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            href="Despre"
                          >  
                            <li onClick={()=>navigate("/")} className='cursor-pointer'>Despre mine</li>
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
                             <li onClick={()=>navigate("/")} className='mt-2 cursor-pointer'>Cursuri</li>
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
                            <li onClick={()=>navigate("/")} className='mt-2 cursor-pointer'>Galerie</li>
                            </Link>
                            <li className='mt-2 cursor-pointer'>Contact</li>
                        </ul>
                     </div>
                     <div className='flex flex-col ml-[5.7rem] lg:ml-0 '>
                     <h3 className='lg:text-[20px]'>CUVINTE CHEIE</h3>
                     <ul className='mt-[1rem]'>
                      <li>Cursuri unghii In Bucuresti</li>
                      <li className='mt-2'>Curs  manichiura in Bucuresti</li>
                      <li className='mt-2'>Curs manichiura specializat</li>
                      <li className='mt-2'>Nails training</li>
                     </ul>
                     </div>
                     <h3 className='absolute bottom-2 ml-[2rem] lg:ml-0 text-[14px]' > @ 2023 CURSURI UNGHII IN BUCURESTI  ADINA HIRSCH</h3>
                </div>
                
            </div>
            
    </div>
  )
}

export default Footer