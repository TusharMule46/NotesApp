import React from 'react'

const Card1 =  (props) => {
  return (
    <div className='shrink-0 h-full w-65 overflow-hidden relative rounded-3xl bg-amber-300'>
<img className=' h-full w-full object-cover ' src={props.image}alt="" />
<div className=' h-full w-full absolute top-0 left-0 justify-between p-8 flex flex-col'>
<h2 className='font-bold flex  justify-center h-10 w-10 items-center text-xl rounded-full bg-white '>{props.id}</h2>
<div>
    <p className='  text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aut nihil odit hic numquam incidunt eum at doloribus earum officia.</p>
    <div className='flex justify-between mt-5'>
        <button className='  text-white bg-blue-600 px-5 rounded-4xl font-medium'>{props.button}</button>
        <button className='text-white  text-3xl justify-center items-center   rounded-full bg-blue-600'> <i className="ri-arrow-right-line"></i></button>
    </div>
</div>
</div>
    </div>
  )
}

export default Card1