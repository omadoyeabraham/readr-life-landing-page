import React from "react"
import bookImage from "../../assets/img/books-1.svg"

export default ({ children }) => (
  <section className="bg-gray-200 has-divider">
    <div className="container-w-1140px pt-10">
      <div className="md:flex md:flex-row md:items-center">
        {/* SVG Image */}
        <div
          className="md:order-1 md:flex-1 animated fadeInRight"
          data-aos="fade-left"
        >
          <img src={bookImage} alt="" />
        </div>

        {/* Call to action text */}
        <div className="md:flex-1 pr-xl-5 md:order-first">
          <h1 className="text-4xl font-medium">
            Foster and Track your reading habit
          </h1>
          <p className="mt-6 text-gray-700">
            Understand how much, and what you read <br /> and become a wiser
            human.
          </p>
          <form className="d-sm-flex mb-2 mt-8">
            <a
              href="/register"
              className="py-3 px-6 rounded text-lg font-bold border border-gray-300 bg-indigo-700 text-white mt-3 sm:mt-0"
            >
              Get Started
            </a>
          </form>
        </div>
      </div>
    </div>
    <div className="divider">
      <svg
        className="bg-primary-alt"
        width="100%"
        height="70px"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  </section>
)
