import React from 'react'
import styles from '../styles'
import { logo } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div>
          <img src={logo} alt="Black gen" className='w-[266px] h-[76px] object-contain'/>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[8px] leading-[27px] text-dimWhite">
          Made by Amazing Apps
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
        <p className="font-poppins font-normal text-center text-[8px] leading-[27px] text-dimWhite">
          Copyright Ⓒ 2024 All Rights Reserved.
        </p>
        </div>
      </div>

    </section>
  )
}

export default Footer