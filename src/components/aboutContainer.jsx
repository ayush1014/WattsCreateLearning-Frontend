import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ImgAboutOne from '../utilities/aboutImg1.jpg'
// import ImgAboutTwo from '../utilities/Learn.gif'
import ImgAboutTwo from '../utilities/IMG_0567.jpg'
import WattsHeroImg from '../utilities/fallon.jpeg'
import Footer from './footer'
import HomeBanner from './homeBanner'
import Logo from '../utilities/wattsLogo.png'


const jobOpenings = [
    {
        id: 1,
        role: 'Full-time designer',
        href: '#',
        description:
            'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
        salary: '$75,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 2,
        role: 'Laravel developer',
        href: '#',
        description:
            'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
        salary: '$125,000 USD',
        location: 'San Francisco, CA',
    },
    {
        id: 3,
        role: 'React Native developer',
        href: '#',
        description:
            'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
        salary: '$105,000 USD',
        location: 'San Francisco, CA',
    },
]

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

const socialIcons = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    // {
    //     name: 'X',
    //     href: '#',
    //     icon: (props) => (
    //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //             <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    //         </svg>
    //     ),
    // },
    // {
    //     name: 'GitHub',
    //     href: '#',
    //     icon: (props) => (
    //         <svg fill="currentColor" viewBox="0 0 22 22" {...props}>
    //             <path
    //                 fillRule="evenodd"
    //                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                 clipRule="evenodd"
    //             />
    //         </svg>
    //     ),
    // },
    // {
    //     name: 'YouTube',
    //     href: '#',
    //     icon: (props) => (
    //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //             <path
    //                 fillRule="evenodd"
    //                 d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
    //                 clipRule="evenodd"
    //             />
    //         </svg>
    //     )
    // },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/watts-creates-learning/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.5H4.56v-9h2.56v9zM5.84 10.06c-.84 0-1.56-.72-1.56-1.56s.72-1.56 1.56-1.56 1.56.72 1.56 1.56-.72 1.56-1.56 1.56zM20.5 20.5h-2.56v-4.34c0-1.04 0-2.38-1.5-2.38-1.5 0-1.72 1.14-1.72 2.3v4.42h-2.56v-9h2.46v1.23h.04c.34-.66 1.18-1.36 2.42-1.36 2.6 0 3.08 1.72 3.08 3.96v5.16h-.02z"></path>
            </svg>
        ),
    }

]

