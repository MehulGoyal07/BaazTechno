/* eslint-disable no-unused-vars */
import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", review: "Amazing quality and comfortable clothing!" },
    { name: "Sarah Johnson", review: "Oversized T-shirts are a game-changer!" },
    { name: "Michael Brown", review: "The polo t-shirts are premium quality!" },
    { name: "Emily White", review: "Baazwear hoodies keep me warm and cozy!" },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-textPrimary mb-12">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F9F9F9] rounded-lg shadow-md p-6 text-center"
            >
              <p className="text-lg font-medium text-textSecondary mb-4">
                {testimonial.review}
              </p>
              <h3 className="text-xl font-bold text-primary">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
