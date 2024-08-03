import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
   <ul className='flex flex-row justify-center gap-10 py-6 bg-[#181d30] '>
   <Link to="/"><li className='text-base text-white font-bold font-quicksand md:text-xl text-[#d49820]'>About</li></Link> 
   <Link to="/galary"> <li className='text-base text-white font-bold font-quicksand md:text-xl text-[#d49820]'>Galary</li></Link>
   </ul>
    </div>
  )
}

export default Navbar
