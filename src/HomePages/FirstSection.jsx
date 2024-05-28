import React from 'react'

const FirstSection = () => {
  return (
    <div className="w-full h-full ">
      <div className='w-full '>
          <img src="/src/assets/banner.jpg" alt="Wallpaper" className=''/>
          
          <div className='absolute top-0 w-1/2 h-full z-50'>
            <div className='w-auto absolute text-white top-52 left-40 space-y-4'>
                <h1 className='lg:text-6xl text-right text-white z-0 font-semibold '>Best <br /> Pet <br /> Shop</h1>
                <p className='text-xl font-medium'>Everything Your Pet Need</p>

                <div className='my-auto   py-1 text-lg flex items-end justify-end'>
                  <div className=' bg-[#222831] rounded-lg cursor-pointer  border-2 border-white hover:bg-inherit duration-200'>
                    <p className='text-center py-2 px-4 font-medium'>
                      Learn More
                    </p>
                  </div>
                  </div>
            </div>
          </div> 
      </div>

      {/* <div className='absolute bottom-0 w-full  h-32 bg-gradient-to-t  from-[#222831]'></div> */}
    </div>
  )
}
export default FirstSection;