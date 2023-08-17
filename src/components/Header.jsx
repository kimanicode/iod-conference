import React ,{useState} from 'react'
import { HiMenuAlt3 ,HiX} from "react-icons/hi";
import Logo from '../assets/logo.jpg'

import { Link,useLocation } from "react-router-dom";

const Header = ()=>{

    const [nav ,setNav] = useState(false)
  

    function handleLinkClick() {
      setNav(false);
    }

    function handleClick(){
      setNav(!nav)
   }
   const location = useLocation();
    return (
        
        <div className=' bg-white py-3 px-6 h-14 sticky top-0 z-10  w-full'>
            <div className='flex justify-between  '>
            <div className=' flex '>
                     
            <Link to={ "https://iodkenya.com" }  ><img src ={Logo} className='md:h-12 h-10 w-full ' />
            </Link>
               
            </div>
            <div>
              <ul className='justify-between  hidden md:flex pr-16'>
                  <li className= {location.pathname === '/' ? 'px-3 hover:text-xan cursor-pointer border-b-2 border-b-xan text-marian' : 'px-3 hover:text-xan cursor-pointer text-marian'}>
                  <Link to='/'>Home</Link>
                  </li>


                  <li className= {location.pathname === '/programme' ? 'px-3 hover:text-xan cursor-pointer border-b-2 border-b-xan text-marian' : 'px-3 hover:text-xan cursor-pointer text-marian'}>
                  <Link to='/programme'>Programme</Link>
                  </li>


                  <li className={location.pathname === '/speakers' ? 'px-3 hover:text-xan cursor-pointer border-b-2 border-b-xan text-marian' : 'px-3 hover:text-xan cursor-pointer text-marian'}><Link to='/speakers'>Speakers</Link></li>
                  
              </ul>
            </div>

            <div  className='md:hidden  ' onClick={handleClick}>
               {!nav ? <HiMenuAlt3 className='w-10 h-10  text-xan'/>: <HiX className='w-10 h-10 text-xan'/>} 
        </div>
        </div>

        {nav &&         
            <ul className='px-8  inline-block bg-white text-center w-full flex flex-col '>

                <li className={location.pathname === '/' ? 'py-2 border-b-2 border-b-xan  cursor-pointer text-marian':'py-2  cursor-pointer text-marian'} onClick={handleLinkClick}><Link to='/'>Home</Link></li>


                <li className={location.pathname === '/programme' ? 'py-2 border-b-2 border-b-xan  cursor-pointer text-marian':'py-2  cursor-pointer text-marian' } onClick={handleLinkClick}><Link to='/programme'>Programme</Link></li>

                <li className={location.pathname === '/speakers' ? 'py-2 border-b-2 border-b-xan  cursor-pointer text-marian':'py-2  cursor-pointer text-marian'} onClick={handleLinkClick}><Link to='/speakers'>Speakers</Link></li>
               
            
            </ul>

        
            
            
        }



        </div>
    )
}

export default Header;
