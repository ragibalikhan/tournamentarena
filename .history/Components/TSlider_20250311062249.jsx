import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const SliderSection = () => {
  // Sample data for slides (Replace with actual content)
  const slides = [
    { id: 1, image: "/slide1.png", title: "Slide 1", description: "Description for slide 1" },
    { id: 2, image: "/slide2.png", title: "Slide 2", description: "Description for slide 2" },
    { id: 3, image: "/slide3.png", title: "Slide 3", description: "Description for slide 3" },
  ];

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Featured Matches</h2>
        <p className="text-lg text-gray-400 mt-4">
          Check out the latest and greatest battles happening right now!
        </p>

        {/* Swiper Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={400}
                    height={250}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{slide.title}</h3>
                  <p className="text-gray-400 mt-2">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
