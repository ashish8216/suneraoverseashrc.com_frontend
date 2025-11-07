import { CiMedal, CiTimer } from "react-icons/ci";
import { LuWand } from "react-icons/lu";
import { Link } from "react-router";

export default function Aboutone() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {/* Left Image Stack */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Front Image */}
          <div className="relative z-10">
            <img
              src="https://stock.asiannepalinterior.com/storage/files/6/IMG_20250721_175254.jpg"
              alt="Smiling construction worker"
              loading="lazy"
              className="w-64 md:w-72 rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Background Image */}
          <div className="relative md:absolute md:bottom-0 md:left-0 md:z-0 md:translate-x-1/2 md:translate-y-1/2 md:transform mt-4 md:mt-0">
            <img
              src="https://stock.asiannepalinterior.com/storage/files/6/IMG_20250721_180226.jpg"
              alt="Handcrafted woodwork"
              loading="lazy"
              className="w-64 md:w-72 rounded-md border-4 border-white shadow-xl transition-transform duration-300 hover:scale-95"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h3 className="mb-2 font-semibold tracking-wider text-red-500 uppercase">
            About Us
          </h3>
          <h2 className="mb-4  font-bold text-gray-900 ">
            We Build for You a Better Tomorrow
          </h2>

          <p className="mb-4 font-semibold text-gray-700">
            ABC is a reputed company in Nepal that provides a wide range of
            services, including interior and exterior design, construction,
            renovation, and maintenance for both residential and commercial
            properties.
          </p>

          <p className="mb-6 leading-relaxed text-gray-600">
            With a team of experienced professionals, ABC is committed to
            delivering high-quality services that meet the unique needs and
            preferences of its clients. The company uses the latest technology
            and materials to ensure that every project is completed to the
            highest standards of quality and durability.
          </p>

          <Link to="/about">
            <button className="mt-4 rounded bg-red-600 px-6 py-2 text-white transition hover:bg-blue-700">
              About us
            </button>
          </Link>
          <br />

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-blue-500">
                <CiTimer />
              </div>
              <span className="font-medium text-gray-800">
                Ontime at
                <br />
                Services
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl text-blue-500">
                <LuWand />
              </div>
              <span className="font-medium text-gray-800">
                24/7
                <br />
                Services
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl text-blue-500">
                <CiMedal />
              </div>
              <span className="font-medium text-gray-800">
                Verified
                <br />
                Professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
