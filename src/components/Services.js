import React from 'react';
//server avatar
import myit from '../assets/myit.jpg'
import zfei from '../assets/zfei.png'
//discord icon
import { FaDiscord } from 'react-icons/fa'
//motion
import { motion } from 'framer-motion';
//fade in
import { fadeIn } from '../variants'

const Services = () => {
  return <div id='services' className='section '>
    <div className='container mx-auto '>
      <div className='flex justify-center'>
        <motion.span variants={fadeIn('bottom', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='font-bold text-[33px]'>
          我們的社群🦈
        </motion.span>
      </div>
      <div className='flex lg:flex-row flex-col column items-center justify-center lg:space-x-8 '>
        { /*myit-box*/ }
        <motion.div variants={fadeIn('up', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='relative bottom-4 w-[350px] h-[400px] bg-gray-200 text-black rounded-lg shadow-xl shadow-[#000] my-[100px]'>
          <div className='flex justify-center '>
            <img className='relative bottom-[50px] rounded-lg h-[100px] w-[100px] shadow-lg shadow-[#E0AA3E]' src={myit} alt=''/>
          </div>
          <div className='flex justify-center'>
            <span className='relative underline bottom-8 font-semibold text-[35px]'>my-it</span>
          </div>
          <span className='relative left-4 text-[20px]'>🦈-大型的程式討論區</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-擁有許多出色的開發者</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-擁有一些被discord認證的機器人</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-正在考慮進行'大躍進'</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-可以分享自己的成果~</span>
          <div className='flex justify-center'>
            <a href='https://discord.gg/myit'>
              <button className='relative top-2 btn btn-sm border-none rounded-lg shadow-lg shadow-cyan-500/50 flex items-center leading-[4] text-[18px] h-[55px] hover:shadow-md hover:shadow-[#474749] hover:text-[#474749]'>
                Join us! <a className='p-1'><FaDiscord/></a>
              </button>
            </a>
          </div>
          <br/>
          <div className='flex justify-center'><span className='relative bottom-4 text-[15px] text-gray-500 font-semibold'>截至目前已來到了3k+</span></div>
        </motion.div>
        { /*zeitfrei-box*/ }
        <motion.div variants={fadeIn('up', 0.1)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='relative bottom-4 w-[350px] h-[400px] bg-gray-200 text-black rounded-lg shadow-xl shadow-red-600 '>
          <div className='flex justify-center '>
            <img className='relative bottom-[50px] rounded-lg h-[100px] w-[100px] shadow-lg shadow-[#4BFAB6]' src={zfei} alt=''/>
          </div>
          <div className='flex justify-center'>
            <span className='relative underline bottom-8 font-semibold text-[35px]'>zeitfrei</span>
          </div>
          <span className='relative left-4 text-[20px]'>🦈-擁有豐富的游戲論壇</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-隨心所欲測試機器人</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-討論喜愛的動漫和各種事物</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-適合迷因愛好者游覽</span>
          <br/>
          <span className='relative left-4 text-[20px]'>🦈-戰 艦 收 藏</span>
          <div className='flex justify-center'>
            <a href='https://discord.gg/zeitfrei'>
              <button className='relative top-2 btn btn-sm border-none rounded-lg shadow-lg shadow-cyan-500/50 flex items-center leading-[4] text-[18px] h-[55px] hover:shadow-md hover:shadow-[#474749] hover:text-[#474749]'>
                Join us! <a className='p-1 '><FaDiscord/></a>
              </button>
            </a>
          </div>
          <br/>
          <div className='flex justify-center'><span className='relative bottom-4 text-[15px] text-gray-500 font-semibold'>截至目前已來到了16k+</span></div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Services;
