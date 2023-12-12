// HomePage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Contact from './Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';

// IMAGES
import social_1 from "../../assets/projects/social_1.png";
import social_2 from "../../assets/projects/social_2.png";
import elisha_1 from "../../assets/projects/elisha_1.png";
import elisha_2 from "../../assets/projects/elisha_2.png";
import loja_1 from "../../assets/projects/loja_1.png";
import loja_2 from "../../assets/projects/loja_2.png";
import gotrolly_1 from "../../assets/projects/gotrolly_1.png";
import gotrolly_2 from "../../assets/projects/gotrolly_2.png";
import Experience from './Experience';
import About from './About';
import HeroSection from './HeroSection';



const cards = [
    {
        id: 1,
        name: 'ELISHA',
        language: 'React JS, Redux Toolkit, Bootstrap',
        url: "http://178.16.137.184:3000/",
        title: "Title 1",
        cover: [elisha_1, elisha_2]
    },
    {
        id: 4,
        name: 'Social Swirl LMS',
        language: 'React JS, Redux Toolkit, Tailwind',
        url: "https://socialswirl.tech/",
        title: "Title 4",
        cover: [social_1, social_2]
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

                        <div className="relative">
                            <div className="mt-1 flex items-center justify-between text-gray-600">
                                <p className="tracking-wide font-bold text-xl">{card.name}</p>
                            </div>
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">{card.language}</h3>
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

                <button className="project_btn mt-10">
                    <span><Link
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={700}
                        type="button"
                        className="cursor-pointer"
                    >
                        EXPERIENCE
                    </Link></span>
                </button>
            </section>


            {/* ------------- EXPERIENCE ------------- */}
            <section id='experience' className='pt-10'>
                <Experience />
            </section>


            {/* ------------- PROJECTS ------------- */}
            <section id='projects' className='pt-10'>
                <div className="">
                    <h1 className="hero-title text-4xl pl-10 -mb-20 font-bold tracking-tight sm:text-4xl" data-aos="fade-right">PROJECTS</h1>
                    <HorizontalScrollCarousel />
                </div>
            </section>



            {/* ------------- CTA SECTION ------------- */}
            <section className="relative isolate z-0 px-6 pt-0 mb-24 -mt-14 lg:px-8">
                <About text="Frontend React JS Developer" />
            </section>

            {/* ------------- CONTACT ------------- */}
            <Contact />
        </ >
    )
}

export default HomePage
