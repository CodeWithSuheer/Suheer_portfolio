// HomePage.jsx
import React, { useEffect } from 'react';
import { useRef } from "react";
import { Link } from 'react-scroll';
import { motion, useTransform, useScroll } from "framer-motion";
import Aos from 'aos';
import Contact from './Contact';
import 'aos/dist/aos.css';
import './HomePage.css';

// IMAGES
let fyb1 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/fyb1.png?v=1721679067";
let fyb2 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/fyb2.png?v=1721679066";
let googly1 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/googly1.png?v=1721679067";
let googly2 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/googly2.png?v=1721679067";
let brand1 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/brand1.png?v=1721679067";
let brand2 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/brand2.png?v=1721679067";
let ammar1 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ammar1.png?v=1721682186";
let ammar2 = "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/ammar2.png?v=1721682186";

import Experience from './Experience';
import About from './About';
import HeroSection from './HeroSection';



const cards = [
    {
        id: 1,
        name: 'For Your Beauty',
        language: 'React, TypeScript, Node JS, Express, Redux Toolkit',
        url: "https://foryourbeauty.shop",
        title: "Title 1",
        cover: [fyb1, fyb2],
    },
    {
        id: 2,
        name: 'Googly Smart',
        language: 'React JS, Node JS, Express, Redux Toolkit',
        url: "https://googly-smart.com",
        title: "Title 1",
        cover: [googly1, googly2],
    },
    {
        id: 3,
        name: 'The BrandrsCo',
        language: 'Next JS 14, Tailwind CSS',
        url: "https://thebrandrsco.com",
        title: "Title 1",
        cover: [brand1, brand2],
    },
    {
        id: 4,
        name: 'Ammar Forte',
        language: 'Next JS 14, Tailwind CSS',
        url: "https://www.ammarforte.com",
        title: "Title 1",
        cover: [ammar1, ammar2],
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


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const skillsData = ["React JS", "Node JS", "Redux Toolkit", "JavaScript", "Tailwind", "Bootstrap", "HTML5", "CSS3", "GitHub", "RestApi", "Responsiveness"]

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
            <div className="container mx-auto">
                <div key={card.id} className="h-[350px] w-[480px]">
                    <a href={card.url} target='_blank' className="group block overflow-hidden">
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

                        <div className="relative pl-2.5">
                            <div className="mt-0 flex items-center justify-between text-gray-600">
                                <p className="tracking-wide font-bold text-xl">{card.name}</p>
                            </div>
                            <h3 className="text-md font-bold text-gray-500 group-hover:underline group-hover:underline-offset-4">{card.status}</h3>
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{card.language}</h3>
                            <h3 className="text-sm text-gray-700 underline underline-offset-4">{card?.info}</h3>
                        </div>
                    </a>
                </div>
            </div>

        );
    };

    return (
        <>
            {/* ------------- HERO SECTION ------------- */}
            <section id="home" className="relative isolate z-0 px-6 pt-10 lg:px-8" style={{ minHeight: '90vh' }}>
                <HeroSection text="Suheer Zahid" />
            </section>



            {/* ------------- SKILLS ------------- */}
            <section id='marquee' className='flex justify-center items-center flex-col pt-20 mb-40 mx-auto text-center' style={{ minHeight: '70vh' }}>
                <h1 className="hero-title title-font pt-12 pb-4 lg:pt-4 text-5xl sm:text-7xl md:text-7xl lg:text-5xl mb-4 font-bold" data-aos="fade-down">My Skills</h1>
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

                <Link to="experience"
                    spy={true}
                    smooth={true}
                    duration={700}
                    type="button"
                    className="mt-10 cursor-pointer">
                    <span className='project_btn'>
                        EXPERIENCE
                    </span>
                </Link >
            </section >


            {/* ------------- EXPERIENCE ------------- */}
            < section id='experience' className='pt-10' >
                <Experience />
            </section >


            {/* ------------- PROJECTS ------------- */}
            < section id='projects' className='pt-10' >
                <div className="">
                    <h1 className="hero-title text-4xl pl-10 -mb-20 font-bold tracking-tight sm:text-4xl" data-aos="fade-right">PROJECTS</h1>
                    <HorizontalScrollCarousel />
                </div>
            </section >



            {/* ------------- CTA SECTION ------------- */}
            < section className="relative isolate z-0 px-6 pt-0 mb-24 -mt-14 lg:px-8" >
                <About text="MERN Stack Developer" />
            </section >

            {/* ------------- CONTACT ------------- */}
            < Contact />
        </ >
    )
}

export default HomePage
