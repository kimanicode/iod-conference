import Header from './components/Header';
import { useState } from 'react'
import Hero from './components/Hero';
import Info from './components/Info';
import Panelist from './components/Panelist';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import Speakers from './pages/Speakers';
import Programme from './pages/Programme';




function App() {
  

  return (
    
   

  
    <div className=" ">
        <Header />
        
        

       <Routes>
          <Route path="/" element={ <><Hero/>
                <Info/>
                <Panelist/>
                <Partners />
              </>} />
          <Route path='/programme' element ={<Programme/>} />

          <Route path='/speakers' element={<Speakers/>} />

          
       
      </Routes>




      <Footer/> 
     
      
     
    </div>
  
  )
}

export default App
