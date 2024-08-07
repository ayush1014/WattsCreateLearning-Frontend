import React from 'react'
import DonnaTestimonial from '../utilities/DonnaTestimonial.jpeg'
import TestimonialWalidah from '../utilities/TestimonialWalidah.jpg'
import TestimonialCoordinator from '../utilities/TestimonialCoordinator.png'

const testimonials = [
  {
    body: 'My janitorial company recently had the privilege of participating in a professional development session by Watts Creates Learning and the impact has been phenomenal. The session was insightful, well-structured, and perfectly tailored to my company’s unique challenges.',
    author: {
      name: 'Walidah Harris',
      handle: 'Founder and Owner of Trinity Janitorial Services',
      imageUrl: TestimonialWalidah,
    },
  },
  {
    body: 'The Leading with Love & Strength workshop had a positive impact on the participants, changing their perception of strengths and how they can apply them in parenting and leadership.',
    author: {
      name: 'Parent University Coordinator',
      handle: 'Learning Community Center Of North Omaha',
      imageUrl: TestimonialCoordinator,
    },
  },
  // More testimonials...
  {
    body: ' Fallon Watts from Watts Creates Learning captivated the young ladies at Uta Halee Academy! During Womens Month, she delivered a timely and engaging session on the Power of Women in Education ending with a motivational painting activity.',
    author: {
      name: 'Donna Curry',
      handle: 'Rite of Passage Director of Special Education',
      imageUrl: DonnaTestimonial,
    },
  },
]

function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {/* <h2 style={{ color: 'rgba(35,71,130)'}} className="text-xl font-semibold leading-8 tracking-tight">Testimonials</h2> */}
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with some <span style={{ color: 'rgba(35,71,130)', fontSize: '120%', fontWeight: '600' }}>amazing people</span>
          </p>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8">
                <figure className="rounded-2xl bg-gray-50 p-8 text-base leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img alt="" src={testimonial.author.imageUrl} className="h-16 w-16 rounded-full bg-gray-50" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


// import DonnaTestimonial from '../utilities/DonnaTestimonial.jpeg'


// export default function Testimonials() {
//     return (
//         <>
//             <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
//                 <div style={{backgroundColor:'rgba(35,71,130)'}} className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
//                     <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
//                         <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
//                             <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
//                                 <img
//                                     alt=""
//                                     src="https://ci3.googleusercontent.com/mail-img-att/AGAZnRrnHYfFTwbIWdEIBGi7eCEYCCM68vDu2zlwWrtNy9vf5_zkiKEo5beSJC_0-5yqRtKI71BQGeIa_iBueI59KRxtzT4VXi444pimnxd7nf7OboYc3vGM7miTUG2V4CXwcAoQVAZdT239AwoH8qOcLHSAQ4zqFmS60eBDSmSm0mi9SGlSyLhHEyWrYUAkymHDmV6dfPcjr9m42RwX63hoMAsLvUv4pU0Pnw71LMYBj7S0CQk_a4wTedPyeOOd6GoLW9AkuPh1nDjBCNEjIPtFZux-wMmbo4IJ98q7eN6wmNxhebDjHgDmuwfBPci-MCHGFUAl60LdWWaUN_KGCoo5T3yQyiprqifT3tecJ3oZxwK39s227QxLHoHdE2Tn0dwGFDzqKSyMu_IwgBCc4IC5QoUYgkgow7KI-AGkj_F86YKdr17oOKsZCw_8wqWgwHL8RypJ6qK7denYTw4Th6ynFf7JccX303G4LrQvMW77SKfFGDEh7v2pDToAQA8Eu62ybeIScbWLY34VmfxsHtr1fdIYDu4RMScQ2mWmIFY0tz5F2yyCPT-jMNZGKma-M7lG5alwwR4oli6Y6xiYjprt_RkcWV9H1Mkxfcs6UvcmFILKOxN5mtF9mpWnynhGXw2Qq31aLkzArRMGxdBCa0V9e-tZRzyUTWztuDAKVpW7H2RnEndBXSCx2jA3nTjap3NlS4-ktftxV7PmazX1QAd5yoSnaO6iGyNWKYyN057SdZFkH3J47737DZHtq-DznCI6qbZPyB3LXcZsOS6FZE80hu3S1BPnhWuGUHtd4yHzwhcvh8K7CvK_PMDbJWiWy4qB--KN2zCGcJOERaPy_coz2WogWeVjhCL0ClNkfSdfRoEdlIS60h_f9GZkvKFCjBx7ss8TqBhxjalT5tlfD0jr195XLvrm9eW6CUvWdsLgGQO1Y3j7qg0fAQ7iosWlmx1IxJn_1JCurSHWVqwi0hY3SrnL6v3va0ap124YTaZ8efrrFhuswUE48mFKLZZh-d8YPnK2cEzLFWx_ru6ZN5dMdvuUjPt90EOBOZPcHtVI4yrVahGU4njpcZwOWUQ=s0-l75-ft"
//                                     className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
//                             <figure className="relative isolate pt-6 sm:pt-12">
//                                 <svg
//                                     fill="none"
//                                     viewBox="0 0 162 128"
//                                     aria-hidden="true"
//                                     className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
//                                 >
//                                     <path
//                                         d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
//                                         id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
//                                     />
//                                     <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
//                                 </svg>
//                                 <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
//                                     <p>
//                                         My janitorial company recently had the privilege of participating in a professional development session by Watts Creates Learning and the impact has been phenomenal. The session was insightful, well-structured, and perfectly tailored to my company’s unique challenges.
//                                     </p>
//                                 </blockquote>
//                                 <figcaption className="mt-8 text-base">
//                                     <div className="font-semibold text-white">Walidah Harris</div>
//                                     <div className="mt-1 text-gray-400">Founder and Owner of  Trinity Janitorial Services</div>
//                                 </figcaption>
//                             </figure>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white pb-16 sm:pb-24 xl:pb-32">
//                 <div style={{backgroundColor:'rgba(35,71,130)'}} className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
//                     <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
//                         <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
//                             <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
//                                 <img
//                                     alt=""
//                                     src={DonnaTestimonial}
//                                     className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
//                             <figure className="relative isolate pt-6 sm:pt-12">
//                                 <svg
//                                     fill="none"
//                                     viewBox="0 0 162 128"
//                                     aria-hidden="true"
//                                     className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
//                                 >
//                                     <path
//                                         d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
//                                         id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
//                                     />
//                                     <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
//                                 </svg>
//                                 <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
//                                     <p>
//                                     Fallon Watts from Watts Creates Learning captivated the young ladies at Uta Halee Academy! During Women's Month, she delivered a timely and engaging session on the Power of Women in Education ending with a motivational painting activity.
//                                     </p>
//                                 </blockquote>
//                                 <figcaption className="mt-8 text-base">
//                                     <div className="font-semibold text-white">Donna Curry</div>
//                                     <div className="mt-1 text-gray-400">Rite of Passage Director of Special Education</div>
//                                 </figcaption>
//                             </figure>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-white pb-16 pt-0 sm:pb-24 sm:pt-0 xl:pb-32">
//                 <div style={{backgroundColor:'rgba(35,71,130)'}} className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
//                     <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
//                         <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
//                             <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
//                                 <img
//                                     alt=""
//                                     src="https://ci3.googleusercontent.com/mail-img-att/AGAZnRqQaItQW3eaSSJ2I3DQXm5hEYB0AxN_dufoVsT53hginVW6nAl1lyQGvHPTu2yffCa-Z2H9pPnZsW6DAK3rQeRPXVz_eN8CPbTucvWbl9rUYHOOp8z3g_Tq2Mi8G_gwV7NYNMj8qP0Us4p8AZhjK9XzGId9fLQcv_uGJP3Y17ybZSduP5CxtbYtqy9I3E0ias8OBuF2tV3sc-UWZyf-a7bW9CrQVvYEn3YC6KHv6U2qKsOt6TsxYuw74dpnnB5NP7yS82qdTYIRFQqROEkFkGFvcfNhogB3WhdzgwFwgdkVVBgsv4dUaCmR6D5wFee9EMkjlhfCsCz-6TFi2uM6iOZNXurhdMxUEr1Z4_0RBcyzjdzcy90yKChxFCr68x3Cj4KYyJjT36QL0nfuH7qi1ttrFm5ARe_qqlndlRsUrvSkH8HskArDFZUex91ZXmVImVr1z1H5VflhGT0_GncaGIZfeGT4q4P_mReCvj-Emz59CrxceNlpPuo3wt3_CCeIgdW6zJKBb52q7qaVOdriRH_f83Y2Se3XAPL64eI8-mqh5OND_5nUsGvLbs0azcsw7VQsyKaL-1HOw0lSX9f7C7klBc9HIkuImAe5bp798-Ini-Bab25bA1-Htf41ZRnpi6X8g9te4Ie0k0bU1LfPJfb44ErB-wqzERtvYs6gJzAUSTmprS45Rrv8fkBJ9M8Ty-gn5_K9Ha7Zgot5N0bxBbb_EoSHlBX-NCp2ils-MXvXAlOVplnd7hYFl2jMeyP3daqCabDxL-Mm13YcCcUiHHgULYguYhIglVxoCcVDtnnT4T7z6jhfTG0VZ4jKxtlc6WbZ57RLA2Cym2dryrz9rmWuaXQhQ5Ej-2gPZpT3xD6yeZ6WJ3gh1WuyfpOuJ_xs_icDux4jRKbUWFtJN6kGMf6F_wo7-jD3ILcwGZnnHBpK02Z2ommBiwfDnZTS7Sjay1ZXU-KSZ-iKPTazEcTtHI-IIDE5SXKjmoUQEGUb3adZIJ-ONrNOClJYv7emxuzm01YBQxSiirZ1sF1i9nKTo7xITGpajA8fE_3TSZ6xnpHU4S5pica7XtTkPF2s=s0-l75-ft"
//                                     className="absolute inset-0 h-fit w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
//                             <figure className="relative isolate pt-6 sm:pt-12">
//                                 <svg
//                                     fill="none"
//                                     viewBox="0 0 162 128"
//                                     aria-hidden="true"
//                                     className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
//                                 >
//                                     <path
//                                         d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
//                                         id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
//                                     />
//                                     <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
//                                 </svg>
//                                 <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
//                                     <p>
//                                     The Leading with Love & Strength workshop had a positive impact on the participants, changing their perception of strengths and how they can apply them in parenting and leadership.
//                                     </p>
//                                 </blockquote>
//                                 <figcaption className="mt-8 text-base">
//                                     <div className="font-semibold text-white">Parent University Coordinator</div>
//                                     <div className="mt-1 text-gray-400">Learning Community Center of North Omaha</div>
//                                 </figcaption>
//                             </figure>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
