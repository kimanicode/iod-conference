import React from 'react'
import pcs from '../assets/mudavadi.jpg';
import eqt from '../assets/Mwangi_profile.jpg';
import chair from '../assets/Nelson.png';

const Panelist = () => {
  return (
    <div  className='py-3 px-8 '>
        <h2 className='text-center py-5  font-bold text-marian text-3xl'>Star Panelist</h2>
        <p className='text-center px-2'>Meet the brilliant minds leading the discussions at our conference.</p>

        <div className='flex justify-center flex-wrap'>
            

            <div className='bg-slate-200 rounded-xl flex flex-col m-2 '>
                <div className='p-5 basis-1/2  '>
                    <img src={pcs} alt="" className='rounded-2xl' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>Rt. Hon. Musalia Mudavadi</h3>
                     <p className='text-xan'>Prime Cabinet Secretary</p>
                </div>

            </div>

            <div className='bg-slate-200 rounded-xl flex flex-col m-2 '>
                <div className='p-5 basis-1/2  '>
                    <img src={pcs} alt="" className='rounded-2xl' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>DR. James Mwangi</h3>
                     <p className='text-xan'>CEO  Equity Group</p>
                </div>

            </div>

            <div className='bg-slate-200 rounded-xl flex flex-col m-2 '>
                <div className='p-5 basis-1/2  '>
                    <img src={pcs} alt="" className='rounded-2xl' />
                </div>
                <div className='text-center basis-1/2 py-2'>
                     <h3 className='font-bold text-marian'>Dr. Nelson Kuria,OGW, fIoDk   </h3>
                     <p className='text-xan'>Chairman, Institute of Directors</p>
                </div>

            </div>


        </div>


        <div className='text-center py-5 '>
                 <button className='bg-xan py-3 px-5 text-white rounded-xl text-center hover:bg-xan/50 '>
                    See All Speakers
                </button>
        </div>


        <div className=' py-5 '>
                 <h3 className='text-xl  md:text-5xl font-bold text-marian py-3'> 
                Ready to redefine the world of corporate governance?<br /> Secure your spot now!
                </h3>



                 <div className='flex md:flex-row flex-col m'>
                
                 <button className='bg-xan py-2 px-5  m-2 text-white rounded-xl text-center hover:bg-xan/50 '>
                    Book Now
                </button>

                <button className='bg-xan py-2 px-5 m-2 text-white rounded-xl text-center hover:bg-xan/50 '>
                    Learn more 
                </button>
                 </div>
        </div>

        




      

    </div>
  )
}

export default Panelist