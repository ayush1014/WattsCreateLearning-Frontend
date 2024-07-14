import { InboxIcon, SparklesIcon, BriefcaseIcon, ArrowTrendingUpIcon, ScaleIcon } from '@heroicons/react/24/outline'
import imgOffice from '../utilities/WCLHome.png'
import Logo from '../utilities/wattsLogo.png'
import imgFocus from '../utilities/homeFocus.png'


export default function HomeContainerTwo() {
    return (
        <>
            <div style={{ backgroundColor: '#C3BAB0' }} className="relative overflow-hidden pb-32 pt-16">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16">
                            <div>
                                {/* <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                                        <img src={Logo} className="h-8 w-8" alt="Logo" aria-hidden="true" />
                                    </span>
                                </div> */}

                                <div className="mt-6">

                                    <h2 style={{fontFamily:'Playfair'}} className="text-3xl font-bold tracking-tight text-gray-100">Welcome to Watts Creates Learning</h2>
                                    <p className="mt-4 text-lg text-gray-100">
                                    What began as a passion project in 2021 has evolved into a dedicated effort to educate individuals, families, organizations, and communities on their individual strengths. At Watts Creates Learning, we believe in the transformative power of education. 
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-100">
                                            &ldquo;When you choose to partner with Watts Creates Learning, you're not just hiring a consulting firm – you're gaining a trusted and integral extension of your team. &rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-6 w-6 rounded-full"
                                                    src={imgOffice}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-base font-medium text-gray-200">Fallon Watts, Founder of Watts Creates Learning</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={imgOffice}
                                    alt="Inbox user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ backgroundColor: '#C3BAB0' }} className="mt-0">
                    <div className="py-14 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
                            <div>
                                <div className="mt-0">
                                    {/* <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-600">
                                            <BriefcaseIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </span>
                                    </div> */}
                                    <h3 style={{fontFamily:'Playfair'}} className="text-3xl mt-2 font-bold tracking-tight text-gray-200">Our Purpose:</h3>
                                    <p className="mt-2 text-lg text-gray-100">
                                        Watts Creates Learning is a professional development, consulting, and education service provider. We specialize in offering a range of services, including but not limited to personal & professional development workshops, program evaluation, team builders, and wellness retreats.
                                    </p>
                                    {/* <div>
                                        <span className="flex h-12 w-12 mt-10 items-center justify-center rounded-xl bg-gray-600">
                                            <ArrowTrendingUpIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </span>
                                    </div> */}
                                    <h3 style={{fontFamily:'Playfair'}} className="text-3xl mt-5 font-bold tracking-tight text-gray-200">Our Mission:</h3>
                                    <p className="mt-2 text-lg text-gray-100">
                                        Empowering individuals and organizations to build upon their goodness and potential. We strive to be catalysts for positive change in relationships, careers, and businesses.
                                    </p>
                                    {/* <div>
                                        <span className="flex h-12 w-12 mt-10 items-center justify-center rounded-xl bg-gray-600">
                                            <ScaleIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </span>
                                    </div> */}
                                    <h3 style={{fontFamily:'Playfair'}} className="text-3xl mt-5 font-bold tracking-tight text-gray-200">Our Core Values:</h3>
                                    {/* <ul className="mt-2 text-lg text-gray-100" style={{ listStyleType: 'circle' }}> */}
                                    <ul className="mt-2 text-lg text-gray-100">
                                        <li>Leading with Love</li>
                                        <li>Fostering Growth</li>
                                        <li>Positive Mindset</li>
                                    </ul>
                                    <div className="mt-24">
                                        <a
                                            href="#"
                                            className="inline-flex rounded-lg bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-gray-700 hover:ring-gray-700"
                                        >
                                            Learn more about WCL
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={imgFocus}
                                    alt="Customer profile user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
