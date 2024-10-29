import React from 'react'
import Header from '../Component/Header'
import Steps from '../Component/Steps'
import BgSlider from '../Component/BgSlider'
import Testimonial from '../Component/Testimonial'
import Upload from '../Component/Upload'

function Home() {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonial />
      <Upload />
    </div>
  )
}

export default Home