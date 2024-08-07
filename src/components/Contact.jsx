import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from './footer'
import './Contact.css'
import Logo from '../utilities/wattsLogo.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SocialIcon } from 'react-social-icons'
import SendNotification from './SendNotification'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

export default function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [facebookShow, setFacebookShow] = useState(false);
    const [instaShow, setInstaShow] = useState(false);
    const [notificationShow, setNotificationShow] = useState(false);

    const handleFacebookClose = () => setFacebookShow(false);
    const handleFacebookShow = () => setFacebookShow(true);
    const handleInstaClose = () => setInstaShow(false);
    const handleInstaShow = () => setInstaShow(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        setNotificationShow(true);
        // Set a timer to hide the notification after 5 seconds
        setTimeout(() => {
            setNotificationShow(false);
        }, 5000);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
        console.log('inside the function');
        event.preventDefault();  // Correct this line
        const data = {
            firstName: event.target['first-name'].value,
            lastName: event.target['last-name'].value,
            email: event.target.email.value,
            phoneNumber: event.target['phone-number'].value,
            message: event.target.message.value,
        };

        console.log('Data to be sent:', data);

        fetch('https://watts-creates-learning-backend.vercel.app/send-email', {
        // fetch('http://localhost:8000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Message sent:', data);
                alert(data.msg);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const socialIcons = [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props} onClick={handleFacebookShow}>
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
            href: 'https://www.instagram.com/watts_creates_learning/',
            icon: (props) => (
                // <svg fill="currentColor" viewBox="0 0 24 24" {...props} onClick={handleInstaShow}>
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
                <svg fill="currentColor" viewBox="0 0 24 24" {...props} >
                    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.5H4.56v-9h2.56v9zM5.84 10.06c-.84 0-1.56-.72-1.56-1.56s.72-1.56 1.56-1.56 1.56.72 1.56 1.56-.72 1.56-1.56 1.56zM20.5 20.5h-2.56v-4.34c0-1.04 0-2.38-1.5-2.38-1.5 0-1.72 1.14-1.72 2.3v4.42h-2.56v-9h2.46v1.23h.04c.34-.66 1.18-1.36 2.42-1.36 2.6 0 3.08 1.72 3.08 3.96v5.16h-.02z"></path>
                </svg>
            ),
        }

    ]

    return (
        <div className="relative isolate bg-white">
            <header className="absolute inset-x-0 top-0 z-50 homeContainerOne">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className='mr-16'>
                        {/* <img className="h-12 w-12" src={Logo}></img> */}
                        <a href="/" style={{ cursor: 'pointer' }}>
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-12 w-auto"
                                src={Logo}
                                alt="Company Logo"
                            />
                        </a>
                    </div>
                    <div className="flex gap-x-6 text-gray-500 lg:flex-1">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.name}
                                href={icon.href}
                                className="-m-1.5 p-1.5"
                                {...(icon.name === 'Facebook' ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                            >
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
                            <a key={item.name} href={item.href} className="text-xl font-medium leading-6 text-gray-700 nav-item">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="mailto:create@wattscreates.com"
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
                            <a href="/" className="-m-1.5 p-1.5" style={{ cursor: 'pointer' }}>
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={Logo}
                                    alt="Company Logo"
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
                                            className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
            <Modal show={facebookShow} onHide={handleFacebookClose}>
                <Modal.Header closeButton>
                    <SocialIcon network="facebook" />
                    <Modal.Title className='m-auto'><span style={{ color: 'rgb(46, 68, 133)', fontWeight: '600' }}>Facebook</span> Update</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-xl'><span style={{ color: '#C3BAB0', fontSize: '100%', fontWeight: '600' }}>Watts Create Learning</span> is coming soon on <span style={{ color: 'rgb(46, 68, 133)', fontWeight: '600' }}>Facebook</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleFacebookClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <Modal show={instaShow} onHide={handleInstaClose}>
                <Modal.Header closeButton>
                    <SocialIcon network="instagram" />
                    <Modal.Title className='m-auto'><span style={{ color: 'rgb(224,41,98)', fontWeight: '600' }}>Instagram</span> Update</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-xl'><span style={{ color: '#C3BAB0', fontSize: '100%', fontWeight: '600' }}>Watts Create Learning</span> is coming soon on <span style={{ color: 'rgb(224,41,98)', fontWeight: '600' }}>Instagram</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleInstaClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
            <div className="mx-auto grid max-w-full grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                            </svg>
                        </div>
                        <h2 style={{ fontFamily: 'Playfair' }} className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">Get in <span className='home-special-two'>touch</span></h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">

                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    Omaha, NE
                                    <br />
                                </dd>
                            </div>
                            {/* <iframe
                                    width="450"
                                    height="250"
                                    frameBorder="0"
                                    style={{ border: '0' }}  
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed/v1/MAP_MODE?3a490cb13294e831"
                                    allowFullScreen>
                                </iframe> */}
                            <div class="iframe-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191858.36366238954!2d-96.24605611646446!3d41.291741426750825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2sin!4v1721944600994!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="tel:+1 (402) 881-9824">
                                        +1 (402) 881-9824
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="mailto:create@wattscreates.com">
                                        create@wattscreates.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#626D7B' }} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    {notificationShow && <SendNotification />}
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-lg font-semibold leading-6 text-gray-200">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-lg font-semibold leading-6 text-gray-200">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-200">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-lg font-semibold leading-6 text-gray-200">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-lg font-semibold leading-6 text-gray-200">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-700 px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
                                style={{ backgroundColor: '#C3BAB0' }}
                            >
                                Send message
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

