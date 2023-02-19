import About from "./Components/About/About";
import Cursuri from "./Components/Cursuri/Cursuri";
import Footer from "./Components/Footer/Footer";
import Galerie from "./Components/Galerie/Galerie";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import CursDetalii from "./Components/Cursuri/CursDetalii";
import {TiTickOutline} from 'react-icons/ti'
import imagine1 from './Images/unghii7.jpg'
import imagine2 from './Images/unghiiCuGel.jpg'
import Contact from "./Components/Contact/Contact";
import Recenzii from "./Components/Recenzii/Recenzii";
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Hero />
          <About />
          <Cursuri />
          <Galerie />
          <Recenzii />
          </>} 
          />
        <Route path="/curs-manichiura-basic" element={<CursDetalii title="CURS MANICHIURA BASIC" imagine={imagine1} dimensions={[1852,2048]} diploma={true} detalii={
          <p className=" text-[14px] lg:text-[16px] ">
            <span className="font-bold">Ce presupune acest curs : </span>
            <br/>
            <span>2 ORE DE TEORIE IN FIECARE ZI A CURSULUI </span>
            <br/>
            <span>PRACTICA PE MODEL 6-8 H </span>
            <br/>
            <br/>
          <span className="relative font-bold text-[16px] lg:text-[18px] mt-[1rem] "> Ce vei invata la acest curs : </span>
          <ul>
                                    
              <li className="flex mt-[.5rem] font-bold"> Ziua 1 - Teorie : </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Practica - constructie patrat natural  </li>
                                    
              <li className="flex mt-[.5rem] font-bold"> Ziua 2 - Constructie migdala de salon :  </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Portofoliu cu poze profesionale pentru a atrage cliente noi </li>
                                  
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Vei invata cum sa stabilesti preturile pentru fiecare lucrare </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Vei invata cum sa realizezi fotografii profesionale</li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Vei invata cum sa atragi clientele pe “social media” </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Vei invata cum sa abordezi toate tipurile de cliente </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Vei invata cum sa lucrezi profesional </li>
                                    
             
          </ul>

          <h3 className="mt-[.5rem] ml-[.8rem] text-[16px] lg:text-[18px]"><span className="font-bold">Durata  : </span> 2 zile</h3>

          </p>} />} 
        />
       <Route path="/curs-manichiura-semipermanenta" element={<CursDetalii title="CURS MANICHIURA SEMIPERMANENTA" imagine={imagine2} diploma={true} dimensions={[1630,2048]} detalii={
          <p className=" text-[14px] lg:text-[16px] ">
          <span className="font-bold text-[16px] lg:text-[18px] "> Ce vei invata la acest curs : </span>
          <ul>
                                    
              <li className="flex mt-[.5rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Aranjarea spatiului de lucru </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Clasificarea ustensilelor </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Sterilizarea ustensilelor </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Anatomia unghiilor </li>
                                  
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Tipuri de pat unghial </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Solutii de pregatire </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Aplicarea ojei semipermanente </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Aplicarea bazei rubber </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Aplicarea ojei sub cuticula </li>
                                    
              <li className="flex mt-[.2rem]"><span className="text-[18px] mt-1"><TiTickOutline /></span> Tehnici de promovare </li>
          </ul>

          <h3 className="mt-[.5rem] ml-[.8rem] text-[16px] lg:text-[18px]"><span className="font-bold">Durata  : </span> 1 zi</h3>

          </p>}/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
