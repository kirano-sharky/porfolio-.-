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
  /*new_tab*/
  const newTab=url => {
      window.open(url)
  }
  return <div id='work' className='h-[1950px]'>
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
            <button onClick={() => newTab('https://github.com/meA-sonWat/HOLOLIVE-PAGE')} className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center h-[55px]'>
              此檔案在這 <a className='p-2'><FaGithub/></a>
            </button>
          </div>
        </div>
      </div>
      { /*project_2*/ }
      <div className='lg:justify-between lg:flex col relative lg:top-2 top-11'>
        <div className='relative lg:top-[60px] top-[100px] lg:left-[300px] '>
          <motion.img variants={fadeIn('right', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='w-[900px] rounded-2xl shadow-lg shadow-pink-500' src={project_2} alt=''/>
        </div>  
        <div className='relative top-[150px] lg:right-[1000px] lg:top-[180px] text-[20px] font-semibold text-gray-200 leading-10 text-center'>
          <button className='relative bottom-5 border-2 cursor-wait border-white py-2.5 px-5 font-bold uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-cyan-200 before:transition-transform before:duration-300 hover:text-black hover:border-black before:hover:scale-x-100'>
            pizzzzzzza <span className='animate-ping'>🍕</span>
          </button>
          <br/>
          <div className='flex justify-center '>  
          { /*shaaaaark*/ }
            <button className='shadow-lg shadow-blue-300 bg-blue-300 text-black transition duration-200 hover:bg-blue-200 cursor-not-allowed font-primary text-[20px] btn-sm border-2 rounded-none drop-shadow-xl flex items-center h-[55px] font-semibold'>
              <span className='p-2'>shaaaaark!</span> 
            </button>
          </div>
          <br/>
          <div className='relative bottom-4 flex justify-center'>
            <button onClick={() => newTab('https://github.com/meA-sonWat/A-webpage-vision')} className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center h-[55px]'>
              此檔案在這 <a className='p-2'><FaGithub/></a>
            </button>
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
        <button onClick={() => newTab('https://github.com/meA-sonWat/learning-react')} className='bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-700 transition font-primary text-[20px] btn-sm border-none rounded-lg drop-shadow-xl flex items-center h-[55px] font-semibold'>
          此檔案在這 <a className='p-2'><FaGithub/></a>
        </button>
      </div>
    </div>
  </div>;
};

export default Work;
