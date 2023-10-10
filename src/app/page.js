"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Card from "./components/Card";
import Image from "next/image";
import Carsoul from "./components/Carsoul";
import MiniCard from "./components/MiniCard";
const Dropdown = ({ label, options, visible, onClick, width }) => (
  <div
    className='flex-none p-2'
    style={{
      width,
    }}>
    <p className='text-[16px] text-[#fff] mb-2'> {label} </p>{" "}
    <div
      onClick={onClick}
      className='flex flex-row justify-between  px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600'>
      <span className='select-none'> {label} </span>{" "}
      {visible ? (
        <svg
          className='w-6 h-6 stroke-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
      ) : (
        <svg
          className='w-6 h-6 stroke-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      )}{" "}
    </div>{" "}
    <div
      className={`${
        visible ? "" : "hidden"
      } w-48 py-2 mt-2 bg-white rounded-lg shadow-xl absolute`}>
      {" "}
      {options.map((option, index) => (
        <a
          key={index}
          href='#'
          className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>
          {" "}
          {option}{" "}
        </a>
      ))}{" "}
    </div>{" "}
  </div>
);

export default function Home() {
  const [dropdownStates, setDropdownStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleDropdown = (id) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <main>
      <Header />
      <div className="bg-[url('/bg.png')] md:h-[600px] h-auto pb-6 flex justify-center items-center md:p-0 p-5">
        <div className='self-end'>
          <div className='container border border-[#fff] md:h-[163px] h-auto sm:w-[974px] w-[100%] border-dashed flex justify-center items-center md:p-0 p-5'>
            <div className='md:h-[139px] h-auto sm:w-[952px] w-[100%] rounded-md bg-[#ED6C0E] flex flex-col  md:flex-row justify-evenly  items-center align-middle md:p-0 p-3 '>
           <div className="flex justify-between">
           <div>
                <Dropdown
                  label='Gender'
                  options={["Female", "Male", "Other"]}
                  visible={dropdownStates[1]}
                  onClick={() => toggleDropdown(1)}
                  width='200px'
                />
              </div>
              <div>
                <Dropdown
                  label='Age'
                  options={["33", "22", "27"]}
                  visible={dropdownStates[2]}
                  onClick={() => toggleDropdown(2)}
                />{" "}
              </div>{" "}
           </div>

              <div>
                <p className='text-[18px] text-[#fff] mt-10 '> To </p>{" "}
              </div>{" "}
             <div className="flex justify-between">
             <div>
                <Dropdown
                  label='Age'
                  options={["33", "22", "27"]}
                  visible={dropdownStates[4]}
                  onClick={() => toggleDropdown(4)}
                />{" "}
              </div>{" "}
              <div>
                <Dropdown
                  label='Religion'
                  options={["Item 1", "Item 2", "Item 3"]}
                  visible={dropdownStates[3]}
                  onClick={() => toggleDropdown(3)}
                />{" "}
              </div>{" "}
             </div>
              <div>
                <button className='text-[16px] text-[#fff] bg-[#0F2354] px-5  py-3 rounded mt-7'>
                  Search Partner{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className='bg-[#fff] justify-center flex flex-col  mx-auto'>
        <h1 className='font-[700] text-[40px] text-center p-10 mt-5 '>
          Why Choose Online Vaishakhi <br /> Matermony{" "}
        </h1>{" "}
        <p className='text-[16px] max-w-[741px] text-center m-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className='card container my-10 flex flex-wrap mx-auto md:justify-between justify-center'>
          <Card
            title='Find your best  
    match '
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <Card
            Icon={
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.736 28L14 27L18 20H24C24.2628 20.0004 24.523 19.9489 24.7658 19.8486C25.0087 19.7482 25.2293 19.6009 25.4151 19.4151C25.6009 19.2293 25.7482 19.0087 25.8486 18.7658C25.9489 18.523 26.0004 18.2628 26 18V4C26.0004 3.73725 25.9489 3.477 25.8486 3.23417C25.7482 2.99134 25.6009 2.7707 25.4151 2.58491C25.2293 2.39911 25.0087 2.25181 24.7658 2.15144C24.523 2.05107 24.2628 1.99961 24 2H4C3.73725 1.99961 3.477 2.05107 3.23417 2.15144C2.99134 2.25181 2.7707 2.39911 2.58491 2.58491C2.39911 2.7707 2.25181 2.99134 2.15144 3.23417C2.05107 3.477 1.99961 3.73725 2 4V18C1.99961 18.2628 2.05107 18.523 2.15144 18.7658C2.25181 19.0087 2.39911 19.2293 2.58491 19.4151C2.7707 19.6009 2.99134 19.7482 3.23417 19.8486C3.477 19.9489 3.73725 20.0004 4 20H13V22H4C2.93913 22 1.92172 21.5786 1.17157 20.8284C0.421428 20.0783 1.25074e-07 19.0609 1.25074e-07 18V4C-0.000131255 3.47468 0.103242 2.95447 0.304214 2.46911C0.505187 1.98375 0.79982 1.54274 1.17128 1.17128C1.54274 0.79982 1.98375 0.505187 2.46911 0.304214C2.95447 0.103242 3.47468 -0.000131255 4 1.25074e-07H24C24.5253 -0.000131255 25.0455 0.103242 25.5309 0.304214C26.0163 0.505187 26.4573 0.79982 26.8287 1.17128C27.2002 1.54274 27.4948 1.98375 27.6958 2.46911C27.8968 2.95447 28.0001 3.47468 28 4V18C28 19.0609 27.5786 20.0783 26.8284 20.8284C26.0783 21.5786 25.0609 22 24 22H19.165L15.736 28Z'
                  fill='#ED6C0E'
                />
              </svg>
            }
            title='Direct Communication '
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <Card
            Icon={
              <svg
                width='27'
                height='27'
                viewBox='0 0 27 27'
                fill='#ED6C0E'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.6667 7.94444H17.6806M1 5.16667C1 4.0616 1.43899 3.00179 2.22039 2.22039C3.00179 1.43899 4.0616 1 5.16667 1H21.8333C22.9384 1 23.9982 1.43899 24.7796 2.22039C25.561 3.00179 26 4.0616 26 5.16667V21.8333C26 22.9384 25.561 23.9982 24.7796 24.7796C23.9982 25.561 22.9384 26 21.8333 26H5.16667C4.0616 26 3.00179 25.561 2.22039 24.7796C1.43899 23.9982 1 22.9384 1 21.8333V5.16667Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M1 19.0556L7.94444 12.1111C9.23333 10.8708 10.8222 10.8708 12.1111 12.1111L19.0556 19.0556'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M16.2778 16.2778L17.6667 14.8889C18.9556 13.6487 20.5444 13.6487 21.8333 14.8889L26 19.0556'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            title='Add More Photos'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <Card
            Icon={
              <svg
                width='23'
                height='27'
                viewBox='0 0 23 27'
                fill='#ED6C0E'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.202 21.1923V22.1538C15.202 23.1739 14.8033 24.1522 14.0935 24.8735C13.3838 25.5948 12.4211 26 11.4174 26C10.4136 26 9.45097 25.5948 8.74121 24.8735C8.03144 24.1522 7.6327 23.1739 7.6327 22.1538V21.1923M21.5697 19.235C20.0512 17.3462 18.979 16.3846 18.979 11.1773C18.979 6.40865 16.5829 4.70974 14.6107 3.88462C14.3487 3.77524 14.1021 3.52404 14.0223 3.2506C13.6763 2.05409 12.7065 1 11.4174 1C10.1282 1 9.15781 2.05469 8.81541 3.2518C8.73558 3.52825 8.48899 3.77524 8.22702 3.88462C6.25248 4.71094 3.85868 6.40385 3.85868 11.1773C3.85572 16.3846 2.7836 17.3462 1.265 19.235C0.635796 20.0174 1.18694 21.1923 2.28745 21.1923H20.5532C21.6478 21.1923 22.1954 20.0138 21.5697 19.235Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            }
            title='Get Notified'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </div>
      </div>
      <div className='grid md:grid-cols-2  grid-cols-1 '>
        <div className="bg-[url('/bg2.png')]  md:bg-cover bg-contain bg-no-repeat pb-5 md:h-[500px] h-[300px] "></div>
        <div className="bg-[url('/bg3.png')] relative h-[500px]  bg-cover bg-no-repeat bg-right ">
          <div className='bgDark absolute'>
            <p className='md:text-[36px] text-[24px] font-[500] text-[#ED6C0E] pb-2 '>
              About Us
            </p>
            <p className='md:text-[36px] text-[24px] font-[700] pb-2'>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </p>
            <p className='md:text-[18px] text-[14px] font-[400] max-w-[512px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-[#031237] p-4 flex flex-wrap justify-center items-center '>
        <p className='md:text-[36px] text-[24px] font-[600] text-[#fff] '>
          Find your Partner here
        </p>
        <button className='p-3 text-[16px] text-[#fff] border rounded-md ml-7'>
          Get Started
        </button>
      </div>
      <div >
      <Carsoul />
      </div>

      <div className='flex flex-wrap md:mt-0  mt-[50px] justify-center flex-col items-center py-6 bg-gray-500 space-y-3'>
        <p className='md:text-[36px] text-[24px] text-center text-[#FFF] font-[700] '>
          Download the India’s best <br /> Matermomy website
        </p>
        <p className='md:text-[18px] text-[14px]  text-center text-[#FFF] font-[600] max-w-[646px] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex flex-wrap justify-center '>
          <button className='flex justify-between items-center mt-2 md:mr-4 bg-[#031237] border rounded-md px-7 py-2 '>
            <div>
              <svg
                width='37'
                height='40'
                viewBox='0 0 37 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M19.9132 19.1305L26.4894 12.5543L5.24852 0.616111C3.84076 -0.144479 2.52196 -0.251228 1.3655 0.580528L19.9132 19.1305ZM27.6103 26.8298L34.4467 22.9846C35.7811 22.2373 36.5128 21.1787 36.5128 20.0045C36.5128 18.8325 35.7811 17.7716 34.449 17.0244L28.2597 13.5484L21.2921 20.5138L27.6103 26.8298ZM0.222395 2.19734C0.0800619 2.63546 0 3.12472 0 3.6607V36.3638C0 37.2112 0.186812 37.9406 0.524852 38.5211L18.5322 20.5115L0.222395 2.19734ZM19.9132 21.8904L2.006 39.7998C2.34849 39.9311 2.71766 40 3.10685 40C3.80073 40 4.52351 39.7954 5.25964 39.3862L25.8423 27.8283L19.9132 21.8904Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='flex flex-col ml-4 '>
              <p className='  text-[16px] text-center text-[#FFF] font-[400]'>
                Download on the
              </p>
              <p className='text-[20px] text-center text-[#FFF] font-[700] '>
                Play store
              </p>
            </div>
          </button>
          <button className='flex justify-between items-center mt-2 md:ml-4 bg-[#031237] border rounded-md px-7 py-2 '>
            <div>
              <svg
                width='34'
                height='40'
                viewBox='0 0 34 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M28.0789 38.3952C25.9014 40.506 23.5239 40.1727 21.2353 39.1728C18.8134 38.1507 16.5914 38.1063 14.0362 39.1728C10.8366 40.5504 9.14791 40.1505 7.23704 38.3952C-3.60604 27.2188 -2.00624 10.1987 10.3033 9.57657C13.3029 9.7321 15.3916 11.2208 17.1469 11.3541C19.7688 10.8209 22.2796 9.28772 25.0792 9.48769C28.4344 9.75432 30.9674 11.0875 32.6338 13.4872C25.7014 17.6422 27.3456 26.7744 33.7004 29.3296C32.4339 32.6625 30.7896 35.9732 28.0566 38.4174L28.0789 38.3952ZM16.9247 9.44325C16.5914 4.48832 20.6131 0.39995 25.2348 0C25.8791 5.73261 20.0354 9.99874 16.9247 9.44325Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='flex flex-col ml-4 '>
              <p className='  text-[16px] text-center text-[#FFF] font-[400]'>
                Download on the
              </p>
              <p className='text-[20px] text-center text-[#FFF] font-[700] '>
                Play store
              </p>
            </div>
          </button>
        </div>
      </div>
      {/* Our plans Section */}
      <div className='w-[90%] mx-auto my-7'>
        <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
          <div>
            <p className='text-[24px] text-[#ED6C0E] font-[600] '>Our Plans</p>
            <p className='md:text-[36px] text-[24px] text-[#000] font-[700] '>
              Explore Current top deals
            </p>
            <p className='text-[18px] text-[#000] font-[500] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
            <div className=' bg-[#FFEEE1] p-6 my-6'>
              <div className='bg-[#fff] p-4 w-[321px] flex md:justify-between justify-center'>
                <button className='bg-[#0F2354] text-[18px] font-[500] text-[#fff] px-8 py-2 rounded-md'>
                  Monthly
                </button>
                <button className='text-[18px] font-[500] text-[#000] px-8 py-2 rounded-md'>
                  Monthly
                </button>
              </div>
              <ul className="md:text-[18px] text-[14px] ml-4 font-[400] space-y-4 py-5 list-disc	">
              <li>
              View Mobile Numbers-50+50 varified
              </li>
              <li>
              Persalised message to 50+10 persons
              </li>
              <li>
              Chat with proposals directly
              </li>
            </ul>
            </div>
          
          </div>
          <div className="flex flex-wrap md:justify-between justify-center">
            <MiniCard
            title='basic'
            amount="1500"
            month="2 month"
            percent='10%'
            
            />
              <MiniCard
            title='basic'
            amount="1500"
            month="2 month"
            percent='10%'
            />
              <MiniCard
            title='basic'
            amount="1500"
            month="2 month"
            percent='10%'
            />
              <MiniCard
            title='basic'
            amount="1500"
            month="2 month"
            percent='10%'
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
