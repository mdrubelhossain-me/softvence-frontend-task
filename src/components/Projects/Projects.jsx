import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";
import imageOne from "../../assets/images/projects.jpg";
import location from "../../assets/icons/ci_location.svg";
import menu from "../../assets/icons/ep_menu.svg";
import car from "../../assets/icons/ant-design_car-filled.svg";
import bed from "../../assets/icons/fa-solid_bed.svg";
import bath from "../../assets/icons/fa-solid_bath.svg";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
  {
    id: 2,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
  {
    id: 3,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
  {
    id: 4,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
  {
    id: 5,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
  {
    id: 6,
    image: imageOne,
    name: "4321 Alton Rd, Miami Beach",
    location: "Miami, Florida",
    size: "2350 Square Feet",
    garages: "4 Garage",
    rooms: "2 Bedrooms",
    bathrooms: "3 Bathrooms",
    amount: "328,000",
    ltv: "84.65%",
    rate: "11.75%",
    terms: "12 Months",
    total: "3,45,000",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="projects-container">
      <h2 className="projects-title">Past Projects</h2>
      <p className="sub-title">
        A Proven Track Record Funding Projects Like These
      </p>

      <div className="swiper-wrapper-box">
        {/* Custom Arrows */}
        <div className="p-custom-swiper-button p-custom-prev" ref={prevRef}>
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
        <div className="p-custom-swiper-button p-custom-next" ref={nextRef}>
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
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1191: { slidesPerView: 2 },
            1450: { slidesPerView: 3 },
          }}
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <div className="image-box">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <span>For Sale</span>
                </div>
                <h2 className="name">{project.name}</h2>
                <div className="p-location">
                  <img src={location} width={21} height={21} alt="Location" />
                  <span>{project.location}</span>
                </div>

                <div className="p-details">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "17px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img src={menu} width={20} height={20} alt="" />
                      <span>{project.size}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img src={bed} width={20} height={20} alt="" />
                      <span>{project.rooms}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "17px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img src={car} width={20} height={20} alt="" />
                      <span>{project.garages}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img src={bath} width={20} height={20} alt="" />
                      <span>{project.bathrooms}</span>
                    </div>
                  </div>
                </div>

                <div className="p-rates">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaCircle size={8} />
                      <span>
                        Loan Amount: <b>${project.amount}</b>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaCircle size={8} />
                      <span>
                        Rate: <b>{project.rate}</b>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaCircle size={8} />
                      <span>
                        LTV: <b>{project.ltv}</b>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaCircle size={8} />
                      <span>
                        Term: <b>{project.terms}</b>
                      </span>
                    </div>
                  </div>
                </div>

                <button type="button" className="total-button">
                  ${project.total}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="btn-section">
        <Link to="/" className="cta-button">
          <span className="cta-text">Get Terms For Your Project</span>
          <span className="cta-icon-box">
            <span className="cta-icon"></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
