import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Reviews.css";

import imageOne from "../../assets/images/r1.png";
import imageTwo from "../../assets/images/r2.png";
import imageThree from "../../assets/images/r3.png";
import imageFour from "../../assets/images/r4.png";
import { Link } from "react-router-dom";

const reviewsData = [
  {
    id: 1,
    image: imageOne,
    name: "John Doe",
    designation: "What an amazing experience",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
  {
    id: 2,
    image: imageTwo,
    name: "Jane Smith",
    designation: "A journey to remember",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
  {
    id: 3,
    image: imageThree,
    name: "Alice Johnson",
    designation: "Agency made it special",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
  {
    id: 4,
    image: imageFour,
    name: "Bob Brown",
    designation: "Unforgettable moments",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
  {
    id: 5,
    image: imageTwo,
    name: "Sarah Lee",
    designation: "A perfect getaway",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
  {
    id: 6,
    image: imageThree,
    name: "Mark Taylor",
    designation: "Absolutely loved it!",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit amet ligula at libero ullamcorper fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod libero eu quam efficitur, a elementum sem fermentum. Fusce vel ante vel ex cursus.",
  },
];

const Reviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title" data-aos="fade-up">Ridge Street Client Reviews</h2>
      <div className="half-box"></div>

      <div className="swiper-wrapper-box">
        {/* Custom Arrows */}
        <div className="custom-swiper-button custom-prev" ref={prevRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
          >
            <path
              d="M51.666 63.9046L28.3327 40.5712L51.666 17.2379"
              stroke="#F2F2F2"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="custom-swiper-button custom-next" ref={nextRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
          >
            <path
              d="M28.333 17.2373L51.6663 40.5706L28.333 63.9039"
              stroke="#F2F2F2"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Connect refs
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            991: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1191: { slidesPerView: 2 },
             1250: { slidesPerView: 3 },
            1600: { slidesPerView: 4 },
          }}
        >
          {reviewsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="review-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="review-image"
                />
                <h3 className="review-name">{item.name}</h3>
                <p className="designation">{item.designation}</p>
                <p className="review-text">{item.reviews}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="btn-section">
        <Link to="/" className="cta-button">
          <span className="cta-text">Get Approved Online</span>
          <span className="cta-icon-box">
            <span className="cta-icon"></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
