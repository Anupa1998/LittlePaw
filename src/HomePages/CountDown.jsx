import React from 'react'
import CountUp from 'react-countup';

const data=[
    {
        name:"Customers",
        count:"50",
    },
    {
        name:"Professionals",
        count:"700",
    },{
        name:"Products",
        count:"20",
    },{
        name:"Pets Hosted",
        count:"50",
    },
]

const CountDown = () => {
  return (
    <div className='lg:mx-24 mt-8 '>
        <div className='grid grid-cols-4 gap-8'>
            {
                data.map((ele, index)=>(
                    <div key={index} className='flex justify-center'>
                        <div className=' '>
                            <p className=' mb-2 text-center text-5xl font-bold text-[#FD7014] space-x-2'>
                                <CountUp end={ele.count} enableScrollSpy={true} />
                                <span>+</span>
                            </p>
                            <p className=' text-white text-lg text-center'>{ele.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CountDown