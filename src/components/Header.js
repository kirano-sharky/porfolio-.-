import React from 'react';
//icon
import {FaGithub} from 'react-icons/fa'

const Header = () => {
  /*new_tab*/
  const newTab=url => {
    window.open(url)
  }
  return <div className=''>
    <div className='container mx-auto'>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <span className='font-bold text-5xl'>Kirano</span>
          <div className='flex'>
            <div className='relative before:z-10 before:absolute before:left-1/2 before:font-bold before:border-2 before:border-pink-300 before:-bottom-5 before:w-max before:max-w-xs before:-translate-x-1/2 before:translate-y-full before:rounded-2xl before:bg-gradient-to-r from-purple-500 to-pink-500 before:px-5 before:py-1.5 before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-bottom-5 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-pink-300 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible' data-tip='你好呀!👋'>
              <button className='btn btn-sm border-none rounded-md shadow-lg shadow-cyan-500/5'>Hola!</button>
            </div>
            <a onClick={() => newTab('https://github.com/meA-sonWat')} className='p-4 text-[25px] cursor-pointer hover:text-gray-400'><FaGithub/></a>
          </div>
        </div>
      </div>  
    </div>
  </div>;
};

export default Header;