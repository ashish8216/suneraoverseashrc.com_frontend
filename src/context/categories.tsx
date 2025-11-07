import { Link } from "react-router";
import { useTags } from "../api/use";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  const { tags, loading, error } = useTags();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tags || tags.length === 0) return <p>No Categories found</p>;

  return (
    <div className="container my-[60px]">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {tags.map(({ id, name, image, slug }) => (
          <SwiperSlide key={id} className="p-2">
            <Link to={`/tag/${slug}`}>
              <div className="group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
                <div className="flex h-22 w-22 items-center justify-center overflow-hidden rounded-full bg-gray-200 shadow-md transition-shadow duration-300 group-hover:shadow-lg md:h-32 md:w-32">
                  <img
                    src={image}
                    alt={`Photo of ${name}`}
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-gray-800">{name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
