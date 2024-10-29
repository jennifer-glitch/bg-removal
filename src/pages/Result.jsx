import React from 'react'
import { assets } from '../assets/assets'

function Result() {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">

        <div className="flex flex-col sm:grid grid-cols-2 gap-8">

          <div className="">
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img src={assets.image_w_bg} alt="" className='rounded-md border' />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Background Remove</p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={assets.image_wo_bg} alt="" className=''  />
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>
      {/* ..........buttons........ */}
      <div className="flex justify-end sm:justify-end items-center flex-wrap gap-4 mt-6">
        <button className='px-8 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
        <a href="" className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full'>Download image</a>
      </div>
      </div>
    </div>
  )
}

export default Result