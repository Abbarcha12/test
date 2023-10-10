import React from "react";

const MiniCard = ({ title, amount, month, percent }) => {
  return (
    <div className='MiniCard md:w-[289px] w-[80%] p-6 my-4'>
      <p className='text-[18px] font-[500] p-1'>{title}</p>
      <p className='text-[24px] font-[600] pb-1'>
        {amount}/ <span className='text-[18px] font-[500]'>{month}</span>
      </p>
      <p className='circle flex justify-center items-center text-[16px] p-1 '>
        save {percent}
      </p>
      <button className='flex GetStarted justify-start items-center p-1 mt-4'>
        Get Started
       
          <svg
          
          className="GetStarted ml-3"
            width='20'
            height='17'
            viewBox='0 0 20 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20 8.33333L11.6667 -3.64262e-07L10.4917 1.175L16.8083 7.5L-3.27835e-07 7.5L-4.00688e-07 9.16667L16.8083 9.16667L10.4917 15.4917L11.6667 16.6667L20 8.33333Z'
              fill='black'
            />
          </svg>
        
      </button>
    </div>
  );
};

export default MiniCard;
