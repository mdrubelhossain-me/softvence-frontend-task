import React from "react";
import "./Resources.css";
import { Link } from "react-router-dom";
import imageOne from "../../assets/images/r1.jpg";
import imageTwo from "../../assets/images/r2.jpg";
import imageThree from "../../assets/images/r3.jpg";

const resourcesData = [
  {
    id: 1,
    image: imageOne,
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing is an investment technique that combines the best aspects of flipping houses and wholesaling. With wholetailing, you can earn large returns.",
  },
  {
    id: 2,
    image: imageTwo,
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing is an investment technique that combines the best aspects of flipping houses and wholesaling. With wholetailing, you can earn large returns.",
  },
  {
    id: 3,
    image: imageThree,
    date: "May 9, 2024",
    title: "Investor’s Guide To Real Estate Wholetailing",
    description:
      "Real estate wholetailing is an investment technique that combines the best aspects of flipping houses and wholesaling. With wholetailing, you can earn large returns.",
  },
];

const Resources = () => {
  return (
    <div className="resources-container" data-aos="fade-up">
      <div className="heading">
        <h2>Other Resources You’ll Like</h2>
        <p>
          <Link to="/" className="view-more-link">
            View More
          </Link>
        </p>
      </div>

      <div className="resources-card-container">
        {resourcesData.map((resource) => (
          <div className="resource-card" key={resource.id}>
            <img
              src={resource.image}
              alt={resource.title}
              className="resource-image"
            />
            <p className="date">{resource.date}</p>
            <h4 className="r-title">{resource.title}</h4>
            <p className="description">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
