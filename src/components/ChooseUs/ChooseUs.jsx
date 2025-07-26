import React from "react";
import "./ChooseUs.css";
import iconOne from "../../assets/icons/c1.svg";
import iconTwo from "../../assets/icons/c2.svg";
import iconThree from "../../assets/icons/c3.svg";
import { Link } from "react-router-dom";

const chooseUsData = [
  {
    id: 1,
    title: "Simple Online Application",
    description:
      "Easy 2 minute online application, with no credit pull required.",
    icon: iconOne,
    alt: "Icon One",
  },
  {
    id: 2,
    title: "Quick Turn Around",
    description: "Receive a Term Sheet within the hour.",
    icon: iconTwo,
    alt: "Icon Two",
  },
  {
    id: 3,
    title: "Reliable Financing",
    description:
      "Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.",
    icon: iconThree,
    alt: "Icon Three",
  },
];

const ChooseUs = () => {
  return (
    <div className="choose-us" data-aos="fade-up">
      <h2 className="title">Why Choose Us?</h2>
      <div className="choose-us-content">
        {chooseUsData.map((item) => (
          <div key={item.id} className="choose-us-item">
            <div className="text">
              <h6 className="item-title">{item.title}</h6>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="rectangle">
              <img src={item.icon} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>

      <div className="btn-section">
        <Link to="/" className="cta-button">
          <span className="cta-text">More About Us</span>
          <span className="cta-icon-box">
            <span className="cta-icon"></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ChooseUs;
