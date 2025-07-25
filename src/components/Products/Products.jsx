import React from "react";
import "./Products.css";
import iconOne from "../../assets/icons/ff.svg";
import iconTwo from "../../assets/icons/rent.svg";
import iconThree from "../../assets/icons/construction.svg";
import ArrowOne from "../../assets/icons/arrow-2.svg";
import { Link } from "react-router-dom";

const Products = () => {
  const cards = [
    {
      icon: iconOne,
      title: "Fix and Flip",
      subtitle: "Funding For Rehab + Purchase",
      amount: "$50,000 up to $3,000,000",
      rate: "Interest Rate 10.5% - 12.99%",
      fee: "Origination Fee From 1.5%",
      limit: "Up to 85% of Purchase and 100% of Rehab",
      type: "fix",
    },
    {
      icon: iconTwo,
      title: "Rental Property",
      subtitle: "30 Year DSCR loans in Florida and Texas",
      amount: "Up to $1,500,000",
      rate: "Interest Rate 6.75% - 8.25%",
      fee: "Origination Fee From 1.5%",
      limit: "Up to 85% of LTV",
      type: "rent",
    },
    {
      icon: iconThree,
      title: "Ground Up Construction",
      subtitle: "Ground Up Construction loans in Florida and Texas",
      amount: "Up to $3,500,000",
      rate: "Interest Rate 11.25% - 13.25%",
      fee: "Origination Fee From 1.5%",
      limit: "Up to 80% of LTC",
      type: "construction",
    },
  ];

  return (
    <div className="products-card">
      <h2 className="products-title">Loan Products</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.type === "rent" ? "rent-card" : ""} ${
              card.type === "construction" ? "construction-card" : ""
            }`}
          >
            <div className="icon">
              <img src={card.icon} width={80} height={80} alt={card.title} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="subtitle">{card.subtitle}</p>
            <ul>
              <li>{card.amount}</li>
              <li>{card.rate}</li>
              <li>{card.fee}</li>
              <li>{card.limit}</li>
              <li className="learn-more">
                <Link to="/" className="lrn-more">
                  Learn More
                </Link>
              </li>
            </ul>

            <Link to="/" className="cta-button">
              <span className="cta-text">GET APPROVED ONLINE</span>
              <span className="cta-icon-box">
                <span className="cta-icon"></span>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
