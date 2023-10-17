import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.div className={`flex items-center justify-center h-[88vh]`} >
   
    <div className='text-center bg-gray-100 p-7 rounded-md opacity-80 sm:mx-[400px] mx-[150px] '>
    <Tilt options={{ max: 45,
            scale: 1,
            speed: 450,}} >
      <h1 className='text-7xl pb-2'>India's Most Passionate CleanTech Community!</h1>
      <p className='text-3xl'>A place to Learn, Network & Solve</p>
      <ul className='sm:flex hidden gap-5 justify-center items-center pt-[3rem]  '>
        <li className='p-[2rem] bg-gray-200 rounded-full animate-bounce cursor-pointer' style={{
          animationDelay: '0.3s'
        }}>Jobs</li>
        <li className='p-[2rem] bg-gray-200 rounded-full animate-bounce  cursor-pointer'style={{
          animationDelay:"0.5s"
        }}> Networking</li>
        <li className='p-[2rem] bg-gray-200 rounded-full animate-bounce cursor-pointer' style={{
          animationDelay:"0.7s"
        }}>Trend</li>
      </ul>
    </Tilt>
    </div>
    </motion.div>
  )
}

export default Hero