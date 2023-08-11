import React ,{useState} from 'react'
import { HiMenuAlt3 ,HiX} from "react-icons/hi";
import Logo from '../assets/logo.jpg'

const Header = ()=>{

    const [nav ,setNav] = useState(false)
  

    function handleLinkClick() {
      setNav(false);
    }

    function handleClick(){
      setNav(!nav)
   }

    return (
        
        <div className=' bg-white py-3 px-6 h-14 sticky top-0 z-10  w-full'>
            <div className='flex justify-between  '>
            <div className=' flex '>
                     
                    <img src ={Logo} className='md:h-12 h-10 w-full ' />
               
            </div>
            <div>
              <ul className='justify-between  hidden md:flex pr-16'>
                  <li className='px-3 hover:text-xan cursor-pointer border-b-2 border-b-xan text-marian'>Home</li>
                  <li className='px-3 hover:text-xan  cursor-pointer text-marian'>Programme</li>
                  <li className='px-3 hover:text-xan  cursor-pointer text-marian'>Speakers</li>
                  
              </ul>
            </div>

            <div  className='md:hidden  ' onClick={handleClick}>
               {!nav ? <HiMenuAlt3 className='w-10 h-10  text-xan'/>: <HiX className='w-10 h-10 text-xan'/>} 
        </div>
        </div>

        {nav &&         
            <ul className='px-8  inline-block bg-white text-center w-full flex flex-col '>

                <li className='py-2  cursor-pointer border-b-2 border-b-xan text-marian'>Home</li>
                <li className='py-2  cursor-pointer text-marian'>Programme </li>
                <li className='py-2  cursor-pointer text-marian'>Speakers</li>
               
            
            </ul>

        
            
            
        }



        </div>
    )
}

export default Header;
