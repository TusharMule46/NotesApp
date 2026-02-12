import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between    py-6 px-16'>
        <h3 className='bg-black text-white px-7 py-2 rounded-full uppercase text-sm'>Target audiance</h3>
        <button className=' bg-gray-200 rounded-full px-8 py-1.5 uppercase tracking-wider text-sm'>Digital banking platform</button>
    </div>
  )
}

export default Navbar