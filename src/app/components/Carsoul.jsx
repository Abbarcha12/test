'use client'
import React, { useState, useEffect } from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

const Carsoul = () => {
  const [visibleSlides, setVisibleSlides] = useState(2);
  const [visibleSlides1, setVisibleSlides1] = useState(50);


  useEffect(() => {
    // Update the number of visible slides based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
        setVisibleSlides1(170)
         // For smaller screens, show one slide
      } else {
        setVisibleSlides(2);
        setVisibleSlides1(80) // For larger screens, show two slides
      }
    };

    // Initial call and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='w-[90%] mx-auto '>
      <CarouselProvider
      className="carousel-container"
        naturalSlideWidth={100} // Set the width to accommodate two slides (adjust this value as needed)
        naturalSlideHeight={ visibleSlides1}
        totalSlides={3}
        visibleSlides={visibleSlides}>
        <div className='flex flex-wrap justify-between md:flex-row flex-col items-center py-10'>
          <div>
            <p className='text-[24px] text-[#ED6C0E] font-[600] '>
              Testimonials
            </p>
            <p className='md:text-[36px] text-[24px]  text-[#000] font-[600] '>
              WHAT PEOPLE ARE SAYING
            </p>
          </div>
          <div className='flex justify-between md:mt-0  mt-10 '>
            <div className='bg-gray-200 h-[40px] w-[40px] rounded-lg justify-center items-center flex mr-3'>
              <ButtonBack>
                <svg
                  width='10'
                  height='18'
                  viewBox='0 0 10 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 1L1 9L9 17'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </ButtonBack>
            </div>
            <ButtonNext className='h-[40px] w-[40px] bg-[#0F2354] rounded-lg justify-center items-center flex ml-3 '>
              <svg
                width='10'
                height='18'
                viewBox='0 0 10 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0.999999 1L9 9L1 17'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </ButtonNext>
          </div>
        </div>
        <Slider>
           <Slide index={1} className="Carousel-slide">
            <div>
              <div className='flex justify-start items-start'>
                <div>
                  <Image height={60} width={60} src={"/profile.png"} />
                </div>
                <div className='ml-5'>
                  <p className='text-[18px] font-[500] '>James Wlliams</p>
                  <p className='text-[16px] font-[400] '>Business Men</p>
                </div>
              </div>
              <div className='bg-[#ED6C0E] rounded-lg p-10 mt-8 m-3'>
                <p className='text-[#ffff]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.{" "}
                </p>
              </div>
            </div>
          </Slide>
          <Slide index={2} className="Carousel-slide">
            <div>
              <div className='flex justify-start items-start'>
                <div>
                  <Image height={60} width={60} src={"/profile.png"} />
                </div>
                <div className='ml-5'>
                  <p className='text-[18px] font-[500] '>James Wlliams</p>
                  <p className='text-[16px] font-[400] '>Business Men</p>
                </div>
              </div>
              <div className='bg-[#ED6C0E] rounded-lg p-10 mt-8 m-3'>
                <p className='text-[#ffff]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.{" "}
                </p>
              </div>
            </div>
          </Slide>
             <Slide index={3} className="">
            <div>
              <div className='flex justify-start items-start'>
                <div>
                  <Image height={60} width={60} src={"/profile.png"} />
                </div>
                <div className='ml-5'>
                  <p className='text-[18px] font-[500] '>James Wlliams</p>
                  <p className='text-[16px] font-[400] '>Business Men</p>
                </div>
              </div>
              <div className='bg-[#FAE7D9] rounded-lg p-10 mt-8 m-3'>
                <p className='text-[#000]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt.{" "}
                </p>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default Carsoul;
