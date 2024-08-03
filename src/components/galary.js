import React from 'react'
import img1 from "../components/assets/img-1.jpg"
import img2 from "../components/assets/img-2.jpg"
import img3 from "../components/assets/img-3.jpg"
import img4 from "../components/assets/img-4.jpg"
import img5 from "../components/assets/img-5.jpg"
import img6 from "../components/assets/img-6.jpg"
import img7 from "../components/assets/img-7.jpg"
import img8 from "../components/assets/img-9.jpg"
import img9 from "../components/assets/img-10.jpg"
import img11 from "../components/assets/img-11.jpg"


const Galary = () => {
  return (
    <div className='px-10 md:px-20 lg:px-60 bg-[#181d30] grid grid-cols-3 gap-4 py-10'>
      <img className='' src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <img src={img6}/>
      <img src={img7}/>
      <img className='col-span-2 object-cover h-full' src={img11}/>
      <img src={img8}/>
      <img src={img9}/>

    </div>
  )
}

export default Galary
