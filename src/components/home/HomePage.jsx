// HomePage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Contact from './Contact';
import './HomePage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import social_1 from "../../assets/projects/social_1.png";
import social_2 from "../../assets/projects/social_2.png";
import elisha_1 from "../../assets/projects/elisha_1.png";
import elisha_2 from "../../assets/projects/elisha_2.png";
import loja_1 from "../../assets/projects/loja_1.png";
import loja_2 from "../../assets/projects/loja_2.png";
import gotrolly_1 from "../../assets/projects/gotrolly_1.png";
import gotrolly_2 from "../../assets/projects/gotrolly_2.png";
import Suheer_CV from "../../../Suheer_CV.pdf";



const cards = [
    {
        id: 1,
        name: 'ELISHA',
        language: 'React JS, Redux Toolkit, Bootstrap',
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        cover: [elisha_1, elisha_2]
    },
    {
        id: 2,
        name: 'LOJA',
        language: 'React JS, Redux Toolkit, Tailwind',
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        cover: [loja_1, loja_2]
    },
    {
        id: 3,
        name: 'Go Trolley',
        language: 'React JS, Redux Toolkit, Tailwind',
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        cover: [gotrolly_1, gotrolly_2]
    },
    {
        id: 4,
        name: 'Social Swirl LMS',
        language: 'React JS, Redux Toolkit, Tailwind',
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        cover: [social_1, social_2]
    },
];

// fadeInAnimationVariants
const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * index,
        }
    })
}

const HomePage = () => {

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = Suheer_CV;
        link.download = Suheer_CV;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const skillsData = ["React JS", "Redux Toolkit", "JavaScript", "Tailwind", "Bootstrap", "HTML5", "CSS3", "GitHub", "RestApi", "Responsiveness", "Node JS"]

    const HorizontalScrollCarousel = () => {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
            target: targetRef,
        });

        const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

        return (
            <section ref={targetRef} className="relative h-[300vh] ">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4">
                        {cards.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </section>
        );
    };

    const Card = ({ card }) => {
        return (
            <div key={card.id} className="h-[350px] w-[480px]">
                <a href="#" className="group block overflow-hidden">
                    <div className="relative h-[350px] sm:h-[280px]">
                        <img
                            src={card.cover[0]}
                            alt=""
                            className="absolute inset-0 h-64 w-full rounded-xl shadow-xl object-cover opacity-100 group-hover:opacity-0 transition duration-500 group-hover:scale-105"
                        />

                        <img
                            src={card.cover[1]}
                            alt=""
                            className="absolute inset-0 h-64 w-full rounded-xl shadow-xl object-cover opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="relative">
                        <div className="mt-1 flex items-center justify-between text-gray-600">
                            <p className="tracking-wide font-bold text-xl">{card.name}</p>
                        </div>
                        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{card.language}</h3>
                    </div>
                </a>
            </div>

        );
    };

    return (
        <>
            {/* ------------- HERO SECTION ------------- */}
            <section className="relative isolate z-0 px-6 pt-10 lg:px-8" style={{ minHeight: '90vh' }}>
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
                        <h1 className="hero-title text-4xl font-bold tracking-tight sm:text-6xl" data-aos="fade-up">Suheer Zahid</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-right">
                            Hello, I'm Suheer Zahid, an innovative frontend developer dedicated to crafting user-friendly web pages.
                            I bring creativity and functionality together to deliver an engaging online presence.</p>

                        <div className="mt-6" data-aos="fade-left">
                            <button className="hero_button" data-aos="fade-left">
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
            </section>



            {/* ------------- SKILLS ------------- */}
            <section id='marquee' className='flex justify-center items-center flex-col pt-20 mb-40 mx-auto text-center' style={{ minHeight: '70vh' }}>
                {/* <article className='marquee-cont mt-6' style={{ userSelect: 'none' }}>
                    <div className="wrapper">
                        <ul className="marquee text-lg cursor-pointer">
                            <li className='mx-4 font-semibold'>REACT JS</li>
                            <li className='mx-4 font-semibold'>REDUX TOOLKIT</li>
                            <li className='mx-4 font-semibold'>JAVASCRIPT</li>
                            <li className='mx-4 font-semibold'>BOOTSTRAP</li>
                            <li className='mx-4 font-semibold'>TAILWIND CSS</li>
                            <li className='mx-4 font-semibold'>CSS3</li>
                            <li className='mx-4 font-semibold'>HTML5</li>
                        </ul>
                        <ul className="marquee2 text-lg cursor-pointer">
                            <li className='mx-4 font-semibold'>REACT JS</li>
                            <li className='mx-4 font-semibold'>REDUX TOOLKIT</li>
                            <li className='mx-4 font-semibold'>JAVASCRIPT</li>
                            <li className='mx-4 font-semibold'>BOOTSTRAP</li>
                            <li className='mx-4 font-semibold'>TAILWIND CSS</li>
                            <li className='mx-4 font-semibold'>CSS3</li>
                            <li className='mx-4 font-semibold'>HTML5</li>
                        </ul>
                    </div>
                </article> */}
                <h1 className="hero-title title-font pt-12 pb-4 lg:pt-4 text-5xl sm:text-7xl md:text-7xl lg:text-5xl mb-4 font-bold">My Skills</h1>

                <div className="flex justify-center max-w-5xl mx-auto mt-2">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                        {skillsData.map((skill, index) => (
                            <motion.li className='skills_button border border-gray-400 rounded-xl cursor-pointer' key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                {skill}
                            </motion.li>

                        ))}
                    </ul>
                </div>

                <button className="project_btn mt-10">
                    <span><Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={700}
                        type="button"
                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
                    >
                        PROJECTS
                    </Link></span>
                </button>

            </section>


            {/* ------------- PROJECTS ------------- */}
            <section id='projects' className='pt-10'>
                <div className="">
                    <h1 className="text-4xl ml-10 -mb-20 font-bold tracking-tight text-gray-900 sm:text-4xl">PROJECTS</h1>
                    <HorizontalScrollCarousel />
                </div>
            </section>



            {/* ------------- CTA SECTION ------------- */}
            <section className="relative isolate z-0 px-6 pt-0 mb-16 -mt-14 lg:px-8">
                <div className="relative mx-auto max-w-2xl py-2">
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
                        <div className="max-w-2xl space-y-3 md:mx-auto">
                            <h3 className="text-gray-500 font-semibold text-2xl" data-aos="fade-right">
                                About My Self
                            </h3>
                            <p className="text-gray-800 my-4 pt-1 text-4xl font-semibold sm:text-5xl" data-aos="zoom-in">
                                Frontend React JS Developer
                            </p>
                            <p className="text-gray-600 pt-4 text-lg" data-aos="fade-left">
                                Hi, I'm Suheer Zahid, a React JS enthusiast crafting practical web solutions. Let's collaborate to bring your vision to life with user-friendly experiences. No fluff, just reliable development tailored to your needs. 🚀
                            </p>


                        </div>
                        <div className="mt-8" data-aos="zoom-out-up">
                            <button onClick={handleResumeDownload} className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                                Download My Resume
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            {/* ------------- CONTACT ------------- */}
            <Contact />
        </ >
    )
}

export default HomePage
