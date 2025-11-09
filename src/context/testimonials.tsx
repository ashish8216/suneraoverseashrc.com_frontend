import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTestimonial } from "../api/use";

export default function Testimonials() {
  const { testimonials, loading, error } = useTestimonial();

  if (loading) return <p className="text-center py-6">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 py-6">Error: {error}</p>;
  if (!testimonials || testimonials.length === 0)
    return <p className="text-center py-6">No testimonials found.</p>;

  return (
    <section className="py-16 bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-white">
            What Our Clients Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" p-8 rounded-2xl shadow-md text-center">
                <p
                  className="
    relative text-gray-700 italic mb-6
    before:content-['“'] after:content-['”']
    before:text-6xl after:text-6xl
    before:text-gray-300/30 after:text-gray-300/30
    before:absolute after:absolute
    before:-top-6 before:-left-4
    after:-bottom-6 after:-right-4
    block leading-relaxed
  "
                >
                  {item.message || item.description}
                </p>

                <h4 className="text-lg font-semibold text-white">
                  {item.name}
                </h4>
                {item.position && (
                  <p className="text-sm text-white">{item.position}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    
  );
}
