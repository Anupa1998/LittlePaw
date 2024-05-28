import React from 'react'


const data =[
    {
        title: "Quality Product",
        desc: "Top-quality products from trusted brands, including natural and organic options.",
        icon: "/src/assets/WCUQualityProduct.png",
    },
    {
        title: "Exceptional Customer Service",
        desc: "Knowledgeable staff ready to help with friendly, responsive customer support.",
        icon: "/src/assets/WCUCustomerService.png",
    },
    {
        title: "Community Engagement",
        desc: "Active involvement in local pet community and adoption support.",
        icon: "/src/assets/WCUCommunityEngagement.png",
    },
    {
        title: "Health and Wellness Focus",
        desc: "Optimize pet health with expert tips on nutrition, grooming, and preventive care.",
        icon: "/src/assets/WCUHealth.png",
    },
]

function ThirdSection() {
  return (
    <div className='mt-32 lg: mx-24 flex'>
        <div className='flex items-center '>
            <img src="src/assets/3rdsecti.png" alt="" className=' drop-shadow-2xl w-[800px] mb-16' />
        </div>
        
        <div className=' flex items-center'>
            <div className=' space-y-8'>
                    <h1 className=' text-white text-2xl font-semibold mt-8 ms-4'>Why Choosing Us?</h1>

                    <div className='grid grid-cols-2 gap-12 text-white'>
                    {
                        data.map((props, index) => (
                                <div className=' flex space-x-4'>
                                    <div className='bg-[#FD7014] min-w-24 min-h-24 rounded-full flex justify-center items-center'>
                                        <img src={props.icon} alt="" className=' w-16 h-16' />
                                    </div>
                                    <div className='flex items-center' >
                                        <div>
                                            <h1 className=' font-semibold'>{props.title}</h1>
                                            <p>{props.desc}</p>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection