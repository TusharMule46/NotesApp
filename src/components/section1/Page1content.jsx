import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1content = (props) => {
  return (
    <div className='h-[90vh] flex  items-center px-18 py-10  gap-10'>
        <Leftcontent/>
        <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content