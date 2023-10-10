import React from 'react'

const Card = ({title,desc,Icon}) => {
  return (
    <div className='md:min-h-[288px] h-auto w-[287px] rounded-md flex flex-col justify-between p-4 my-3 space-y-3 Card' >
        <div className='h-[60px] w-[60px] flex justify-center items-center Square rounded-md' >
{Icon}
        </div>
        <p className='text-[24px] font-[700] '>{title}</p>
        <p className='md:max-w-screen-[243px] text-[14px] '>{desc}</p>
    </div>
  )
}

export default Card