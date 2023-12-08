import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])





    return (
        <main className="relative mt-10 py-28" data-aos="fade-up">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-900 sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    {/* <h3 className="text-gray-600 font-semibold">
                        Contact
                    </h3> */}
                    <h1 className="hero-title title-font pb-1.5 lg:pt-1 text-5xl sm:text-7xl md:text-7xl lg:text-5xl font-bold">Get In Touch</h1>
                    <p className="text-gray-800">
                        I'd love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <div className="mt-4 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl shadow-2xl">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact
