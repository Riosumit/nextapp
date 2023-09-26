import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[340px] bg-[#212832] text-white'>
      <h1 className='font-medium text-2xl ml-8 mt-5'>LOGO</h1>
      <ul className='mt-32 font-semibold'>
        <a href="/"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>HOME</li></a>
        <a href="services"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>Services</li></a>
        <a href="about"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>About</li></a>
        <a href="contact"><li className='my-9 ml-1 mr-3 pl-5 py-1 bg-[#2f2e40] rounded-xl text-sm text-[#bbbbc8]'>Contact</li></a>
      </ul>
    </div>
  )
}

export default Navbar
