import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import pic from "../../public/photo.avif";

import { ReactTyped, Typed } from "react-typed";

function Home() {
    return (
        <>
            <div name='Home'
                className='max-w-screen-2xl container mx-auto md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-3xl'>
                            <h1>Hello, I'm a</h1>
                            {/*<span className='text-red-700 font-bold'>Developer</span>*/}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae blanditiis quos eum repellendus magnam corrupti. Pariatur dolore excepturi, impedit nisi quis nulla fugit aliquid eveniet maxime rem placeat hic.</p>
                        <br />
                        {/*social media icon*/}
                        <div className='flex flex-col md:flex-row  items-center justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    {/*inko seprate li me isliye rakha hai kyunki inme link create kerna hai*/}
                                    <li>
                                        <a href='https://www.facebook.com' target="_blank">

                                            <FaSquareFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com' target="_blank">
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com' target="_blank">
                                            <IoLogoYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                    <li>
                                        <a href='https://www.telegram.com' target="_blank">
                                            <FaTelegram className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    < FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={pic} className='rounded-full md:w-[400px] md:h-[400px]' />
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}


export default Home
