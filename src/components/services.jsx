import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ServicesBanner from '../utilities/ServicesBanner.png'
import Footer from './footer'
import './services.css'
import aboutImg from '../utilities/aboutImg1.jpg'
import { CameraIcon } from '@heroicons/react/20/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Service from '../utilities/service.avif'
import Apart from '../utilities/apart.avif'
import HomeBanner from './homeBanner'
import Logo from '../utilities/wattsLogo.png'
import { GoChevronDown, GoChevronUp } from 'react-icons/go';  // Ensure you import GoChevronUp
import servicesWomen from '../utilities/servicesWomen.jpg'

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ borderRadius: '20px', padding: '5px' }} className='text-component'>
      <div className='header' onClick={toggleIsOpen}>
        <p className='head text-2xl'>{title}</p>
        <div className='down-icon'>
          {isOpen ? <GoChevronUp size={30} color="#FFF" /> : <GoChevronDown size={30} color="#FFF" />}
        </div>
      </div>
      <div className='content' style={{ maxHeight: isOpen ? '1000px' : '0' }}>
        <ul className='text-lg p-4'>
          {children}
        </ul>
      </div>
    </div>
  );
};


const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
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
  //   name: 'X',
  //   href: '#',
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //     </svg>
  //   ),
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

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='test'>
      <div>
        <div className='homeContainerOne'>
          <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
              <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className='mr-16'>
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
                <div className=" hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-xl font-medium leading-6 text-gray-700 nav-item">
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
          </div>
        </div>
        <div className='homeBanner mt-4'>
          <HomeBanner />
        </div>
        <div className='ServicesContainerOne'>
          <div className="mt-4 overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
              <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                  <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">Our <span className='home-special'>Services</span></h3>
                </div>
              </div>
              <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="relative lg:col-start-2 lg:row-start-1">
                  <svg
                    fill="none"
                    width={404}
                    height={384}
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                    className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
                  >
                    <defs>
                      <pattern
                        x={0}
                        y={0}
                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                      </pattern>
                    </defs>
                    <rect fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" width={404} height={384} />
                  </svg>
                  {/* <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                    <figure>
                      <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                        <img
                          alt="Whitney leaning against a railing on a downtown street"
                          src={Service}
                          width={1184}
                          height={1376}
                          className="rounded-lg object-cover object-center shadow-lg"
                        />
                      </div>
                      <figcaption className="mt-3 flex text-sm text-gray-500">
                      </figcaption>
                    </figure>
                  </div> */}
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="mx-auto max-w-prose text-base lg:max-w-none">
                    <p className="text-xl text-gray-700">
                      Unlock Your Potential with Our Expert Services! At Watts Creates Learning, we are dedicated to helping individuals, communities,  and organizations thrive through our comprehensive range of services. Whether you’re a parent, a young woman, an academic institution, or a business, we have the expertise to support your growth and success.  Experience the difference expert guidance can make in unlocking your full potential.
                    </p>
                  </div>
                  <div className="prose prose-indigo mx-auto mt-5 text-gray-900 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                    <AccordionItem title={<span>Workshops <span className="special-and">&</span>    Training</span>}>
                      <li><span className='subheading'>Leading With Love & Strength:</span> A workshop series focused on Parenting and leadership.</li>
                      <li><span className='subheading'>EmpowerHER:</span> Designed to empower youth girls in various stages of their development.</li>
                      <li><span className='subheading'>Gallup Strengths:</span> Leveraging individual strengths to maximize potential.</li>
                    </AccordionItem>

                    <AccordionItem title={<span>Program Evaluation <span className="special-and">&</span> Data Analysis</span>}>
                      <li>Comprehensive evaluation processes to measure program effectiveness.</li>
                      <li>Detailed data analysis to support strategic decision-making.</li>
                    </AccordionItem>

                    <AccordionItem title={<span>Course Development <span className="special-and">&</span> Facilitation</span>}>
                      <li>Customized course creation for various academic, personal, and professional needs.</li>
                      <li>Facilitation of both large and small group sessions to enhance learning experiences.</li>
                    </AccordionItem>

                    <AccordionItem title={<span>Academic <span className="special-and">&</span> Student Affairs Consulting</span>}>
                      <li>Expertise in student and academic affairs, including policy management and administrative support.</li>
                      <li>Guidance on student retention strategies and academic performance improvement.</li>
                    </AccordionItem>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-4">
                  {/* <div> */}
                  <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"> 
                    <img
                      alt=""
                      src={servicesWomen}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                    >
                      <div
                        style={{
                          clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                      />
                    </div>
                    <figure>
                      <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                        <img
                          alt="Descriptive Alt Text"
                          src={Apart}
                          className="rounded-lg object-cover object-center shadow-lg"
                          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      What Sets <span className='home-special'>Us Apart:</span>
                    </h1>
                    <div className="max-w-xl">
                      <ol className="mt-6 list-decimal">
                        <AccordionItem title={<span>Extensive Expertise  <span className="special-and">&</span> Experience</span>}>
                          <li><span className='subheading'>Leadership and Knowledge:</span> Founded by Fallon Watts, an accomplished higher education professional with over a decade of experience, our expertise spans course development, program evaluation, grant management, data analysis, and student affairs.</li>
                          <li><span className='subheading'>Proven Track Record:</span> Fallon’s achievements include designing impactful student programs and courses, leading committee work such as the Committee on The Status of Women, and implementing efficient administrative processes.</li>
                        </AccordionItem>

                        <AccordionItem title="Tailored Solutions">
                          <li><span className='subheading'>Customized Programs:</span> We specialize in developing bespoke courses, programs, and workshops that cater to the unique needs of our clients. Ensuring relevant and engaging learning experiences.</li>
                          <li><span className='subheading'>Personalized Approach:</span> Our services are designed to meet the specific goals and challenges of each organization and individual, fostering a culture of continuous improvement and personal growth.</li>
                        </AccordionItem>

                        <AccordionItem title="Comprehensive Services">
                          <li><span className='subheading'>Diverse Offerings:</span> From academic consulting and leadership workshops to data analysis and program evaluation, we provide a wide range of services to support success.</li>
                          <li><span className='subheading'>Holistic Development:</span> Our workshops, such as Leading With Love & Strength and EmpowerHER, focus on holistic development, empowering participants to leverage their strengths and achieve their full potential.</li>
                        </AccordionItem>

                        <AccordionItem title={<span>Innovative <span className="special-and">&</span> Impactful</span>}>
                          <li><span className='subheading'>Cutting-Edge Solutions:</span> We leverage the latest tools and technologies to enhance our programs. Ensuring that our clients benefit from innovative and effective educational solutions.</li>
                          <li><span className='subheading'>Measurable Impact:</span> Our focus on data-driven decision-making and thorough program evaluation ensures that our initiatives have a tangible and positive impact on our clients.</li>
                        </AccordionItem>
                      </ol>
                    </div>
                  </div>
                  <div className="mt-10 flex">
                    {/* <a href="mailto:create@wattscreates.com" className="text-lg font-semibold leading-7" style={{ color: '#C3BAB0' }}> */}
                    <a href="/contact" className="text-lg font-semibold leading-7" style={{ color: '#C3BAB0' }}>
                      Learn more about our company <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
