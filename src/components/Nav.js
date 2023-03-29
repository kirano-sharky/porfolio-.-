import React from 'react';
//import icons:)
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs'
//link:)
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 '>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[85px] backdrop-blur-md rounded-full max-w-[480px] mx-auto px-5 flex items-center justify-between text-3xl text-white/60'>
          { /*home*/ }
          <Link to='home' activeClass='活躍' smooth={true} spy={true} offset={-100} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'><BiHomeAlt/></Link>
          { /*about*/ }
          <Link to='about' activeClass='活躍' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'><BiUser/></Link>
          { /*services*/ }
          <Link to='services' activeClass='活躍' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'><BsBriefcase/></Link>
          { /*work*/ }
          <Link to='work' activeClass='活躍' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'><BsClipboardData/></Link>
          { /*contact*/ }
          <Link to='contact' activeClass='活躍' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'><BsChatSquareText/></Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
