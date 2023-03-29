import React from 'react';
//image
import about_2 from '../assets/about_2.png'
import about_1 from '../assets/about_1.png'
//icon
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'

const About = () => {
  return <div id='about' className=''>
    <div className='container mx-auto'>
      <div className='relative h-56 w-56'>
        <div className='lg:flex hidden'>
          { /*image-1*/ }
          <img className='absolute  left-0 top-[20px] rounded-[35px] shadow-lg shadow-cyan-400/100 ANIMATION_1' src={about_2} alt=''/>
        </div>
      </div>
      <div className='flex justify-center'>
        { /*title*/ }
        <span className='relative font-semibold text-[48px] bottom-[80px] '>關於我:</span>
      </div>
      { /*details*/ }
      <div className='text-center text-[23px] font-medium relative bottom-[58px]'>
        <span>嗨嗨我出生在馬來西亞~</span>
        <br/>
        <span className='bg-white rounded-md font-semibold hover:bg-gray-300 hover:text-gray-700 transition delay-75 '>我的年齡無可奉告哦欸嘿</span>
        <br/>
        <span>我想要在某閒學校順利畢業</span>
        <br/>
        <span>我有幸認識了擅長做游戲的好朋友</span>
        <br/>
        <span>一個比我大一歲卻比我矮的女生:)</span>
        <br/>
        <span>還有一群'豬朋狗友'</span>
        <br/>
        <span>我擅長畫畫和音樂 鋼琴和烏克麗麗 </span>
        <br/>
        <span className='bg-white rounded-md font-semibold hover:bg-gray-300 hover:text-gray-700 transition delay-75'>吉他也算吧?</span>
        <br/>
        <span>目前正在學習blender和攝影</span>
        <br/>
        <span>還有網站設計</span>
      </div>
      <div className='relative flex justify-center bottom-10 text-[35px] space-x-4'>
        { /*fb icon*/ }
        <a className='cursor-pointer w-[35px] h-[35px] rounded-full text-gray-300 hover:bg-white hover:text-blue-400 transition delay-75' href='https://www.facebook.com/kirano.awe'>
          <div className='relative before:text-[20px] before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip="點進來看看 ヾ(•ω•`)o">
            <FaFacebook/>
          </div>
        </a>
        { /*ig icon*/ }
        <a className='cursor-pointer w-[35px] h-[35px] rounded-[20%] text-gray-300 hover:bg-pink-400 hover:text-white transition delay-75' href='https://www.instagram.com/kirano0608/'>
          <div className='relative before:text-[20px] before:z-10 before:absolute before:left-1/2 before:-bottom-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip="快來follow我 b(￣▽￣)d">
            <FaInstagram/>
          </div>
        </a>
        { /*github icon*/ }
        <a className='cursor-pointer w-[35px] h-[35px] text-gray-300 hover:bg-black rounded-full transition delay-75' href='https://github.com/meA-sonWat'>
          <div className='relative before:text-[20px] before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip="網站代碼的秘密~">
            <FaGithub/>
          </div>
        </a>
      </div>
      <div className='relative lg:w-56 lg:h-56'>
        { /*image-2*/ }
        <img className='absolute ml-[1000px] bottom-[200px] rounded-[35px] shadow-lg shadow-pink-700/100 ANIMATION' src={about_1} alt=''/>
      </div>
    </div>
  
  </div>;
};

export default About;
