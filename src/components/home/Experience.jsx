import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const Experience = () => {

    // ANIMATION DURATION
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <>
            <div className="container mx-auto max-w-5xl my-12 pb-20">
                <h1 className="hero-title text-4xl mb-8 pb-2 font-bold tracking-tight sm:text-4xl text-center">Study & Experience</h1>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="rounded-lg px-10 py-6 bg-gray-200 shadow-md" data-aos="zoom-in-right">
                        {/* ------------- STUDY -------------  */}
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-6">
                                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i className="fa-solid fa-graduation-cap text-gray-800"></i>
                                </span>
                                <h3 className="ml-2 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Bachelor’s Degree</h3>
                                <time className="ml-2 block mb-2 text-sm font-normal leading-none text-gray-700">2019 - 2023</time>
                                <p className="ml-2 mb-4 text-base font-normal text-gray-700 dark:text-gray-400">Did 4 years Bachelor in Computer Sciences from Virtual University of Pakistan</p>
                            </li>
                            <li className="mb-4 ms-6">
                                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i className="fa-solid fa-graduation-cap text-gray-800"></i>
                                </span>
                                <h3 className="ml-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">Intermediate Degree</h3>
                                <time className="ml-2 block mb-2 text-sm font-normal leading-none text-gray-700">2017 - 2019</time>
                                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">Did my pre engineering in Sciences. Opting subjects like Physics, Computer and Maths</p>
                            </li>
                        </ol>
                    </div>


                    <div className="rounded-lg px-10 py-6 bg-gray-200 shadow-md" data-aos="zoom-in-left">
                        {/* ------------- EXPERIENCE -------------  */}
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-6">
                                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i className="fa-solid fa-briefcase text-gray-800"></i>
                                </span>
                                <h3 className="ml-2 flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Social Swirl</h3>
                                <time className="ml-2 block mb-2 text-sm font-normal leading-none text-gray-700">2023 -</time>
                                <p className="ml-2 mb-4 text-base font-normal text-gray-700 dark:text-gray-400">I'm a frontend developer at Social Swirl, focusing
                                    on creating visually appealing web applications.
                                </p>
                            </li>
                            <li className="mb-4 ms-6">
                                <span className="mt-2 absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i className="fa-solid fa-briefcase text-gray-800"></i>
                                </span>
                                <h3 className="ml-2 mb-1 text-lg font-semibold text-gray-900 dark:text-white">Work With Seniors</h3>
                                <time className="ml-2 block mb-2 text-sm font-normal leading-none text-gray-700">2022 to 2023</time>
                                <p className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">Here I worked as junior Web developer. My role is to create web app using React jS.</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="flex justify-center mx-auto">
                    <button className="project_btn mt-12 ">
                        <span><Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={700}
                            type="button"
                            className="cursor-pointer"
                        >
                            PROJECTS
                        </Link></span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Experience
