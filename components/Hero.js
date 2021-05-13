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
          <p className="mb-1">
            <i class="fa fa-home text-blue-700" aria-hidden="true"></i>
            <span className="pl-2 text-sm">New Ashok Nagar, Delhi 110096</span>
          </p>
          <p className="mb-4">
            <i class="fa fa-envelope text-blue-700" aria-hidden="true"></i>
            <span className="pl-3">iabhishekn98@gmail.com</span>
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="../public/iabhi.pdf" download="iabhi">
                {" "}
                pdf
              </a>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full shadow-2xl">
          <img
            className="object-cover object-center rounded"
            alt="hero"
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
