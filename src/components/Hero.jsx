import React from 'react'
import styles from '../styles'
import {datascience,adilogo} from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => {
  return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={datascience} alt="Icon" className='w-[32px] h-[32px] '/>
          <span className='text-white'> Aspiring Data Scientist. </span>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[62px] text-[32px] text-white ss:leading-[75px] leading-[75px]'>Aditya <br className='sm:block hidden '/> {" "} 
            <span className='text-gradient '>Udupa </span> {" "}
            
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[22px] text-[52px] text-white ss:leading-[50px] leading-[50px] w-full'>
          Airody Shivaramaiah
        </h1>

        <p className={`${styles.paragraph} max-w-[540px] mt-5`}>
        Aspiring Data Scientist passionate about uncovering insights from complex datasets to drive impactful decisions. Proficient in machine learning, data analysis, and eager to apply data-driven solutions to real-world challenges.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img className='w-[80%] h-[100%] relative z-[5]' src={adilogo} alt="accounting"/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
        <GetStarted/>
      </div>

    </section>
  )
}

export default Hero