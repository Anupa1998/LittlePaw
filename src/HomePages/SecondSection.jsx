import React from 'react'
import ServiceCard from '../component/ServiceCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data =[
    {
        name: "Pet Health Sevices",
        desc: "Keep your pet in tiptop shape with our comprehensive veterinary services. From routine check-ups and vaccinations to urgent care and preventive treatments, our skilled veterinarians are here to ensure your pet's well-being every step of the way.",
        icon: "/src/assets/PetHealthService.png"
    },
    {
        name: "Pet Boarding",
        desc: "Going away? Rest easy knowing your beloved pet is in good hands at our comfortable and safe boarding facilities. Our attentive staff will provide your pet with the love, care, and attention they deserve while you're away.",
        icon: "/src/assets/PetBoarding.png",
    },
    {
      name: "Pet Grooming",
      desc: "Treat your pet to a pampering session at our grooming salon. Our experienced groomers provide personalized grooming services tailored to your pet's breed, size, and individual needs, leaving them looking and feeling their best.",
      icon: "/src/assets/PetGrooming.png"
    },
    {
      name: "Pet Supplies",
      desc: "Stock up on all the essentials and indulgent treats for your furry friend from our extensive selection of premium pet supplies. From nutritious food and durable toys to stylish accessories, we've got everything you need to keep your pet happy and healthy.",
      icon: "/src/assets/PetSuplies.png"
    },
    {
      name: "Pet Training",
      desc: " Unlock your pet's full potential with our professional training programs. Whether you're looking to teach basic obedience commands or address specific behavioral issues, our certified trainers will work with you and your pet to achieve lasting results.",
      icon: "/src/assets/PetTrainging.png"
    },
    {
      name: "Pet Adoption",
      desc: " Find your perfect furry companion among our adorable pets awaiting their forever homes. Our adoption process is designed to ensure a seamless and rewarding experience for both you and your new family member.",
      icon: "/src/assets/PetAdoption.png"
    }
]

const SecondSection = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className='lg:mx-24 mt-32 mb-16 '>

      
      <div className=''>
        <Carousel responsive={responsive}
        >
          {
                data.map((ele, index) =>(
                  <div key={index} className=' me-8'>
                      <ServiceCard title={ele.name} description={ele.desc} icon={ele.icon}/>
                  </div>
                ))                          
          }
        </Carousel>
      </div>
      
    </div>
  )
}

export default SecondSection