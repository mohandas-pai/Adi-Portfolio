import React from 'react'
import { skills } from '../constants'
import styles,{layout} from "../styles"

const FeatureCard = ({icon, title, content, index}) =>{
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== skills.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="Icon" className='w-[50%] h-[50%] object-contain'/>
      </div>

      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}


const Skills = () => {
  return (
    <section id='skill' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        <div className='absolute z-[0] w-[40%] h-[40%] -left-[10%] rounded-full blue__gradient'/>
        Masters graduate with  <br className='sm:block hidden'/> 3 years of hands-on experience in data analysis.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A rich background encompassing three years of immersive experience in the field of data analysis, and projects involving Natural Language Processing (NLP) techniques and Extract, Transform, Load (ETL) processes.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
          {skills.map((feature,index)=>(
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
      </div>

    </section>
  )
}

export default Skills