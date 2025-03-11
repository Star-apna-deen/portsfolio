import React from 'react'
import java from '../../public/java.jpg'
import python from '../../public/python.png'
import Cplus from '../../public/c++.png'
import express from '../../public/express.png'
import mongodb from '../../public/mongodb.svg'
import react from '../../public/react.png'
import node from '../../public/node.png'



function Portsfolio() {

  const cardItem = [
    {
      id: 1,
      logo: mongodb,
      name: 'MongoDb'
    },
    {
      id: 2,
      logo: react,
      name: 'Reactjs'
    },
    {
      id: 3,
      logo: express,
      name: 'Express'
    },
    {
      id: 4,
      logo: node,
      name: 'Nodejs'
    },
    {
      id: 5,
      logo: java,
      name: 'Java'
    },
    {
      id: 6,
      logo: Cplus,
      name: 'C++'
    },
    {
      id: 7,
      logo: python,
      name: 'Python'
    },
  ]

  return (
    <>
      <div name='Portfolio' className='max-w-screen-2xl container mx-auto md:px-20 my-20 mt-10'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>PortsFolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {
              cardItem.map(({ id, logo, name }) => (
                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                  <div>
                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                    <p className='px-2 text-grey-700 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  </div>
                  <div className='justify-around px-6 py-4 space-x-4'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Portsfolio