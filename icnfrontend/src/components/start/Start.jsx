import React from "react";
import Icon from "../../assets/Icon.png";
import background from "../../assets/background.avif";

const FrontPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-5xl w-full text-center">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <img src={Icon} alt="Logo" className="w-1/3 h-1/3 object-cover" />
        </div>

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
        What We Do:
        </h1>
        <p className="text-lg text-gray-600 mb-8">
        Empowering Businesses with Cutting-Edge Web Design, Automation, and Emerging Technology Solutions. Unlock Growth and Innovation Today!
        </p>

        {/* Call-to-Action */}
        <div className="flex justify-center space-x-4 flex-wrap">
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={() =>
              window.open(
                "https://wa.link/628yfz",
                "_blank"
              )
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
