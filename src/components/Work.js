import React from 'react';
//projects
import project_1 from '../assets/project_1.png'
import project_2 from '../assets/project_2.png'
import project_3 from '../assets/project_3.png'
//icon
import {FaGithub} from 'react-icons/fa'
//motion
import { motion } from 'framer-motion';
//fade in
import { fadeIn } from '../variants'

const Work = () => {
  return <div id='work' className='h-[3000px]'>
    <div className='mx-auto container relative top-[300px] '>
      { /*index_1*/ }
      <div className='relative bottom-[80px] lg:left-11 flex justify-center'>
        <h1 className='font-bold lg:text-[40px] text-[30px]'>曾經在無聊的時候做過: </h1>
      </div>
      { /*project_1*/ }
      <div className='lg:justify-between lg:flex col relative top-2'>
        <div className='relative bottom-[30px] lg:left-11 '>
          <motion.img variants={fadeIn('left', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='w-[900px] rounded-2xl shadow-lg shadow-pink-500' src={project_1} alt=''/>
        </div>  
        <div className='relative lg:left-[30px] lg:top-[120px] text-[20px] font-semibold text-gray-200 leading-10 text-center'>
          <span>hololive的個人界面</span>
          <br/>
          <span>點擊按鈕即可看見各yt頻道</span>
          <br/>
          <div className='flex justify-center'>
            <a href='https://github.com/meA-sonWat/HOLOLIVE-PAGE'>
              <button className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center leading-[4] h-[55px]'>
                 此檔案在這 <a className='p-2'><FaGithub/></a>
              </button>
            </a>
          </div>
        </div>
      </div>
      { /*project_2*/ }
      <div className='lg:justify-between lg:flex col relative lg:top-2 top-11'>
        <div className='relative lg:top-[60px] top-[100px] lg:left-[300px] '>
          <motion.img variants={fadeIn('right', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='w-[900px] rounded-2xl shadow-lg shadow-pink-500' src={project_2} alt=''/>
        </div>  
        <div className='relative top-[120px] lg:right-[1000px] lg:top-[180px] text-[20px] font-semibold text-gray-200 leading-10 text-center'>
          <span><b>A</b>的音訊</span>
          <br/>
          <div className='flex justify-center '>  
            <button disabled className='shadow-lg shadow-cyan-400 bg-blue-300 text-black transition duration-100 active:bg-blue-200 cursor-pointer font-primary text-[20px] btn-sm border-none rounded-full drop-shadow-xl flex items-center leading-[4] h-[55px] w-[150px] font-semibold'>
                <span className='p-2'>A! 🦈</span> 
            </button>
          </div>
          <br/>
          <div className='relative bottom-4 flex justify-center'>
            <a href='https://github.com/meA-sonWat/HOLOLIVE-PAGE'>
              <button className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center leading-[4] h-[55px]'>
                 此檔案在這 <a className='p-2'><FaGithub/></a>
              </button>
            </a>
          </div>
        </div>
      </div>
      { /*index_2*/ }
      <div className='relative lg:top-[400px] top-[500px] text-center'>
        <h1 className='font-bold text-[40px]'>我的第一份react project</h1>
        <br/>
      </div>
      <div className='relative lg:top-[380px] top-[480px] text-center'>
        <span className='text-gray-300'>learned from ZAINKEEPSCODE</span>
      </div>
      { /*project_3*/ }
      <div className='relative lg:top-[400px] top-[500px] lg:flex justify-center'>
        <motion.img variants={fadeIn('', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='rounded-2xl lg:w-[859px] lg:h-[400px] shadow-lg shadow-[#fa9f02]' src={project_3}/>
      </div>
      <div className='relative lg:top-[440px] top-[540px] flex justify-center'>
        <a href='https://github.com/meA-sonWat/learning-react'>
          <button className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center leading-[4] h-[55px] font-semibold'>
            此檔案在這 <a className='p-2'><FaGithub/></a>
          </button>
        </a>
      </div>
      { /*learn more*/ }
      <div className='relative text-center top-[700px] lg:top-[550px] leading-[50px]'>
        <span className='text-[40px] font-bold'>更多檔案在這裏!</span>
        <br/>
        <div className='flex justify-center'>
          <div className='relative before:text-[20px] before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip="網站代碼的秘密~">
            <a href='https://github.com/meA-sonWat/'>
              <motion.button variants={fadeIn('', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-tl-lg rounded-br-lg shadow-lg shadow-accent flex items-center leading-[4] h-[55px] font-semibold'>
                Github <a className='p-2'><FaGithub/></a>
              </motion.button>
            </a>
          </div>
        </div>
        <span className='relative top-[20px] text-[18px] font-semibold text-gray-200 flex justify-center animate-bounce'>點這裏點這裏↑</span>
      </div>
    </div>
  </div>;
};

export default Work;


