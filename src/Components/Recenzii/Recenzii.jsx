import React from 'react'
import Recenzie from './Recenzie'
import Fade from 'react-reveal'
const Recenzii = () => {
  return (
    <div name="Recenzii"  className='relative h-[220rem] lg:h-[85rem]  text-black flex justify-center w-full  '>
        <div className='w-[90%] lg:py-0 lg:px-[5rem] h-full bg-white shadow-xl flex flex-col items-center'>
            <div className=' w-[80%] mt-[5rem] h-full lg:w-[90%] flex flex-col items-left '>
                 <h2 className='relative   text-[28px]   lg:text-[56px]  font-montSerrat mt-[2rem] lg:mt-0  font-[600] '>RECENZIILE CLIENTILOR</h2>
                 <div className='flex flex-wrap justify-center '>
                  <Fade left>
                       <Recenzie nume="Ema S" stars={5} data="2 Februarie 2023" comentariu="Recomand! Adina este un maestru al unghiilor.Sunt clienta ei de mai bine de 5 ani si niciodata nu m-a dezamagit. Face o treaba uimitoare cu pictura, precum si cu modelele de unghii. E super dulce si creativa! Plec mereu fericita din salon."  />
                  
                    </Fade>
                    <Fade right>
                       <Recenzie nume="Luminita Băndilă" stars={5} data="20 Decembrie 2022" comentariu="Adina este o artista a sufletelor,ce plamadeste cu profesionalism,seriozitate si iubire de viata si de profesie,manechiuri perfecte,tunsori si coafuri variate, de la clasice la moderne!Din cabinetul ei pleci cu un loop proaspat si tineresc,dar si cu sufletul incarcat de energie pozitiva, si de pofta de a trai si a te bucura de viata !" />
                    </Fade>
                    <Fade left>
                        <Recenzie nume="Laura Predus" stars={5} data="4 Decembrie 2022" comentariu="Cu mare drag recomand , pe langa unghiile dragute pe care le face e un om extraordinar !"  />
                    </Fade>
                    <Fade right>
                       <Recenzie nume="Lupu Mihaela Adriana" stars={5} data="26 Noiembrie 2022" comentariu="Recomand cu drag!"  />
                    </Fade>
                    <Fade left>
                        <Recenzie nume="Miruna Vlas" stars={5} data="7 Noiembrie 2022" comentariu="Ma bucur ca am descoperit-o pe Adina, plec mereu foarte multumita de la ea."  />
                    </Fade>
                    <Fade right>
                        <Recenzie nume="Serban Chinole" stars={5} data="22 August 2022" comentariu="Adina este o profesionista pe care o cunosc de peste 10 ani. Recomand"  />
                    </Fade>
                    <Fade left>
                        <Recenzie nume="Prettydeco" stars={5} data="22 Iunie 2022" comentariu="De fiecare data plec cu o manichiura impecabila, iar Adina ma impresioneaza, mai ales, prin simtul sau artistic, stie cum sa potriveasca forma, culoarea ... multumesc!"  />
                    </Fade>
                 </div>
            </div>     
        </div>
    </div>
  )
}

export default Recenzii