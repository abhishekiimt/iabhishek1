import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-4 leading-relaxed">Hello, I'm</p>
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-gray-900">
            Abhishek Pandey
          </h1>
          <p className="font-bold text-2xl mb-2">Front-end Developer</p>
          <p className="mb-4 leading-relaxed">
            I love code and design a websites and surffing web to explore new
            advance website that motivate me . Also, I like pushing myself and
            taking up new challenges.
          </p>
          {/* 
          <p className="mb-1 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="pl-2">New Ashok Nagar, Delhi 110096</span>
          </p>
           
          <p className="mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span className="pl-3">iabhishekn98@gmail.com</span>
          </p>
          */}
          <div className="flex justify-center">
            <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a
                href="/iabhi.pdf"
                download="iabhi"
                className="flex justify-center"
              >
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="pl-1">resume</span>
              </a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full shadow-2xl">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            height="100%"
            width="100%"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(9deg) rotateX(1deg) rotate(1deg)",
            }}
            src="/iabhishek.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
