import React from 'react'
import styles,{layout} from "../styles"
import { linkedin } from '../assets'

const ContactMe = () => {

    return (
      <section id='contactme' className={layout.section}>
      <div className={layout.sectionInfo}>
      {/* <div className='absolute z-[0] w-[40%] h-[40%] -left-[10%] rounded-full blue__gradient'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          Contact Me
        </h4>
    </div> */}
        <h2 className={styles.heading2}>
        Contact Me
        </h2>
        <div className="container  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<p className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">Feel free to to contact me any time, through any method below.</p>

				<div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-8">
					{/* <div className="space-y-6">
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Name</label>
							<input className="w-full border border-input-border bg-input px-4 py-4"/>
						</div>
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Email</label>
							<input type="email" className="w-full border border-input-border bg-input px-4 py-4"/>
						</div>
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Message</label>
							<textarea type="email" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
						</div>
						<button onClick={sendEmail} className="px-6 py-2 bg-theme text-white font-bold">Send it</button>
					</div> */}
                    {/* <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='text-black block mb-6 text-xl font-bold'>
                                    <input className="w-full border border-input-border bg-input px-4 py-4" type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='text-black block mb-6 text-xl font-bold'>
                                    <input className="w-full border border-input-border bg-input px-4 py-4" type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li className='text-black block mb-6 text-xl font-bold'>
                                    <input className="w-full border border-input-border bg-input px-4 py-4" type="text" name='email' placeholder='Subject' required/>
                                </li>
                                <li className='text-black block mb-6 text-xl font-bold'>
                                    <textarea className="w-full border border-input-border bg-input px-4 py-4" name='message' placeholder='Message' required/>
                                </li>
                                <li className='text-white block mb-6 text-xl font-bold'>
                                    <input className=" feedback-card w-full border border-input-border bg-input px-4 py-4" type="submit" value='SEND!'/>
                                </li>
                            </ul>
                        </form> */}

					<div className="mt-12 flex-col">
                    {/* <div className='absolute z-[0] w-[40%] h-[40%] -left-[20%] rounded-full blue__gradient'/> */}
                        <p className="text-secondary">Friedrich-von-Spee-Str. 1,33098 Paderborn</p>
						<p className="text-secondary">+49 176 35649188</p>
						<p  className="text-secondary underline mt-3 block">aditya.udupa@gmail.com</p>
						<div className="flex mt-20 space-x-6 ">
                            <a href="https://de.linkedin.com/in/aditya-udupa" target="_blank">
                            <img  src={linkedin} alt="Icon" className='w-[32px] h-[32px] lg:w-12 lg:h-12 '/>								
							</a>
						</div>
					</div>
					
				</div>

			</section>
		</div>
        </div>
      </section>
    )
  }
  
  export default ContactMe