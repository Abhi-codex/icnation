import React from "react";
import Icon from "../../assets/Icon.png";
import background from "../../assets/background.avif";

const FrontPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-60 rounded-lg shadow-xl p-6 sm:p-8 max-w-5xl w-full text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src={Icon}
            alt="Logo"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-1/3 md:h-1/3 object-cover"
          />
        </div>

        {/* Welcome Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What We Do:
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
          Empowering Businesses with Cutting-Edge Web Design, Automation, and Emerging Technology Solutions. Unlock Growth and Innovation Today!
        </p>

        {/* Call-to-Action */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
          <button
            className="bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base hover:bg-blue-600 transition duration-200"
            onClick={() =>
              window.open("https://wa.link/628yfz", "_blank")
            }
          >
            Contact Us on WhatsApp
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base hover:bg-green-700 transition duration-200"
            onClick={() =>
              window.open("mailto:intelligentcybernation@gmail.com", "_blank")
            }
          >
            Contact Us via Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
