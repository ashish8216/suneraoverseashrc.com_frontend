import { Swiper, SwiperSlide } from "swiper/react";
import { useSlideshow } from "../api/use";
import { Navigation, A11y, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";

export default function Slideshows() {
  const { slideshow, loading, error } = useSlideshow();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!slideshow || slideshow.length === 0) return <p>No slideshow found</p>;

  return (
    <div className="w-full max-w-screen">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
        onSlideChange={() => console.log("Slide changed")}
      >
        {slideshow.map(({ title, image, p }, index) => (
          <SwiperSlide key={index} aria-label={`Slide: ${title}`}>
            <div
              className="relative h-[500px] bg-center bg-cover flex items-center justify-start"
              style={{
                backgroundImage: `url(${image})`,
                backgroundColor: "#000",
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

              {/* Slide content */}
              <div className="relative z-20 p-[30px] md:p-0 md:pl-40 max-w-xl text-left">
                <h2
                  className=" font-bold text-white"
                  style={{ fontFamily: "Montserrat,sans-serif" }}
                >
                  {title}
                </h2>
                <p className="font-bold sm:text-lg text-base text-white">{p}</p>
                <Link to="/about">
                  <button className="mt-4 rounded bg-red-600 px-6 py-2 text-white transition hover:bg-blue-700">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
