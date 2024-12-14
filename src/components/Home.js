import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import banner from '../assets/banner.png';
import tokenomics from '../assets/tokenomics.png';
import team_2 from '../assets/team-2.png';
import team from '../assets/team.png';
import coreswap from '../assets/coreswap.png';
import tele from '../assets/tele.png';
import X from '../assets/X.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    return (
        <div className="bg-black-100 font-codec-light overflow-hidden text-white-100">

            <div className='bg-black-50'>
                <div className='container mx-auto lg:px-20 px-5 py-3'>
                    <Menu />
                </div>
            </div>

            <div className="lg:px-20 px-5 bg-visual lg:h-screen">
                <div className='container mx-auto'>

                    <div className="lg:flex justify-center items-center gap-y-12 lg:py-28 py-12">

                        <div className='lg:w-1/2'>
                        </div>

                        <div className="lg:text-right lg:w-1/2 space-y-3">

                            <div data-aos="fade-up" className='lg:flex items-end justify-end'>
                                <img src={coreswap} alt='coreswap' className='pb-5 w-9/12 '></img>
                            </div>

                            <p data-aos='fade-out' className='lg:text-lg'>
                                Blending Artificial Intelligence with SocialFi and DeFi
                                on CORE Chain. Trade. Play. Earn on CORE Chai
                                through CORESwap
                            </p>

                            <div data-aos='zoom-in' className="flex items-end lg:justify-end gap-6 mx-auto">
                                <a href="/" className='mt-5'>
                                    <img data-aos="zoom-in" src={X} alt='X' className='w-14'></img>
                                </a>

                                <a href="/">
                                    <img data-aos="zoom-in" src={tele} alt='telegram' className='w-14'></img>
                                </a>
                            </div>

                            <div>
                                <div className='flex items-center lg:justify-end mt-8 md:gap-4 gap-3'>

                                    <Tilt>
                                        <button className='border-2 border-yellow-100 py-2 md:px-8 px-2 md:text-lg text-sm text-center tracking-wide rounded-tl-xl rounded-br-xl'>
                                            Swap
                                            <p className='text-xs italic font-extralight text-white-50'>(Coming Soon)</p>
                                        </button>
                                    </Tilt>

                                    <Tilt>
                                        <button className='border-2 border-yellow-100 py-2 md:px-8 px-2 md:text-lg text-sm text-center tracking-wide rounded-tl-xl rounded-br-xl'>
                                            CSAI
                                            <p className='text-xs italic font-extralight text-white-50'>(Coming Soon)</p>
                                        </button>
                                    </Tilt>

                                    <Tilt>
                                        <button className='border border-yellow-100 font-bold py-4 md:px-12 px-5 lg:text-lg text-center tracking-wide bg-gradient-to-br from-yellow-100 via-black-50 to-black-100 rounded-tl-xl rounded-br-xl'>
                                            Play
                                        </button>
                                    </Tilt>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in">
                <img src={banner} alt="banner" className='w-full' />
            </div>

            {/* Blending AI section */}

            <div id='features' className="lg:px-28 px-5 lg:py-36 py-8 bg-ai">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 lg:py-12">

                        <div className="lg:w-1/2 w-full">

                            <div className='space-y-6'>
                                <h1 data-aos="fade-up" className='md:text-5xl text-3xl font-codec font-semibold text-yellow-100'>
                                    Blending AI
                                </h1>

                                <p data-aos="fade-left" className='lg:text-lg'>
                                    We’re building an AI Ecosystem on CORE Chain where
                                    your dreams get turned into reality with a few taps.
                                </p>

                                <button data-aos="fade-left" className='border-2 border-white-50 py-4 md:px-8 px-5 italic font-extralight text-white-50 text-center rounded-tl-xl rounded-br-xl bg-black-100'>
                                    (Coming Soon)
                                </button>
                            </div>


                            <div data-aos="fade-left" className='my-8'>
                                <p className='text-yellow-100 italic lg:text-lg'>
                                    Swap. Trade. Earn.
                                </p>
                                <p className='lg:text-lg'>
                                    Swap Tokens under the CORE Network. A
                                    Uniswap-Forked DEX built on top of CORE Chain to
                                    ensure seamless trades.
                                </p>
                            </div>

                            <div data-aos="fade-left">
                                <p className='text-yellow-100 italic lg:text-lg'>
                                    Play.
                                </p>
                                <p className='lg:text-lg'>
                                    Start Playing the first tap-to-earn Telegram Mini
                                    App built powered by the CORE Chain. Earn some
                                    juicy $CSWAP in exchange.

                                </p>
                            </div>

                        </div>

                        <div className='lg:w-1/2'>

                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <h2 data-aos="fade-up" className='md:text-5xl text-3xl font-codec font-semibold text-yellow-100 capitalize text-center'>
                        Tokenomics
                    </h2>

                    <div data-aos="zoom-in" className='mt-12'>
                        <img src={tokenomics} alt="banner" className='lg:w-9/12 flex mx-auto' />
                    </div>
                </div>
            </div>


            {/* roadmap section */}

            <div id='roadmap' className="mt-8 lg:py-20 py-5 bg-roadmap lg:block hidden">

                <div className="lg:px-20 px-5 container mx-auto">

                    <h3 data-aos="fade-up" className='md:text-5xl text-3xl font-codec font-semibold text-yellow-100 capitalize text-center    '>
                        Roadmap
                    </h3>

                    <div className='mt-12'>

                        <div data-aos="fade-down" className='flex items-center justify-around'>
                            <div className='border-l-2 border-dashed px-5 h-44 translate-y-8'>
                                <h4 className='text-2xl font-bold text-yellow-100'>
                                    Phase 2:
                                </h4>
                                <ul className='list-disc p-3'>
                                    <li>Seed Round</li>
                                    <li>KOL Round</li>
                                </ul>
                            </div>

                            <div className='border-l-2 border-dashed px-5 h-44 translate-y-10'>
                                <h4 className='text-2xl font-bold text-yellow-100'>
                                    Phase 4:
                                </h4>
                                <ul className='list-disc p-3'>
                                    <li>TGE</li>
                                    <li>Airdrop Distribution</li>
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-up" className='flex items-center justify-start gap-x-96 mt-12'>
                            <div className='border-l-2 border-dashed px-5 h-36'>
                                <h4 className='text-2xl font-bold text-yellow-100 mt-16'>
                                    Phase 1:
                                </h4>
                                <ul className='p-3 list-disc'>
                                    <li>Launch of</li>
                                    <li>Telegram MiniApp</li>
                                    <li>Airdrop</li>
                                </ul>
                            </div>

                            <div className='border-l-2 border-dashed px-5 h-36'>
                                <h4 className='text-2xl font-bold text-yellow-100 mt-16'>
                                    Phase 3:
                                </h4>
                                <ul className='list-disc p-3'>
                                    <li>Audit</li>
                                    <li>Partnerships</li>
                                    <li>Public Round and Private Round</li>
                                    <li>MainNet Release of our Swap</li>
                                    <li>CSAI</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="mt-8 lg:py-20 py-5 lg:hidden block">

                <div className="lg:px-20 px-5 container mx-auto">

                    <h3 data-aos="fade-up" className='md:text-5xl text-3xl font-codec font-semibold text-yellow-100 capitalize text-center    '>
                        Roadmap
                    </h3>

                    <div className='flex justify-between items-start mt-12'>

                        <div className='flex flex-col w-6/12'>
                            <div className='border-b-2 border-yellow-100'>
                                <h4 className='font-bold text-yellow-100'>
                                    Phase 1:
                                </h4>
                                <ul className='p-3 text-sm list-disc'>
                                    <li>Launch of</li>
                                    <li>Telegram MiniApp</li>
                                    <li>Airdrop</li>
                                </ul>
                            </div>

                            <div className='translate-y-16 border-b-2 border-yellow-100'>
                                <h4 className='text-yellow-100'>
                                    Phase 3:
                                </h4>
                                <ul className='list-disc p-3 text-sm'>
                                    <li>Audit</li>
                                    <li>Partnerships</li>
                                    <li>Public Round and Private Round</li>
                                    <li>MainNet Release of our Swap</li>
                                    <li>CSAI</li>
                                </ul>
                            </div>
                        </div>

                        <div className=''>
                            <div className='w-1 h-96 bg-yellow-100'>
                            </div>
                        </div>

                        <div className='flex flex-col w-6/12'>
                            <div className='translate-y-16 border-b-2 border-yellow-100'>
                                <h4 className='font-bold text-yellow-100 ml-4'>
                                    Phase 2:
                                </h4>
                                <ul className='list-disc p-3 text-sm ml-4'>
                                    <li>Seed Round</li>
                                    <li>KOL Round</li>
                                </ul>
                            </div>

                            <div className='translate-y-28 border-b-2 border-yellow-100'>
                                <h4 className='font-bold text-yellow-100 ml-4'>
                                    Phase 4:
                                </h4>
                                <ul className='list-disc p-3 ml-4'>
                                    <li>TGE</li>
                                    <li>Airdrop Distribution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* team section */}

            <img src={team_2} alt='' className='w-full absolute left-0 right-0'></img>

            <div
                id="team"
                className="md:mt-28 mt-8 lg:py-20 py-5 lg:px-28 px-5 container mx-auto bg-team relative z-20"
            >
                <h3 data-aos="fade-up" className='md:text-5xl text-3xl font-codec font-semibold text-yellow-100 capitalize text-center md:mb-20 mb-6'>
                    Our Team
                </h3>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center mx-auto gap-10'>

                    <Tilt>
                        <div className='border bg-black-100 md:w-full w-64 mx-auto'>
                            <img src={team} alt='team' className='border-b w-full'></img>

                            <div className="p-5 text-center">
                                <h3 className='md:text-2xl text-xl font-codec font-semibold text-yellow-100 capitalize text-center'>
                                    Ril
                                </h3>
                                <p className='md:text-xl'>
                                    Co-Founder
                                </p>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className='border md:translate-y-12 bg-black-100 md:w-full w-64 mx-auto'>
                            <img src={team} alt='team' className='border-b w-full'></img>

                            <div className="p-5 text-center">
                                <h3 className='md:text-2xl text-xl font-codec font-semibold text-yellow-100 capitalize text-center'>
                                    Ka
                                </h3>
                                <p className='md:text-xl'>
                                    Co-Founder
                                </p>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className='border bg-black-100 md:w-full w-64 mx-auto'>
                            <img src={team} alt='team' className='border-b w-full'></img>

                            <div className="p-5 text-center">
                                <h3 className='md:text-2xl text-xl font-codec font-semibold text-yellow-100 capitalize text-center'>
                                    Linda
                                </h3>
                                <p className='md:text-xl'>
                                    Co-Founder
                                </p>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className='border md:translate-y-12 bg-black-100 md:w-full w-64 mx-auto'>
                            <img src={team} alt='team' className='border-b w-full'></img>

                            <div className="p-5 text-center">
                                <h3 className='md:text-2xl text-xl font-codec font-semibold text-yellow-100 capitalize text-center'>
                                    Huang
                                </h3>
                                <p className='md:text-xl'>
                                    Co-Founder
                                </p>
                            </div>
                        </div>
                    </Tilt>

                </div>


            </div>


            <Footer />

        </div >
    )
}
