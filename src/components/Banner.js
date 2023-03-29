import React from 'react';
//avatar
import avatar from '../assets/avatar.jpg'
//icons
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation'
//audio
import audio from '../assets/gura-a.mp3'

const Banner = () => {
   /*audio*/ 
  function play() {
    new Audio(audio).play()
  }
  return <section id='home' className='flex min-h-[85vh]'>
    <div className='container mx-auto pb-16'>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
        { /*text*/ }
        <div className='p-[20px] text-center lg:text-left '>
          <u><span className='mb-6 text-[65px] font-semibold leading-[3] text-center lg:text-left'>我是kirano</span></u>
          <TypeAnimation className='text-[44px] font-medium leading-[1] ' sequence={['你們好！', 2000, 'Apa khabar!', 2000, 'hello!', 2000, '你们好呀!', 2000, 'こんにちは!', 2000, '안녕하세요!', 2000, 'Saluton!', 2000, 'Ciao!', 2000, 'Hola!', 2000]} speed={50} repeat={Infinity}/>
          <div className='text-[25px] text-gray-300 text-center lg:text-left'>
            <span>一位默默無聞的網站設計師在此:)</span>
            <br/>
            <span>希望各位能喜歡~</span>
            <br/>
            <div className='p-1 flex lg:mx-0 mx-auto items-center mb-12 max-w-max '>
              { /*social media*/ }
              <a href='https://github.com/meA-sonWat'>
                <button className='btn btn-sm border-none rounded-lg shadow-lg shadow-cyan-500/50 flex items-center leading-[4] text-[18px] h-[55px]'>
                  GitHub <a className='p-2'><FaGithub/></a>
                </button>
              </a>
              <a className='p-4 cursor-pointer hover:text-blue-400' href='https://www.facebook.com/kirano.awe'><FaFacebook/></a>
              <a className='p-4 cursor-pointer hover:text-pink-400' href='https://www.instagram.com/kirano0608/'><FaInstagram/></a>
            </div>
            <br/>
            <span className='text-[18px] font-semibold text-cyan-300 flex justify-center animate-bounce'>請接著往下看↓</span>
          </div>
        </div>
        { /*avatar*/ }
        <div className='p-4 lg:w-1/2 hidden lg:flex'>
          <div className='relative before:z-10 before:absolute before:left-1/2 before:font-bold before:text-white before:border-2 before:border-blue-300 before:-bottom-5 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-2xl before:bg-blue-500 before:px-5 before:py-1.5 before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-5 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-blue-300 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible active:before:visible active:after:visible' data-tip='A ❗'>
            <img onClick={play} alt='' className='rounded-full cursor-pointer shadow-lg shadow-pink-300/50' src={avatar}/>
          </div>
        </div>
      </div>
    </div>
    
  </section>; 
};

export default Banner;
