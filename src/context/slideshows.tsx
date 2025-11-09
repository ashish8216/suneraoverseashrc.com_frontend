export default function Slideshows() {
  return (
    <section className="relative overflow-hidden bg-blue-300">
      <div className="container mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            We Help To Grow <br /> Your Business
          </h1>
          <p className="text-gray-600 max-w-md">
            Anyone can invest money to different currency to increase their
            earnings by the help of trading through online.
          </p>
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-gray-800 hover:text-gray-900">
              <span className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center">
                ▶
              </span>
              Watch Video
            </button>
          </div>
          {/* Social Icons */}
          <div>
            <span className="text-gray-800 font-semibold">Follow Us</span>
            <div className="flex gap-4 mt-3 text-gray-600 text-lg">
              <a href="#" className="hover:text-orange-500">
                
              </a>
              <a href="#" className="hover:text-orange-500">
                
              </a>
              <a href="#" className="hover:text-orange-500">
                
              </a>
              <a href="#" className="hover:text-orange-500">
                
              </a>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex justify-end">
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
            alt=""
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
