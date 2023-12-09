import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';


const Footer = () => {

    const redirectToWhatsApp = () => {
        let phoneNumber = '03324700802';
        let whatsappLink = 'https://wa.me/' + phoneNumber;
        window.open(whatsappLink, '_blank');
    }

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <img src={logo} className="w-32 sm:mx-auto" />
                    <p>An innovative frontend developer dedicated to crafting user-friendly web pages</p>

                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <Link
                            class="group relative inline-block overflow-hidden border border-gray-800 px-10 py-2.5 focus:outline-none focus:ring cursor-pointer"
                            onClick={redirectToWhatsApp}>
                            <span class="absolute inset-x-0 top-0 h-[2px] bg-gray-600 transition-all group-hover:h-full group-gray:bg-indigo-500"
                            ></span>

                            <span class="relative text-sm font-medium text-gray-700 transition-colors group-hover:text-white">Whatsapp Me</span>
                        </Link>
                        <Link
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            class="group relative inline-block overflow-hidden border border-gray-800 px-10 py-2.5 focus:outline-none focus:ring cursor-pointer"
                        >
                            <span class="absolute inset-x-0 bottom-0 h-[2px] bg-gray-600 transition-all group-hover:h-full group-active:bg-gray-700"></span>

                            <span class="relative text-sm font-medium text-gray-700 transition-colors group-hover:text-white">Move To Top</span>
                        </Link>

                    </div>
                </div>
                <div className="mt-8 py-4 border-t items-center justify-center sm:flex">
                    <p>© 2023 Suheer Zahid.</p>

                </div>
            </div>
        </footer>
    )
}




export default Footer
