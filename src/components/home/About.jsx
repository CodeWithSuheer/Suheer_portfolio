import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Suheer_CV from "../../../Suheer_CV.pdf";


const About = ({ text }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const letters = Array.from(text);

    const handleResumeDownload = async () => {
        try {
            const response = await fetch(Suheer_CV);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'Suheer_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

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
            <div ref={ref} className="relative mx-auto max-w-2xl py-2">
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
                    <div className="max-w-7xl space-y-3 md:mx-auto">
                        <h3 className="text-gray-500 font-semibold text-2xl" data-aos="fade-in">
                            About My Self
                        </h3>
                        {/* <p className="text-gray-800 my-4 pt-1 text-4xl font-semibold sm:text-5xl" data-aos="zoom-in">
                            Frontend React JS Developer
                        </p> */}
                        <motion.div
                            style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem' }}
                            variants={container}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            {letters.map((letter, index) => (
                                <motion.span className='text-gray-700 my-3 pt-1 text-4xl font-semibold sm:text-5xl' variants={child} key={index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </motion.div>

                        <p className="text-gray-600 text-lg" data-aos="zoom-out-up">
                            A motivated Full Stack Developer with 1+ years of experience, having strong command over
                            HTML, CSS and JavaScript. Highly experienced in developing websites and web applications with
                            Bootstrap, Tailwind, React JS and Node JS. Adept in developing user interfaces, testing and
                            debugging applications 🚀
                        </p>


                    </div>
                    <div className="mt-8" data-aos="zoom-out-up">
                        <button onClick={handleResumeDownload} className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                            Download My Resume
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
