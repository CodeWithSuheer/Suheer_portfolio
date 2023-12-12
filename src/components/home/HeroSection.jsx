import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const HeroSection = ({ text }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <>
            <div className="relative mx-auto max-w-2xl py-24">
                <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                    <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="text-center">
                    {/* <h1 className="hero-title text-6xl font-bold tracking-tight sm:text-6xl">Suheer Zahid</h1> */}
                    <motion.div
                        style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', fontSize: '1.5rem' }}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {letters.map((letter, index) => (
                            <motion.span className='hero-title text-6xl font-bold tracking-tight sm:text-6xl' variants={child} key={index}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>


                    <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-right">
                        Hello, I'm Suheer Zahid, an innovative frontend developer dedicated to crafting user-friendly web pages.
                        I bring creativity and functionality together to deliver an engaging online presence.</p>

                    <div className="mt-6" data-aos="zoom-in-up">
                        <button className="hero_button">
                            <span><Link
                                to="marquee"
                                spy={true}
                                smooth={true}
                                duration={700}
                                type="button"
                                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
                            >
                                SKILLS
                            </Link></span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
