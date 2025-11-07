import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTestimonial } from "../api/use";

export default function Testimonials() {
  const { testimonials, loading, error } = useTestimonial();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!testimonials || testimonials.length === 0)
    return <p>No service found</p>;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map(({ desction, image, name }, id) => (
            <SwiperSlide key={id}>
              <div className="p-6 bg-gray-50 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border">
                    <img
                      src={image}
                      alt={name}
                      aria-hidden="true"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{desction}"</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Add more <SwiperSlide> as needed */}
        </Swiper>
      </div>
    </section>
  );
}
