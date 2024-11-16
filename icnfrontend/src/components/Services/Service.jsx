import React from 'react';
import { StickyScroll } from '../container/Container';

const content = [
  {
    title: "Home Automation and Monitoring",
    description: "We facilitate homeowners to initiate automated features for their household appliances. For example, you can set scheduled automations to turn on lights at a specific time, when you go out of the house - activate your system for real time monitoring, so on & so forth.",
    // content: "Additional content for the first card, visible in the sticky section."
  },
  {
    title: "Industrial Consultancy",
    description: "We handle mechatronics work in a more comprehensive sense, falling under the heading of industry 4.0, namely the Industrial Internet of things. Examples include home automation in homes, real-time and remote monitoring and analysis of machine tools in mechanical manufacturing companies, and so on. Services may include implementation or advising services.",
    // content: "Additional content for the second card, visible in the sticky section."
  },
  {
    title: "Private and Government Project Handling",
    description: "Our team is proficient in managing both private and government projects. We ensure that projects are completed on time, within budget, and to the highest standards. Our expertise covers various sectors and industries.",
    // content: "Our team is proficient in managing both private and government projects. We ensure that projects are completed on time, within budget, and to the highest standards. Our expertise covers various sectors and industries."
  }
];

const Service = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover our range of services designed to meet your needs and exceed your expectations. Explore below to find out more about what we offer.
        </p>
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Service;
