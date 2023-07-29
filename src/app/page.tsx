import Head from 'next/head';

export default function Home() {
  return (
    <>
        {/* <div className="preloader-area text-center left-0 right-0 top-0 bottom-0 bg-white fixed z-9999">
            <div className="preloader absolute -mt-20 left-0 right-0 top-1/2 m-auto -translate-y-2/4">
                <div className="waviy font-bold text-50px">
                    <span className="inline-block relative">T</span>
                    <span className="text-primary-color inline-block relative">O</span>
                    <span className="inline-block relative">G</span>
                    <span className="text-secondary-color inline-block relative">Y</span>
                </div>
            </div>
        </div> */}

        <div className="navbar-area shadow-navbar relative z-2">
            <div className="togy-responsive-nav lg:hidden">
                <div className="container">
                    <div className="togy-responsive-menu">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="togy-nav hidden lg:block">
                <div className="container xl:max-w-full 3xl:max-w-[1700px]">
                    <nav className="navbar flex flex-wrap">
                        <a className="navbar-brand self-center" href="index.html">
                            <img src="assets/img/logo.png" alt="logo" />
                        </a>
                        <div className="flex self-center grow basis-auto">
                            <ul className="self-center flex flex-row ml-auto mr-auto">
                                <li className="mr-12 xl:mr-15 relative group">
                                    <a href="#" className="block active font-semibold text-16px ease-in duration-300 relative pr-15 before:absolute before:right-6 before:top-38 before:w-1 before:h-9 before:bg-black-color before:-rotate-45 before:ease-in before:duration-300 after:absolute after:right-0 after:top-38 after:w-1 after:h-9 after:bg-black-color after:rotate-45 after:ease-in after:duration-300 hover:text-primary-color hover:before:bg-primary-color hover:after:bg-primary-color pt-30 pb-30">Home</a>
                                </li>
                                <li className="ml-12 xl:ml-15">
                                    <a href="contact.html" className="block font-semibold text-16px ease-in duration-300 hover:text-primary-color pt-30 pb-30">Contact Us</a>
                                </li>
                            </ul>
                            <div className="self-center">
                                <a href="contact.html" className="inline-block font-semibold text-13px md:text-14px lg:text-15px rounded-sm text-white pt-17 pb-13 pl-35 pr-35 bg-secondary-gradient-color shadow-custom-box-shadow hover:shadow-secondary-btn ease-in duration-300">Get Started</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div className="navbar-for-responsive hidden">
            <div className="mean-menu">
                <ul className="navbar-nav">
                    <li>
                        <a href="#" className="active">Home</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
                <div className="absolute right-45 top-3 md:top-1 md:right-50">
                    <a href="contact.html" className="inline-block font-semibold text-11px md:text-14px lg:text-15px rounded-sm text-white pt-13 pb-10 pl-15 pr-15 md:pl-25 md:pr-25 bg-secondary-gradient-color shadow-custom-box-shadow hover:shadow-secondary-btn ease-in duration-300">Get Started</a>
                </div>
            </div>
        </div>

        <div className="main-banner-area relative z-1 pt-60 md:pt-80 xl:pt-40">
            <div className="container xl:max-w-full 3xl:max-w-[1700px]">
                <div className="grid gap-25 md:gap-40 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="main-banner-content self-center md:text-center lg:text-left">
                        <h1 className="font-black text-25px md:text-40px lg:text-44px xl:text-55px 2xl:text-60px 3xl:text-70px mb-10 md:mb-12 lg:mb-15">Togy Helps Teams Move Work Forward Together</h1>
                        <p className="text-13px md:text-15px lg:text-15px xl:text-16px leading-8 text-optional-color md:max-w-[625px] lg:max-w-[100%] xl:max-w-[540px] md:m-auto lg:m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
                        <form className="mt-15 md:mt-25 xl:mt-30 md:max-w-[625px] md:m-auto lg:max-w-[100%] xl:max-w-[520px] relative lg:m-0 lg:mt-25">
                            <input type="text" placeholder="Enter Your Email" className="input-newsletter font-medium text-13px md:text-15px h-55 md:h-60 block w-full md:w-[67%] lg:w-[60%] pl-15 md:pl-25 pr-15 md:pr-25 bg-gray-light-color md:pt-3 pt-4 rounded-sm outline-0 placeholder:text-optional-color placeholder:transition placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-transparent" />
                            <button type="submit" className="inline-block font-medium text-13px md:text-15px rounded-sm text-white h-50 sm:h-55 md:h-60 pl-25 pr-25 md:pl-35 md:pr-35 leading-[53px] md:leading-[63px] sm:absolute right-0 top-0 bg-gradient-color mt-15 sm:mt-0 hover:shadow-primary-btn ease-in duration-300">Start Free Trial</button>
                        </form>
                    </div>
                    <div className="main-banner-image text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <img src="assets/img/banner/banner-img1.png" alt="main-banner-image" />
                    </div>
                </div>
            </div>
            <div className="left-[45%] top-[8%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape1.png" className="animate-custom-rotateme" alt="shape" /></div>
            <div className="bottom-[8%] left-[43%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape2.png" className="animate-custom-rotateme" alt="shape" /></div>
        </div>

        <div className="features-area pt-40 lg:pt-100 pb-60 md:pb-80 lg:pb-100 relative z-1 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(assets/img/shape/bg1.jpg)` }}>
            <div className="container">
                <div className="section-title mb-35 md:mb-40 lg:mb-50 text-center">
                    <h2 className="font-black text-22px md:text-30px lg:text-35px xl:text-40px mb-6 ">Our Awesome Features</h2>
                    <p className="lg:text-16px md:text-15px text-13px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
                </div>
                <div className="grid gap-25 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <div className="single-features-box border p-[20px] sm:border-0 sm:p-0 text-center sm:text-left wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <img src="assets/img/icon/icon1.svg" className="mb-25 md:mb-30 inline-block" alt="icon" />
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-12">
                            <a href="services-details.html" className="inline-block hover:text-primary-color ease-in duration-300">
                                Top Flexibility
                            </a>
                        </h3>
                        <p className="leading-7 md:leading-8 text-optional-color mb-10 md:mb-15 text-13px md:text-15px lg:text-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <a href="services-details.html" className="link-btn inline-block relative pr-20 font-medium text-13px md:text-14px lg:text-15px text-secondary-color ease-in duration-100 hover:text-secondary-color hover:tracking-wide">
                            Learn More <img src="assets/img/icon/secondary-arrow-right.svg" className="absolute right-0 top-1 md:top-3" alt="arrow-right" />
                        </a>
                    </div>
                    <div className="single-features-box border p-[20px] sm:border-0 sm:p-0 text-center sm:text-left wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <img src="assets/img/icon/icon2.svg" className="mb-25 md:mb-30 inline-block" alt="icon" />
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-12">
                            <a href="services-details.html" className="inline-block hover:text-primary-color ease-in duration-300">
                                Time Saving
                            </a>
                        </h3>
                        <p className="leading-7 md:leading-8 text-optional-color mb-10 md:mb-15 text-13px md:text-15px lg:text-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <a href="services-details.html" className="link-btn inline-block relative pr-20 font-medium text-13px md:text-14px lg:text-15px text-secondary-color ease-in duration-100 hover:text-secondary-color hover:tracking-wide">
                            Learn More <img src="assets/img/icon/secondary-arrow-right.svg" className="absolute right-0 top-1 md:top-3" alt="arrow-right" />
                        </a>
                    </div>
                    <div className="single-features-box border p-[20px] sm:border-0 sm:p-0 text-center sm:text-left wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <img src="assets/img/icon/icon3.svg" className="mb-25 md:mb-30 inline-block" alt="icon" />
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-12">
                            <a href="services-details.html" className="inline-block hover:text-primary-color ease-in duration-300">
                                Best Management
                            </a>
                        </h3>
                        <p className="leading-7 md:leading-8 text-optional-color mb-10 md:mb-15 text-13px md:text-15px lg:text-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <a href="services-details.html" className="link-btn inline-block relative pr-20 font-medium text-13px md:text-14px lg:text-15px text-secondary-color ease-in duration-100 hover:text-secondary-color hover:tracking-wide">
                            Learn More <img src="assets/img/icon/secondary-arrow-right.svg" className="absolute right-0 top-1 md:top-3" alt="arrow-right" />
                        </a>
                    </div>
                    <div className="single-features-box border p-[20px] sm:border-0 sm:p-0 text-center sm:text-left wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                        <img src="assets/img/icon/icon4.svg" className="mb-25 md:mb-30 inline-block" alt="icon" />
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-10 lg:mb-12">
                            <a href="services-details.html" className="inline-block hover:text-primary-color ease-in duration-300">
                                Collaborative
                            </a>
                        </h3>
                        <p className="leading-7 md:leading-8 text-optional-color mb-10 md:mb-15 text-13px md:text-15px lg:text-16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <a href="services-details.html" className="link-btn inline-block relative pr-20 font-medium text-13px md:text-14px lg:text-15px text-secondary-color ease-in duration-100 hover:text-secondary-color hover:tracking-wide">
                            Learn More <img src="assets/img/icon/secondary-arrow-right.svg" className="absolute right-0 top-1 md:top-3" alt="arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="top-[15%] left-[3%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape3.png" className="animate-custom-movebounce" alt="shape" /></div>
        </div>

        <div className="overview-area pt-60 md:pt-80 lg:pt-100 pb-60 md:pb-80 lg:pb-100 relative z-1">
            <div className="container">
                <div className="grid gap-30 lg:gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="overview-image md:pt-60 md:pl-100 lg:pt-30 lg:pl-30 xl:pt-60 xl:pl-100 relative z-1 circle-shape-bg before:w-377 md:before:h-388 lg:before:h-[330px] xl:before:h-388 before:absolute before:left-0 before:top-0 before:hidden before:-z-1 md:before:inline md:before:animate-none 2xl:before:animate-custom-slow-rotateme">
                        <img src="assets/img/overview/overview-img1.gif" className="rounded-md wow animate__animated animate__fadeInUp" data-wow-delay=".1s" alt="overview-image" />
                    </div>
                    <div className="overview-content self-center xl:pl-100 lg:pl-30 lg:relative lg:top-12 xl:top-20">
                        <h2 className="font-black text-22px md:text-28px lg:text-35px xl:text-40px mb-12 lg:mb-15 ">Manage Everything in One Workspace</h2>
                        <p className="text-13px md:text-15px lg:text-16px leading-7 md:leading-8 text-optional-color">Togy Planning, tracking and delivering your team’s best work has never been easier. We make it easiest for you through the Togy software.</p>
                        <a href="contact.html" className="inline-block font-semibold text-13px md:text-14px lg:text-15px mt-15 md:mt-20 rounded-sm text-white pt-17 pb-15 pl-35 pr-35 bg-secondary-gradient-color shadow-custom-box-shadow hover:shadow-secondary-btn ease-in duration-300">Get Started</a>
                    </div>
                </div>
            </div>
            <div className="right-[2%] bottom-[47%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape4.png" className="animate-custom-movebounce" alt="shape" /></div>
        </div>

        <div className="overview-area pb-60 md:pb-80 lg:pb-100 relative z-1 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(assets/img/shape/bg2.jpg)` }}>
            <div className="container">
                <div className="grid gap-30 lg:gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="overview-content self-center lg:pr-30 xl:pr-100 order-2 lg:order-1 lg:relative lg:top-12 xl:top-20">
                        <h2 className="font-black text-22px md:text-28px lg:text-35px xl:text-40px mb-12 lg:mb-15 text-black-color">Stay Organized And Connected</h2>
                        <p className="text-13px md:text-15px lg:text-16px leading-7 md:leading-8 text-optional-color">Togy Planning, tracking and delivering your team’s best work has never been easier. We make it easiest for you through the Togy software.</p>
                        <a href="contact.html" className="inline-block font-semibold text-13px md:text-14px lg:text-15px mt-15 md:mt-20 rounded-sm text-white pt-17 pb-15 pl-35 pr-35 bg-gradient-color shadow-custom-box-shadow hover:shadow-primary-btn ease-in duration-300">Get Started</a>
                    </div>
                    <div className="overview-image md:pt-60 md:pr-100 lg:pt-30 lg:pr-30 xl:pt-60 xl:pr-100 relative z-1 circle-shape-bg2 before:w-377 md:before:h-388 lg:before:h-[329px] xl:before:h-388 before:absolute before:right-0 before:top-0 before:-z-1 before:hidden md:before:inline order-1 lg:order-2 md:before:animate-none 2xl:before:animate-custom-slow-rotateme">
                        <img src="assets/img/overview/overview-img2.gif" className="rounded-md wow animate__animated animate__fadeInUp" data-wow-delay=".1s" alt="overview-image" />
                    </div>
                </div>
            </div>
            <div className="left-0 bottom-[15%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape5.png" className="animate-custom-movebounce" alt="shape" /></div>
        </div>

        <div className="features-area bg-gray-50 lg:bg-transparent pt-60 md:pt-80 lg:pt-50 pb-60 md:pb-80 lg:pb-100">
            <div className="container">
                <div className="section-title mb-35 md:mb-40 lg:mb-50 text-center">
                    <h2 className="font-black text-22px md:text-30px lg:text-35px xl:text-40px mb-6 ">Get Work Done On Time, All The Time!</h2>
                    <p className="lg:text-16px md:text-15px text-13px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
                </div>
                <div className="text-center lg:max-w-[850px] xl:max-w-[1080px] lg:m-auto relative z-1 rounded-sm lg:rounded-lg">
                    <img src="assets/img/tools-box.jpg" className="rounded-sm lg:rounded-lg wow animate__animated animate__fadeInUp" data-wow-delay=".1s" alt="tools-box" />
                    <img src="assets/img/shape/shape6.png" className="absolute -z-1 -top-10 -left-35 animate-custom-rotateme hidden lg:inline" alt="shape" />
                    <img src="assets/img/shape/shape7.png" className="absolute -right-50 animate-custom-movebounce bottom-100 hidden lg:inline" alt="shape" />
                </div>
            </div>
        </div>

        <div className="free-trial-area bg-gray-50 pt-60 md:pt-80 lg:pt-100 pb-60 md:pb-80 lg:pb-100 relative z-1">
            <div className="container">
                <div className="free-trial-content text-center">
                    <h2 className="font-black text-22px md:text-30px lg:text-35px xl:text-40px mb-8 lg:max-w-[800px] lg:mx-auto text-black-color">See Everything The Team’s Working On In One Place</h2>
                    <p className="text-13px md:text-15px lg:text-16px lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-optional-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
                    <form className="mt-20 md:mt-30 md:max-w-2xl mx-auto relative">
                        <input type="text" placeholder="Enter Your Email Address" className="input-newsletter text-center font-medium text-13px md:text-15px h-55 md:h-65 block w-full pl-15 md:pl-25 pr-15 md:pr-25 bg-white shadow-custom-box-shadow4 pt-3 rounded-sm outline-0 placeholder:text-[#9B9B9B] placeholder:transition placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-transparent" />
                        <button type="submit" className="block w-full font-medium text-13px md:text-15px rounded-sm text-white h-50 md:h-60 pl-25 md:pl-35 pr-25 md:pr-35 leading-[53px] md:leading-63 bg-gradient-color mt-20 ">Start <span className="font-bold">15 Days</span> Free Trial</button>
                    </form>
                </div>
            </div>
            <div className="left-[4%] top-[30%] 2xl:left-[10%] absolute z-1 hidden xl:inline"><img src="assets/img/shape/shape9.png" className="animate-custom-moveleftbounce" alt="shape" /></div>
            <div className="right-[1%] top-[20%] 2xl:right-[10%] absolute -z-1 hidden xl:inline"><img src="assets/img/shape/shape10.png" className="animate-custom-movebounce" alt="shape" /></div>
        </div>

        <div className="mobile-app-area relative pt-60 pb-60 md:pt-80 md:pb-80 z-1 lg:pt-100 lg:pb-100">
            <div className="container">
                <div className="grid gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
                    <div className="integrate-apps-content relative xl:top-30 xl:-mr-80 self-center lg:text-center xl:text-left">
                        <h2 className="font-black text-22px md:text-30px lg:text-35px xl:text-34px 2xl:text-38px mb-12 lg:mb-15 ">Download Mobile App To Stay Connected</h2>
                        <p className="text-13px md:text-15px lg:text-16px leading-7 md:leading-8 text-optional-color lg:max-w-[685px] lg:m-auto xl:max-w-[100%]">Togy Projects gives you the added advantage of several other Togy apps and third party apps through seamless integrations.</p>
                        <div className="btn-box">
                            <a href="#" className="inline-block relative font-bold text-13px md:text-15px lg:text-16px mt-15 md:mt-25 rounded-sm text-white pt-15 md:pt-17 pb-11 md:pb-13 pl-16 sm:pl-75 pr-16 sm:pr-30 bg-gradient-color shadow-custom-box-shadow hover:shadow-primary-btn ease-in duration-300">
                                <img src="assets/img/icon/play-store.svg" className="sm:absolute sm:left-30 sm:top-1/2 sm:-translate-y-2/4 mb-10 sm:mb-0" alt="play-store" />
                                <span className="block text-12px font-normal mb-4 md:mb-2">GET IT ON</span>
                                Google Play
                            </a>
                            <a href="#" className="ml-10 md:ml-15 xl:ml-9 2xl:ml-15 inline-block relative font-bold text-13px md:text-15px lg:text-16px mt-15 md:mt-25 rounded-sm text-white pt-15 md:pt-17 pb-11 md:pb-13 pl-16 sm:pl-75 pr-16 sm:pr-30 bg-secondary-gradient-color shadow-custom-box-shadow hover:shadow-secondary-btn ease-in duration-300">
                                <img src="assets/img/icon/apple-store.svg" className="sm:absolute sm:left-30 sm:top-1/2 sm:-translate-y-2/4 mb-10 sm:mb-0" alt="play-store" />
                                <span className="block text-12px font-normal mb-4 md:mb-2">GET IT ON</span>
                                Apple Store
                            </a>
                        </div>
                    </div>
                    <div className="mobile-app-image xl:col-span-2 xl:pl-100 wow animate__animated animate__fadeInUp text-center" data-wow-delay=".1s">
                        <img src="assets/img/mobile-app.png" className="inline-block" alt="bg-image" />
                    </div>
                </div>
            </div>
            <div className="left-[16%] top-[14%] absolute -z-1 hidden xl:inline"><img src="assets/img/shape/shape11.png" className="animate-custom-rotateme" alt="shape" /></div>
        </div>

        <div className="support-area relative bg-secondary-gradient-color z-2 pt-60 md:pt-80 lg:pt-100 pb-60 md:pb-80 lg:pb-100">
            <div className="container">
                <div className="grid gap-18 md:gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="support-content xl:col-span-2">
                        <h2 className="font-black text-22px md:text-30px lg:text-34px xl:text-40px mb-12 text-white">24/7 Customer Support</h2>
                        <p className="text-13px md:text-15px lg:text-16px md:max-w-[700px] leading-7 md:leading-8 text-white">Our team is here to provide you with personalized and outstanding service. We also offer a range of self-learning tools in our support center:</p>
                    </div>
                    <div className="support-btn self-center lg:text-right">
                        <a href="contact.html" className="inline-block font-semibold text-13px md:text-15px rounded-sm text-white pt-17 pb-13 pl-25 md:pl-35 pr-25 md:pr-35 bg-gradient-color hover:bg-white hover:bg-none hover:ease-in duration-300">Contact Us Now</a>
                    </div>
                </div>
            </div>
            <div className="top-[-35%] left-[2%] 2xl:top-[-12%] absolute -z-1 hidden xl:inline"><img src="assets/img/shape/shape12.png" className="animate-custom-movebounce" alt="shape" /></div>
            <div className="right-[10%] bottom-[-30.4%] absolute -z-1 hidden xl:inline"><img src="assets/img/shape/shape13.png" className="animate-custom-moveleftbounce" alt="shape" /></div>
            <div className="top-[20%] left-[52%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape14.png" className="animate-custom-rotateme" alt="shape" /></div>
        </div>

        <footer className="footer-area pt-60 lg:pt-100 pb-60 lg:pb-100 relative z-1 bg-gray-gradient-color">
            <div className="container">
                <div className="grid gap-25 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
                    <div className="single-footer-widget">
                        <a href="index.html" className="logo inline-block mb-20 lg:mb-25">
                            <img src="assets/img/logo.png" alt="logo" />
                        </a>
                        <img src="assets/img/footer.png" alt="footer-image" />
                    </div>
                    <div className="single-footer-widget">
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-15 md:mb-20 lg:mb-25 text-dark-color">
                            Quick Links
                        </h3>
                        <ul>
                            <li className="mb-12 md:mb-15 lg:mb-20 last:mb-0">
                                <a href="about.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color relative before:absolute before:right-0 before:top-1/2 before:-translate-y-2/4 before:w-18 before:h-2 before:bg-secondary-color before:opacity-0 before:invisible hover:before:opacity-100 hover:before:visible pr-25">
                                    Home
                                </a>
                            </li>
                            <li className="mb-12 md:mb-15 lg:mb-20 last:mb-0">
                                <a href="portfolio.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color relative before:absolute before:right-0 before:top-1/2 before:-translate-y-2/4 before:w-18 before:h-2 before:bg-secondary-color before:opacity-0 before:invisible hover:before:opacity-100 hover:before:visible pr-25">
                                    Contact
                                </a>
                            </li>
                            <li className="mb-12 md:mb-15 lg:mb-20 last:mb-0">
                                <a href="pricing.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color relative before:absolute before:right-0 before:top-1/2 before:-translate-y-2/4 before:w-18 before:h-2 before:bg-secondary-color before:opacity-0 before:invisible hover:before:opacity-100 hover:before:visible pr-25">
                                    Login
                                </a>
                            </li>
                            <li className="mb-12 md:mb-15 lg:mb-20 last:mb-0">
                                <a href="faq.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color relative before:absolute before:right-0 before:top-1/2 before:-translate-y-2/4 before:w-18 before:h-2 before:bg-secondary-color before:opacity-0 before:invisible hover:before:opacity-100 hover:before:visible pr-25">
                                    Register
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="single-footer-widget md:-ml-35">
                        <h3 className="font-bold text-18px md:text-20px lg:text-24px mb-15 md:mb-20 lg:mb-25 text-dark-color">
                            Contact Us
                        </h3>
                        <ul>
                            <li className="mb-15 md:mb-15 lg:mb-20 text-optional-color last:mb-0 relative text-13px md:text-15px lg:text-16px pl-25">
                                <img src="assets/img/icon/phone-call.svg" className="absolute top-0 md:top-2 left-0" alt="icon" />
                                <span className="font-medium ">Call Us:</span>
                                <a href="tel:+(323)750-1234" className="text-optional-color transition hover:text-secondary-color">+(323) 750-1234</a>
                            </li>
                            <li className="mb-15 md:mb-15 lg:mb-20 text-optional-color last:mb-0 relative text-13px md:text-15px lg:text-16px pl-25">
                                <img src="assets/img/icon/location-pin.svg" className="absolute top-0 md:top-2 left-0" alt="icon" />
                                <span className="font-medium ">Address:</span>
                                <a href="#" target="_blank" className="text-optional-color transition hover:text-secondary-color">+7011 Vermont Ave, Los Angeles, CA 90044 </a>
                            </li>
                            <li className="mb-15 md:mb-15 lg:mb-20 text-optional-color last:mb-0 relative text-13px md:text-15px lg:text-16px pl-25">
                                <img src="assets/img/icon/email.svg" className="absolute top-0 md:top-2 left-0" alt="icon" />
                                <span className="font-medium ">Mail Us:</span>
                                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#c7afa2ababa887b3a8a0bee9a4a8aa" className="text-optional-color transition hover:text-secondary-color"><span className="__cf_email__" data-cfemail="a2cac7cececde2d6cdc5db8cc1cdcf">[email&#160;protected]</span></a>
                            </li>
                        </ul>
                        <ul className="mt-15 md:mt-25">
                            <li className="inline-block mr-5 last:mr-0">
                                <a href="#" target="_blank" className="block w-35 rounded-full transition relative h-35 bg-[#4267B2] text-center hover:opacity-90">
                                    <img src="assets/img/social/white-facebook.svg" className="w-8 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="facebook" />
                                </a>
                            </li>
                            <li className="inline-block mr-5 last:mr-0">
                                <a href="#" target="_blank" className="block w-35 rounded-full transition relative h-35 bg-[#1DA1F2] text-center hover:opacity-90">
                                    <img src="assets/img/social/white-twitter.svg" className="w-15 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="twitter" />
                                </a>
                            </li>
                            <li className="inline-block mr-5 last:mr-0">
                                <a href="#" target="_blank" className="block w-35 rounded-full transition relative h-35 bg-[#2867B2] text-center hover:opacity-90">
                                    <img src="assets/img/social/white-linkedin.svg" className="w-15 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="linkedin" />
                                </a>
                            </li>
                            <li className="inline-block mr-5 last:mr-0">
                                <a href="#" target="_blank" className="block w-35 rounded-full transition relative h-35 bg-instagram-gradient-color text-center hover:opacity-90">
                                    <img src="assets/img/social/white-instagram.svg" className="w-15 absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" alt="instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-[7%] bottom-[6%] absolute -z-1 hidden lg:inline"><img src="assets/img/shape/shape15.png" className="animate-custom-rotateme" alt="shape" /></div>
        </footer>

        <div className="copyright-area pt-25 md:pt-35 pb-25 md:pb-35 text-center lg:text-left">
            <div className="container">
                <div className="grid gap-5 md:gap-25 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="copyright">
                        <p className="text-13px md:text-15px lg:text-16px text-optional-color">&copy;2022 <span className="font-semibold text-primary-color">Togy</span>. All rights reserved by <a href="https://envytheme.com/" className="font-semibold bg-primary-gradient-color" target="_blank">EnvyTheme</a></p>
                    </div>
                    <div className="copyright-info self-center">
                        <ul className="lg:text-right">
                            <li className="inline-block mr-15 md:mr-20 lg:mr-25 last:mr-0 mt-10 md:mt-0">
                                <a href="privacy-policy.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="inline-block mr-15 md:mr-20 lg:mr-25 last:mr-0 mt-10 md:mt-0">
                                <a href="privacy-policy.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color">
                                    Security
                                </a>
                            </li>
                            <li className="inline-block mr-15 md:mr-20 lg:mr-25 last:mr-0 mt-10 md:mt-0">
                                <a href="terms-conditions.html" className="inline-block text-optional-color text-13px md:text-15px lg:text-16px transition hover:text-secondary-color">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="progress-wrap bg-white rounded-full block z-50 cursor-pointer fixed w-[3rem] h-[3rem] right-24 bottom-24 opacity-0 invisible">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-center m-auto absolute left-0 right-0 top-1/2 -translate-y-2/4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
        </div>
    </>
  )
}
