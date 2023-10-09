import React from 'react'
import pcs from '../assets/mudavadi.jpg';
import eqt from '../assets/Mwangi_profile.jpg';
import chair from '../assets/chairman.png';
import { CiLocationOn } from "react-icons/ci";
import { useNavigate , Link} from "react-router-dom";
import windsor from '../assets/windsor.jpg';

const Panelist = () => {
    const navigate = useNavigate();

    const seeSpeakers =()=>
    {
        navigate('/speakers')
    }
   
  return (
    <div  className='py-3 px-8 '>
        <h2 className='text-center py-5  font-bold text-marian text-3xl'>Star Panelist</h2>
        <p className='text-center px-2'>Meet the brilliant minds leading the discussions at our conference.</p>

        <div className='flex justify-center flex-wrap'>
            

            <div className='bg-slate-200 hover:bg-slate-100 rounded-xl flex flex-col m-2 md:basis-1/4 '>
                <div className=' basis-1/2  '>
                    <img src={pcs} alt="" className='rounded-2xl rounded-b-none' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>Rt. Hon. Musalia Mudavadi</h3>
                     <p className='text-xan'>Prime Cabinet Secretary</p>
                </div>

            </div>

            <div className='bg-slate-200 rounded-xl   hover:bg-slate-100 flex flex-col m-2   md:basis-1/4 '>
                <div className=' basis-1/2  '>
                    <img src={eqt} alt="" className='rounded-2xl rounded-b-none' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>DR. James Mwangi</h3>
                     <p className='text-xan'>CEO  Equity Group</p>
                </div>

            </div>
            <div className='bg-slate-200 rounded-xl   hover:bg-slate-100 flex flex-col m-2   md:basis-1/4 '>
                <div className=' basis-1/2  '>
                    <img src={chair} alt="" className='rounded-2xl  w-full rounded-b-none' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>Dr. Nelson Kuria</h3>
                     <p className='text-xan'>Chairman, IoDK </p>
                </div>

            </div>

            {/* <div className='bg-slate-200 rounded-xl flex flex-col m-2   hover:bg-slate-100 md:basis-1/4 '>
                <div className='   '>
                    <img src={chair} alt="" className='rounded-2xl' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>Dr. Nelson Kuria,OGW, fIoDk   </h3>
                     <p className='text-xan'>Chairman, Institute of Directors</p>
                </div>

            </div> */}


        </div>


        <div className='text-center py-5 '>
                 <button className='bg-xan py-3 px-5 text-white rounded-xl text-center hover:bg-xan/50 ' onClick={seeSpeakers}>
                    See All Speakers
                </button>
        </div>

        <div className='flex flex-col md:flex-row  py-2 '>

            <div className='basis-1/2 order-last py-2 '>
                <img src={windsor}  alt="" className=' ' />


            </div>
            <div className='basis-1/2 flex flex-col px-3 justify-center'>
                <span className='uppercase text-gray-600 py-2'>Conference Venue</span>
                <h3 className='font-bold text-marian   py-2 md:text-5xl text-2xl' >Hosted at the Best<br></br>
                Golf Place in Kenya</h3>
                <p className='py-2'>
                Windsor Golf Hotel & Country Club is a prestigious hotel and golf resort located in Nairobi, Kenya. It is renowned for offering a luxurious and tranquil setting that combines the beauty of nature with top-notch amenities for both leisure and business travelers. Here are some key highlights about the Windsor Golf Hotel
                </p>
                
                <div className='py-2'>
                <button className='p-3 bg-xan text-white w-[100px] hover:bg-xan/50 hover:text-marian
                '>Book Now</button>

                </div>

            </div>


        </div>

        {/* <div className="  py-3 w-full relative h-600px">
        <div className=''> <img src={windsor} alt="" className='w-full md:h-[300px] rounded-xl' /></div>
        <div className='absolute bottom-5 px-4 py-3 bg-polygreen/50 w-full'>
            
            <h1 className='text-white  md:text-3xl text-2xl font-bold uppercase flex items-center'>Windsor Golf Hotel  </h1>
            <p className='text-xan font-bold text-2xl'>1<sup className=''>st</sup>- 3<sup className='sups'>rd</sup> November,2023</p>
        </div>
        
       
    </div> */}


        
         


        <div className=' py-5 '>
                 <h3 className='text-xl  md:text-5xl font-bold text-marian py-3'> 
                Ready to redefine the world of corporate governance?<br /> Secure your spot now!
                </h3>

                
  


                 <div className='flex md:flex-row flex-col m'>
                 <Link to={ "#" } target="_blank">
                 <button className='bg-xan py-2 px-5  font-bold m-2 text-white rounded-xl text-center hover:bg-xan/50 ' >
                    Book Now
                </button>
                </Link>



                <Link to={ "https://iodkenya.com/calendar/Conference/annual-corporate-governance-conference-2023" } target="_blank">
                    <button className='bg-transparent   border border-marian py-2 px-5 m-2 text-marian hover:text-xan  font-bold rounded-xl text-center hover:border-xan/50 '>
                    Learn more 
                    </button>

                </Link>
                 </div>
        </div>

        

        




      

    </div>
  )
}

export default Panelist