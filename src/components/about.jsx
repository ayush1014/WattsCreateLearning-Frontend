import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../utilities/wattsLogo.png'
// import Logo2 from '../utilities/wattsBrandLogo.png'
import '../components/home.css'
import HomeCoverPhoto from '../utilities/fallon.jpeg'
import AboutContainer from './aboutContainer'
import Footer from './footer'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <div>
            <div>
            <AboutContainer/>
            </div>
            <div className='mt-72'>
            <Footer/>
            </div>
        </div>
        
        </>
            )
}
