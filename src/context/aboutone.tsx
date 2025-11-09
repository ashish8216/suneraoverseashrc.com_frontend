import { CiMedal, CiTimer } from "react-icons/ci";
import { LuWand } from "react-icons/lu";
import { Link } from "react-router";

export default function AboutOne() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full" data-wow-delay="0.1s">
          <img
            src="/img/about.jpg"
            alt="About us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6" data-wow-delay="0.5s">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900">
            Ultimate Welding and Quality Metal Solutions
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
            Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.
            Pellentesque eu consequat augue.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-4 bg-gray-100 rounded-full">
                <CiMedal className="text-3xl text-blue-600" />
              </div>
              <h5 className="text-lg font-semibold uppercase text-gray-800">
                Certified Expert & Team
              </h5>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-4 bg-gray-100 rounded-full">
                <CiTimer className="text-3xl text-blue-600" />
              </div>
              <h5 className="text-lg font-semibold uppercase text-gray-800">
                Fast & Reliable Services
              </h5>
            </div>
          </div>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <LuWand className="text-blue-600 mr-3" />
              Many variations of passages of lorem ipsum
            </li>
            <li className="flex items-center">
              <LuWand className="text-blue-600 mr-3" />
              Many variations of passages of lorem ipsum
            </li>
            <li className="flex items-center">
              <LuWand className="text-blue-600 mr-3" />
              Many variations of passages of lorem ipsum
            </li>
          </ul>

          <div className="border-4 border-blue-600 text-center p-6 rounded-lg">
            <h4 className="text-xl font-bold uppercase text-gray-900">
              We’re Good in All Metal Works Using Quality Welding Tools
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
