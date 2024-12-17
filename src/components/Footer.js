import React from 'react'
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import logo from '../assets/logo.png';




export default function Footer() {
  return (

    <div id='community' className="bg-footer">

      <footer className='lg:px-20 px-5 md:pt-32 pb-12 py-6'>

        <div className='text-center'>
          <h3 data-aos="fade-down" className='md:text-5xl text-2xl font-codec font-semibold text-yellow-100'>
            CORESwap Community
          </h3>

          <p data-aos="fade-up" className='lg:text-lg pt-3'>
            Join the CORESwap Community and stay ahead of the Curve
          </p>
        </div>

        <div className='flex items-start justify-center mx-auto gap-8 mt-6'>
          <a href='https://t.me/CORESwapChat' data-aos="zoom-in">
            <img src={icon_1} alt='twitter' className='w-16 mx-auto'></img>
          </a>

          <a href='https://x.com/core_swapAI'><img data-aos="zoom-in" src={icon_2} alt='telegram' className='w-16'></img></a>
        </div>

        <div className='lg:mt-36 mt-12 lg:translate-y-6'>
          <img src={logo} alt='twitter' className='flex mx-auto md:w-72 w-52'></img>
          <p className='text-center lg:text-lg pt-3 text-white-50 tracking-wider'>Where SocialFi Meets CORE</p>
        </div>

        <div className='flex flex-wrap mx-auto justify-center text-center mt-12'>
          <p className="border md:py-6 py-4 md:px-8 px-5 flex flex-col lg:text-xl tracking-wider bg-gradient-to-t from-yellow-100 via-black-50 to-black-100">
            Play
            <span className='text-xs font-extralight text-white-50 pt-1'>@CORESwapAI</span>
          </p>
          <p className="border md:py-6 py-4 md:px-8 px-5 flex flex-col lg:text-xl tracking-wider">
            Swap
            <span className='text-xs italic font-extralight text-white-50 pt-1'>(Coming Soon)</span>
          </p>
          <a href='https://x.com/core_swapAI' className="border md:py-6 py-4 md:px-8 px-5 lg:text-xl tracking-wider flex flex-col justify-center items-center">
            Twitter
          </a>
          <a href='https://t.me/CORESwapChat' className="border md:py-6 py-4 md:px-8 px-5 lg:text-xl tracking-wider flex flex-col justify-center items-center">
            Telegram
          </a>
          <p className="border md:py-6 py-4 md:px-8 px-5 flex flex-col lg:text-xl tracking-wider">
            Documentation
            <span className='text-xs italic font-extralight text-white-50 pt-1'>(Coming Soon)</span>
          </p>
        </div>

      </footer>
    </div>

  )
}
