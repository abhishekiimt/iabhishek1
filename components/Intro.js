const Intro = () => {
  return (
    <div>
      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700">
                <img
                  alt="..."
                  height="100%"
                  width="100%"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white transform">
                    I like my job because it involves learning. I like being
                    smart people who are trying to figure out new things. I like
                    the fact that if people really try they can figure out how
                    to invest things that actually have an impact. -- Bill Gates
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Designer</h6>
                      <p className="mb-4 text-gray-500">
                        I value simple content structure, clean design patterns,
                        and thoughtful interactions. <br />
                        with - Figma And Canva
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Front-end Developer
                      </h6>
                      <p className="mb-4 text-gray-500">
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Responsive Website
                      </h6>
                      <p className="mb-4 text-gray-500">
                        I like build a website user friendly and mobile friendly
                        to enhance user interactivity
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Netlify and Vercel
                      </h6>
                      <p className="mb-4 text-gray-500">
                        I Build website and deploy on genrally on Vercel and
                        Netlify free hosting site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-800 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        HTML 5
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-gray-900 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        CSS3
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blue-900 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        React
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className=" bg-gray-900 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        height="100%"
                        width="100%"
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__340.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Github / Git
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48" id="about">
              <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                My Programming Skills
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                A skill is the learned ability to perform an action with
                determined results with good execution often within a given
                amount of time, energy, or both. Skills can often be divided
                into domain-general and domain-specific skills..
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                The ability to use one's knowledge effectively and readily in
                execution or performance.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  HTML5
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  CSS3
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase  rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  JavaScript
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  React.js
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Next.js
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Git/Github
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  aws beginner
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white  last:mr-0 mr-2 mt-2">
                  heroku ! netlify ! vercel
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-2xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold">My Education</h3>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-indigo-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-900">
                          <span className="text-pink-700 text-xl">
                            10 <sup>th</sup> - CBSE{" "}
                          </span>{" "}
                          <br />
                          Naga ji Saraswati Vidya Mandir, Ballia, Uttar Pradesh{" "}
                          <br />
                          <span className="text-pink-900"> Percentage</span> -
                          78%
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-indigo-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-900">
                          <span className="text-pink-700 text-xl">
                            12 <sup>th</sup> - CBSE{" "}
                          </span>{" "}
                          <br />
                          Naga ji Saraswati Vidya Mandir, Ballia, Uttar Pradesh{" "}
                          <br />
                          <span className="text-pink-900"> Percentage</span> -
                          60%
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-indigo-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-900">
                          <span className="text-pink-700 text-xl">
                            {" "}
                            Graduation - BCA{" "}
                          </span>
                          <br />
                          IIMT College of Management, Greater Noida, Uttar
                          Pradesh <br />
                          <span className="text-pink-900"> Percentage</span> -
                          69 %
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-50 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-indigo-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-900">
                          <span className="text-pink-700 text-xl">
                            {" "}
                            Master - MCA{" "}
                          </span>{" "}
                          <br />
                          IIMT College of Engineering, Greater Noida, Uttar
                          Pradesh <br />
                          <span className="text-pink-900"> Percentage</span> -
                          75 %
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                height="100%"
                width="100%"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/bca.jpg"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
