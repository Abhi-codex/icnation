import React from 'react';
import Icon from '../../assets/Icon.png';
import './Collaboration.css';

const Collaboration = () => {
  const email = "abheytyagi010@gmail.com";

  const handleCollabClick = () => {
    window.location.href = `mailto:${email}?subject=Collaboration Request&body=Hi, I would like to collaborate with you.`;
  };

  return (
    <div className="bg-[rgb(2,28,51)] text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto  py-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Empowering Home Builders and Innovators
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Partner with us to revolutionize the way you build and renovate.
        </p>
      </section>

      {/* Icon Section */}
      <section className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={Icon}
              alt={`Icon ${index + 1}`}
              className="w-27 h-27 sm:w-30 sm:h-30"
            />
           
          </div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[rgb(2,28,51)] py-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Ready to Build the Future Together?
          </h3>
          <p className="mt-4 text-gray-300">
            Join hands with us and create something extraordinary.
          </p>
          <button
            onClick={handleCollabClick}
            className="mt-6 px-6 py-3 text-lg font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Collab with us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
