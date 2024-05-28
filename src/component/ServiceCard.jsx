import React, { useState } from 'react'

const ServiceCard = ({title, description, icon}) => {
  const[hover, setHover] = useState(false);
  return (
    <div>
        <div onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)} className={`max-w-96 duration-500 ${hover ?  'bg-[#FD7014]':'bg-[#EEEEEE]' } rounded-2xl px-8 pt-16 pb-8 relative min-h-80 mt-16 h-40`}>

            <div className='flex  justify-center absolute  w-full h-full top-0 left-0'>
              <div className={`${hover ? 'bg-[#EEEEEE]' : 'bg-[#FD7014]'} duration-500  w-24 h-24 rounded-full absolute -top-12 flex justify-center items-center`}>
                    <img src={icon} alt="" className='w-16 h-16' />
              </div>

            </div>

            <h1 className='text-xl text-center font-semibold'>
                {title}
            </h1>
             <br />
            <p className=' text-justify'>
              {description}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard