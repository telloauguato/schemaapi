import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex cursor-pointer items-center font-medium text-gray-900 md:mb-0">
            <span className="ml-3 text-2xl font-semibold">Schema<span className="text-blue-600 dark:text-blue-500">API</span></span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a className="mr-5 cursor-pointer hover:text-gray-900">Get started</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Types</a>
            <a className="mr-5 cursor-pointer hover:text-gray-900">Github</a>
          </nav>
        </div>
      </header>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image className="rounded object-cover object-center" alt="hero" src="/Users.schema.png" />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Practical and useful solution for generating realistic test data.</h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">Button</button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">Button</button>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className="flex w-full flex-wrap">
            <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 1</h2>
                  <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 2</h2>
                  <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 3</h2>
                  <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 4</h2>
                  <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
              </div>
              <div className="relative flex">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">FINISH</h2>
                  <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                </div>
              </div>
            </div>
            <Image className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="step" />
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
              <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className="title-font text-sm font-medium tracking-wider text-gray-900">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
              <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className="title-font text-sm font-medium tracking-wider text-gray-900">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="p-4 lg:mb-0 lg:w-1/3">
              <div className="h-full text-center">
                <Image alt="testimonial" className="mb-8 inline-block h-20 w-20 rounded-full border-2 border-gray-200 bg-gray-100 object-cover object-center" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="mb-4 mt-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
                <h2 className="title-font text-sm font-medium tracking-wider text-gray-900">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
            © 2020 Tailblocks —
            <a href="https://twitter.com/knyttneve" className="ml-1 text-gray-600" rel="noopener noreferrer" target="_blank">@knyttneve</a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="h-5 w-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}