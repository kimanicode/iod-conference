import React from 'react'
import acgn from '../assets/acgn.png';
import ifc from '../assets/ifc.png';
import diligent from '../assets/diligent.png';



const Partners = () => {
  return (
    <div  className='py-3 px-8 bg-whitex'>
        <h2 className='text-center py-5  font-bold text-marian text-3xl'>Our Partners</h2>

        <div className='flex md:flex-row flex-col justify-center'>
            <div className=' p-2'>
                <img src={acgn} alt="" className='h-2/4 ' />
            </div>

            <div className='  p-2'>
                <img src={ifc} alt=""  className='h-2/4'/>
            </div>

            <div className='  p-2 '>
                <img src={diligent} alt="" className='h-2/4 ' />
            </div>

        </div>
        
    </div>
  )
}

export default Partners