/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import hoodieImg from "../../../assets/img/hoodie.png";
import oversizedImg from "../../../assets/img/oversized.png";
import poloImg from "../../../assets/img/polo.png";
import roundNeckImg from "../../../assets/img/round-neck.png";

const FeaturedSection = () => {
  const navigate = useNavigate();

  const collections = [
    {
      name: "Round Neck T-shirts",
      img: roundNeckImg,
      link: "/collections/round-neck",
    },
    {
      name: "Oversized T-shirts",
      img: oversizedImg,
      link: "/collections/oversized",
    },
    {
      name: "Polo T-shirts",
      img: poloImg,
      link: "/collections/polo",
    },
    {
      name: "Hoodies",
      img: hoodieImg,
      link: "/collections/hoodies",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-textPrimary mb-10">
          Featured Collections
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              onClick={() => navigate(collection.link)}
            >
              {/* Image */}
              <img
                src={collection.img}
                alt={collection.name}
                className="w-full h-48 object-scale-down group-hover:opacity-90"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-primary">
                  {collection.name}
                </h3>
                <p className="text-sm text-textSecondary">
                  Explore our collection of {collection.name.toLowerCase()} and
                  discover the perfect fit for you.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
