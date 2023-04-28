import React from 'react';
//icon
import {FaGithub} from 'react-icons/fa'
//motion
import { motion } from 'framer-motion';
//fade in
import { fadeIn } from '../variants'

const Contact = () => {
  /*new_tab*/
  const newTab=url => {
    window.open(url)
  }
  return <div id='contact' className='section justify-center'>
    <div className='mx-auto container relative'>
      <div className='backdrop-blur-xl bg-white/20 shadow-lg shadow-pink-400 rounded-2xl h-[300px] col justify-center relative text-center top-[800px] lg:top-[150px] leading-[50px]'>
        <span className='text-[40px] font-bold relative top-5'>更多檔案在這裏!</span>
        <br/>
        <div className='flex justify-center relative top-11'>
          <div className='relative before:text-[20px] before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip="網站代碼的秘密~">
            <motion.button onClick={() => newTab('https://github.com/meA-sonWat/')} variants={fadeIn('', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-tl-lg rounded-br-lg shadow-lg shadow-accent flex items-center h-[55px] font-semibold'>
              Github <a className='p-2'><FaGithub/></a>
            </motion.button>
          </div>
        </div>
        <span className='relative top-[100px] text-[18px] font-semibold text-pink-200 flex justify-center animate-bounce'>點這裏點這裏↑</span>
      </div>
    </div>
  </div>;
};

export default Contact;