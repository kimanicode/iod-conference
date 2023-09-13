import React from 'react'
import Banner from '../assets/nairobi.jpeg';


const Info = () => {
  return (
    <div className='py-3 px-8'>

        <div className='flex flex-col md:flex-row '>

            <div className='basis-1/2 order-last py-2 md:order-first'>
                <img src={Banner}  alt="" className=' rounded-2xl' />


            </div>
            <div className='basis-1/2 flex flex-col px-3 justify-center'>
                <h3 className='text-center font-bold text-marian  md:text-3xl text-2xl' >About the conference</h3>
                <p className=''>
                Welcome to the Annual Corporate Governance Conference and Directors Golf Conference, a prestigious 3-day event that promises an enriching experience for industry leaders, corporate professionals, and directors alike. <br/><br/><br/> This year, our conference takes place at the splendid <span className='font-bold text-marian'> Windsor Golf Hotel</span>, set against the backdrop of lush greens and exquisite facilities. Our theme, "Navigating the Future," encapsulates the dynamic challenges and opportunities in the world of corporate governance. From <span className='font-bold text-marian '>1<sup>st</sup> to 3 <sup>rd</sup> </span>November you'll embark on a journey of discovery, networking, and knowledge-sharing that will equip you to lead effectively in the ever-evolving corporate landscape. <br/><br/>
                </p>
                
                <button className='p-3 bg-xan text-white w-[100px] hover:bg-xan/50 hover:text-marian
                '>Book Now</button>


            </div>


        </div>










        <h2 className='text-center py-7  font-bold text-marian text-3xl'>Diverse Stellar Panels</h2>
        <div className='flex  text-center  justify-center gap-6 flex-wrap '>
            <div className='md:basis-1/4 p-10 border rounded-lg bg-white shadow-md hover:bg-slate-100 '>
                <h3  className='text-alabaster font-bold'>Engaging Debates</h3>
                <p>Witness high-level discussions between industry giants.</p>

            </div>

            <div className='md:basis-1/4  p-10 border rounded-lg  bg-white shadow-md hover:bg-slate-100'>
                <h3  className='text-alabaster font-bold'>Expert Insights</h3>
                <p>Learn from top corporate minds and visionaries.</p>

            </div>

            <div className='md:basis-1/4 p-10 border rounded-lg  bg-white shadow-md hover:bg-slate-100'>
                <h3 className='text-alabaster font-bold'>Networking Galore</h3>
                <p>Forge meaningful connections with like-minded professionals.</p>

            </div>

            <div className='md:basis-1/4 p-10 border rounded-lg bg-white shadow-md hover:bg-slate-100'>
                <h3  className='text-alabaster font-bold'>Breakout Sessions</h3>
                <p>Dive deep into specialized topics with experts.</p>

            </div>

            <div className='md:basis-1/4 p-10 border rounded-lg  bg-white shadow-md hover:bg-slate-100'>
                <h3 className='text-alabaster font-bold'>In-Depth Workshops</h3>
                <p>These sessions offer a deep dive into specific topics and provide actionable takeaways.</p>

            </div>

            <div className='md:basis-1/4 p-10 border rounded-lg bg-white shadow-md hover:bg-slate-100'>
                <h3  className='text-alabaster font-bold'>Director's Golf Tournament</h3>
                <p>Network with fellow directors, enjoy a day on the greens, and compete for fantastic prizes.</p>

            </div>

        </div>
    </div>
  )
}

export default Info