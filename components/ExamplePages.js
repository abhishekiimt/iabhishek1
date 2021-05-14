import Link from "next/link";

const ExamplePages = () => {
  return (
    <div>
      <section className="block relative z-1 bg-gray-600 min-h-0 pb-40 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/login">
                    <div className=" hover:mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        height='100%'
                        width='100%'
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img2.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        height='100%'
                        width='100%'
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img2.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        height='100%'
                        width='100%'
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img2.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className=" absolute bottom-0 right-0 p-10 bg-gray-600 ">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-white hover:text-gray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamplePages;
