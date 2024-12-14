import React, { useState } from 'react'
import logo from '../assets/logo.png';




export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-codec tracking-wide">
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-9/12' />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 pt-2 text-center items-start font-extralight">
            <li className=''>
              <a href="/" className="text-center">Swap</a>
              <p className='text-xs italic'>(coming soon)</p>
            </li>
            <li><a href="#play" className="">Play</a></li>
            <li><a href="#features" className="">Features</a></li>
            <li><a href="#tokenomics" className="">Tokenomics</a></li>
            <li><a href="#roadmap" className=''>Roamdap</a></li>
            <li><a href="#team" className=''>Team</a></li>
            <li><a href="#community" className=''>Community</a></li>
            <li><a href="/" className=''>Docs</a></li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between text-2xl text-center py-2 lg:hidden" >
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-1/2' />
        </a>

        <button onClick={ToggleSidebar}>
          <i className="fa fa-bars"></i>
        </button>
      </div>


      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="text-2xl text-right cursor-pointer" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>

          <div className="sd-body mt-20">
            <ul className='font-codec tracking-wide'>
              <li className='' onClick={ToggleSidebar}>
                <a href="/" className="sd-link">Swap
                  <p className='text-xs italic font-extralight'>(coming soon)</p>
                </a>
              </li>
              <li><a onClick={ToggleSidebar} href='/' className="sd-link">Play</a></li>
              <li><a onClick={ToggleSidebar} href='#features' className="sd-link">Features</a></li>
              <li><a onClick={ToggleSidebar} href='#tokenomics' className="sd-link">Tokenomics</a></li>
              <li><a onClick={ToggleSidebar} href='#roadmap' className="sd-link">Roadmap</a></li>
              <li><a onClick={ToggleSidebar} href='#team' className="sd-link">Team</a></li>
              <li><a onClick={ToggleSidebar} href='#community' className="sd-link">Community</a></li>
              <li><a onClick={ToggleSidebar} href='./' className="sd-link">Docs</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </header >
  )
}
