import { FaCheckCircle } from "react-icons/fa";
import img from "../../../assets/bg/baaztechno.png";

export default function AboutUsSection() {
  return (
    <section className="bg-[#3d0f41] min-h-screen py-16 px-4 flex items-center">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}   
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          {/* Heading */}
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
            About Us
          </h2>


          {/* Subheading */}
          <h3 className="text-[#b520a3] text-lg sm:text-2xl font-medium">
            Explore Endless Possibilities with BaazTechno
          </h3>

          {/* Paragraph */}
          <p className="text-white text-sm sm:text-base leading-relaxed">
            At BaazTechno, we specialize in crafting innovative solutions that
            empower businesses to excel in today’s dynamic world. From cutting-edge
            technology to unmatched support, we ensure that every step of your
            journey is seamless and rewarding.
          </p>

          {/* Key Points */}
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="text-[#b520a3] text-xl" />
              <span className="text-white text-sm sm:text-base">
                Tailored solutions for businesses of all sizes.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="text-[#b520a3] text-xl" />
              <span className="text-white text-sm sm:text-base">
                A passionate team driving innovation globally.
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <button className="bg-[#7436bb] hover:bg-[#b520a3] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
              Get Quote
            </button>
            <button className="bg-[#b520a3] hover:bg-[#7436bb] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Enlarged Blob Background */}
          <div className="absolute bg-gradient-to-r from-[#7436bb] to-[#b520a3] rounded-full w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] blur-3xl opacity-30 z-0"></div>

          {/* Enlarged Circular Image */}
          <div className="relative bg-gradient-to-r from-[#7436bb] to-[#b520a3] rounded-full p-3 sm:p-6 shadow-xl">
            <img
              src={img}
              alt="Company Logo"
              className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
