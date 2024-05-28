import React from 'react'
import img from '/src/assets/2-removebg-preview.png'

const Navbar = () => {
  return (
    <div className='lg:px-24 fixed flex justify-between items-center z-50 w-full '>
        <div>
            <img src={img} alt=""  className='h-24'/>
        </div>

        <div className=''>
            <ul className='flex space-x-8 text-lg font-semibold text-white'>
                <li className=' cursor-pointer'>Home</li>
                <li className=' cursor-pointer'>About</li>
                <li className=' cursor-pointer'>Service</li>
                <li className=' cursor-pointer'>Product</li>
                <li className=' cursor-pointer'>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar