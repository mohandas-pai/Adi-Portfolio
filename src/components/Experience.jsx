import React from 'react'
import { projects } from '../constants'
import styles from '../styles'
import {quotes} from '../assets'

const ProjectsCard = ({content, name, title}) => {
  return(
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[390px] md:mr-10 sm:mr-5 mr-0 my-5 experience-card'>
      <img src={quotes} alt='Quotes' className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-col ml-1'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
        <p className='font-poppins font-semibold text-[16px] leading-[32px] text-dimWhite'>{title}</p>
      </div>
    </div>
    )
}

const Experience = () => {
  return (
    <section id='projects' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2}`}>A Journey of Professional Growth<br className='sm:block hidden'/>and Academic Excellence </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Proficiently contributed to diverse projects, showcasing adaptability and effective problem-solving across varied domains..
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full experience-container relative z-[1] '>
        {projects.map((card)=>(
              <ProjectsCard key={card.id} {...card}/>
            ))}
      </div>

    </section>
  )
}

export default Experience