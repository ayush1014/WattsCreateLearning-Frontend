import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../utilities/wattsLogo.png'
// import Logo2 from '../utilities/wattsBrandLogo.png'
import '../components/home.css'
import HomeCoverPhoto from '../utilities/fallon.jpeg'
import AboutContainer from './aboutContainer'
import Footer from './footer'
import SEOHead from './SEOHead'

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
            <SEOHead 
                title="About Watts Creates Learning | Our Story & Mission"
                description="Learn about Watts Creates Learning's mission to provide professional development, consulting, and education services. Founded in 2021, we specialize in empowering individuals and organizations through innovative learning solutions."
                keywords="About Watts Creates Learning, Watts Creates history, professional development company, education consulting, team building experts, wellness retreat providers"
                canonicalUrl="https://www.wattscreates.com/about"
            />
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
