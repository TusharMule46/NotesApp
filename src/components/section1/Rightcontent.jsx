import React from 'react'
import Card1 from './Card1'
const Rightcontent = ( props) => {
  return (
    <div id='Right' className='rounded-4xl h-full w-3/4 p-8 flex flex-nowrap gap-10 overflow-x-auto'>
       {props.users.map(function(elem,idx){
        return  <Card1 image={elem.image}
                       button={elem.tag}
                       key={idx}
                       id={idx+1}
                        />
     
         
       })}
    </div>
  )
}

export default Rightcontent