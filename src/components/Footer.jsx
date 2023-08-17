import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import {Link} from 'react-router-dom'


const Footer = () =>{

    return(
        <div className='bg-marian flex justify-between p-8   text-center text-white w-full flex-col md:flex-row'>
            
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='text-xan font-bold md:text-xl' >Who We Are</h3>
                <ul>
                    <li className='p-2'>About The Event</li>
                    <li className='p-2'>Our Partners</li>
                    <li className='p-2'>
                        <Link to='/speakers'>
                            Meet The Speakers
                        </Link>    
                    </li>
                    
                    
                </ul>
            </div>
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='text-xan font-bold md:text-xl'>Work With Us</h3>

                <ul>
                    <li className='p-2'>Become a Partner</li>
                    <li className='p-2'>
                    <Link to={ "https://iodkenya.com" } target="_blank">Visit our main Website</Link>
                    </li>
                    
                    
                    
                </ul>
            </div>
            <div className='md:basis-1/4 px-2 basis-full'>

                <h3 className='text-xan text-xl font-bold'>Contact Us</h3>
                <p className='p-2'>Email: info@iodkenya.co.ke</p>
                <p className='p-2'>Whatsapp/Call :+254-757-941-028 </p>
                <div className='text-center'>
                    <h3 className='font-bold text-xan '> Connect With Us</h3>
                    
                    <div className='p-2 flex justify-center '>
                    <Link to={ "https://www.facebook.com/IODKenya" } target="_blank"> <BsFacebook  className='m-3'/>
                    </Link>


                    <Link to={ "https://twitter.com/IODKenya" } target="_blank"><BsTwitter  className='m-3'/> </Link>
                        <BsInstagram className='m-3' />
                        </div>

                </div>
            </div>
             
        </div>

    );
}

export default Footer;