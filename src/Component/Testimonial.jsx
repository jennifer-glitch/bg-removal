import React from 'react'
import { testimonialsData } from '../assets/assets'

function Testimonial() {
  return (
    <div className=''>
      <h1 className="mb-12 sm:mb-20 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">
        Customer Testimonial
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item,index)=>(
            <div key={index} className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700">
                <p className="text-4xl text-gray-500">"</p>
                <div className="text-sm text-gray-500">{item.text}</div>
                <div className="flex items-center mt-5 gap-3">
                    <img src={item.image} alt="" className='w-9 rounded-full' />
                   <div className="">
                   <p className="">{item.author}</p>
                   <p className="text-sm text-gray-600">{item.jobTitle}</p>
                   </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