const stats = [
    { label: 'Business Consulting Sessions', value: '10 +' },
    { label: 'Workshops', value: '5 +' },
    { label: 'Survey Development & Program Evaluation', value: '15 +' },
]
const values = [
    {
        name: 'Workshop Creation',
        description:
            'Add few words about Workshop Creation',
    },
    {
        name: 'Strengths Consulting',
        description:
            'Add few words about Strengths Consulting',
    },
    {
        name: 'Student Affairs',
        description:
            'Add few words about Student Affairs',
    },
    {
        name: 'Academic Affairs',
        description:
            'Add few words about Academic Affairs',
    },
    {
        name: 'Policy Management',
        description:
            'Add few words about Policy Management',
    },
    {
        name: 'Leadership',
        description:
            'Add few words about Leadership',
    },
]
const team = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
]
const blogPosts = [
    {
        id: 1,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function AboutContainer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50 homeContainerOne">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className='mr-16'>
                        <img className="h-12 w-12" src={Logo}></img>
                    </div>
                    <div className="flex gap-x-6 text-gray-500 lg:flex-1">
                        {socialIcons.map((icon) => (
                            <a key={icon.name} href={icon.href} target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
                                {icon.icon({ className: "h-6 w-6" })}
                            </a>
                        ))}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-lg font-medium leading-6 text-gray-700 nav-item">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="/contact"
                            className="inline-flex rounded-lg bg-gray-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-gray-700 hover:ring-gray-700"
                        >
                            Work with WCL
                        </a>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={Logo}
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main className="isolate">
                <div className='mt-24'>
                    <HomeBanner />
                </div>
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 sm:pt-12 lg:px-8 lg:pt-20">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    {/* <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
                                        labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
                                        mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat
                                        aliqua.
                                    </p> */}
                                </div>
                                <div className="flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    {/* <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                src={ImgAboutOne}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div> */}
                                    {/* <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={ImgAboutTwo}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div> */}
                                    {/* <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0"> */}
                                    {/* <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 style={{ fontFamily: 'Playfair' }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">About <span style={{ color: '#C3BAB0' }}>Us</span></h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                {/* <span className='text-xl mb-2 font-semibold tracking-tight text-gray-900 sm:text-2xl'></span> */}
                                <p style={{ fontFamily: 'Playfair' }} className="text-2xl leading-8 text-gray-600">
                                    At Watts Creates Learning, we are passionate about empowering individuals, organizations, and communities through tailored educational programs, workshops, and program evaluation. Founded in 2021, by Fallon Watts, an experienced higher education, human services professional, and strengths consultant. Our mission is to empower individuals and organizations to build upon their goodness and potential. We strive to be a catalyst for positive change in relationships, careers, and businesses. While optimizing our core values Leading with Love, Fostering Growth, Positive Mindset  to help get to families, communities, and  organizations to the next level of success.
                                </p>
                                {/* <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                    <p>
                                        Founded in 2021, Watts Creates Learning specializes in professional development workshops, coaching, and wellness retreats to empower individuals and organizations. Discover our mission-driven services designed to foster growth and leadership.
                                    </p>
                                    <p className="mt-2">
                                        At Watts Creates Learning, we are passionate about empowering students and professionals by developing their individual strengths and leadership capabilities. Established in 2021 by Fallon Watts, an expert in Higher Education and Student Affairs, our services are tailored to promote positive change within college communities and beyond.
                                    </p>
                                    <p className="mt-2">
                                        Our mission is to empower individuals and organizations to build upon their inherent strengths and potential. We are dedicated to being catalysts for positive change in relationships, careers, and businesses.
                                    </p>
                                </div> */}
                            </div>
                            {/* <div style={{fontFamily:'Poppins '}} className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-8 sm:mt-24 px-8 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <h2 style={{ fontFamily: 'playfair' }} className="text-3xl mb-12 font-bold tracking-tight text-gray-900 sm:text-5xl">Our Founder <span className='founderName' style={{ color: '#C3BAB0', fontSize: '150%' }}>Fallon Watts</span></h2>
                    <img
                        src={WattsHeroImg}
                        alt=""
                        className="aspect-[5/3] w-full rounded-xl object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-24 max-w-6xl px-6 sm:mt-12 lg:px-8">
                    <div className="mx-auto max-w-6xl lg:mx-0">
                        <p style={{ fontFamily: 'playfair, Cursive', fontWeight: '700' }} className="mt-6 text-2xl leading-8 text-gray-600">
                            Hey There! I’m Fallon Watts. I’m a wife, a mom to one incredible young man, educator, creator, strengths consultant and the founder, owner of Watts Creates Learning. I love good vibes, positivity, all things HGTV shows, trying New Brunch spots, Bingo, Reading, and enjoying the comforts of my cozy home. <br /><br />

                            I have combined my extensive experience as a higher education professional, faculty member, alongside my nonprofit career, to develop programs, courses, trainings, and workshops that inspire and empower learners of all ages to focus on the good and their individual strengths. <br /><br />

                            My commitment to building genuine and lasting relationships, fostering creativity, and critical thinking has made me a respected figure among my peers and a beloved mentor to my students.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden bg-white px-6 py-8 lg:px-8 xl:py-24">
                    <div className="mx-auto max-w-max lg:max-w-7xl">
                        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="max-w-prose text-base lg:max-w-none">
                                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
                                    Our <span style={{ color: '#C3BAB0' }}>Approach</span>
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <svg
                                fill="none"
                                width={404}
                                height={384}
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                                className="absolute right-0 top-0 -mr-20 -mt-20 hidden md:block md:[overflow-anchor:none]"
                            >
                                <defs>
                                    <pattern
                                        x={0}
                                        y={0}
                                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                                    </pattern>
                                </defs>
                                <rect fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" width={404} height={384} />
                            </svg>
                            <svg
                                fill="none"
                                width={404}
                                height={384}
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                                className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]"
                            >
                                <defs>
                                    <pattern
                                        x={0}
                                        y={0}
                                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                                    </pattern>
                                </defs>
                                <rect fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" width={404} height={384} />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                    <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                        <p className='text-2xl mt-8'>
                                            At Watts Creates Learning, we believe in the transformative power of personalized education. Our approach is grounded in building genuine relationships, fostering open communication, and ensuring that every stakeholder's needs are met. We are dedicated to creating an inclusive learning environment that encourages trust, collaboration, and growth. When you choose to partner with Watts Creates Learning, you’re gaining a trusted extension of your team.
                                        </p>
                                    </div>
                                    <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                        <div className="relative">
                                            <img
                                                src={ImgAboutTwo}
                                                alt=""
                                                className="aspect-[2/3] w-64 m-auto lg:ml-72 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="relative isolate -z-10 mt-32 sm:mt-28">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
                            <defs>
                                <pattern
                                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y="50%"
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="translate(-100 0)"
                                >
                                    <path d="M.5 200V.5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-2xl font-semibold text-xl flex flex-col items-center py-8">
                        <p className="text-center mb-4">For more information please click below</p>
                        <a
                            href="/services"
                            className="inline-flex justify-center rounded-lg bg-gray-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-gray-700 hover:ring-gray-700"
                        >
                            Learn More About WCL
                        </a>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
