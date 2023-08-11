import React from 'react'

const Info = () => {
  return (
    <div className='py-3 px-8'>
        <h2 className='text-center py-7  font-bold text-marian text-3xl'>Diverse Stellar Panels</h2>
        <div className='flex justify-center text-center flex-wrap '>
            <div className='md:basis-1/2 p-3'>
                <h3  className='text-alabaster font-bold'>Engaging Debates</h3>
                <p>Witness high-level discussions between industry giants.</p>

            </div>

            <div className='md:basis-1/2  p-3'>
                <h3  className='text-alabaster font-bold'>Expert Insights</h3>
                <p>Learn from top corporate minds and visionaries.</p>

            </div>

            <div className='md:basis-1/2 p-3 '>
                <h3 className='text-alabaster font-bold'>Networking Galore</h3>
                <p>Forge meaningful connections with like-minded professionals.</p>

            </div>

            <div className='md:basis-1/2 p-3'>
                <h3  className='text-alabaster font-bold'>Breakout Sessions</h3>
                <p>Dive deep into specialized topics with experts.</p>

            </div>

        </div>
    </div>
  )
}

export default Info