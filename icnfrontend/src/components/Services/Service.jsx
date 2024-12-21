import React from 'react';
import { StickyScroll } from '../container/Container';

const content = [
  {
    title: "Web-Tech Design & Development",
    description: "Custom Website Design & Development || E-Commerce Solutions || Mobile-Responsive Web Applications || SEO Optimization & Performance Enhancement. Digital Marketing Solutions: Social Media Marketing (SMM) || Search Engine Marketing (SEM) || Content Creation & Marketing || Email Marketing || Campaigns Analytics & Performance Tracking ",
    // content: "Additional content for the first card, visible in the sticky section."
  },
  {
    title: "Automation Solutions",
    description: "Smart Home Automation for Modern and Convenient Living || Industrial IoT Automation to Streamline Operations and Boost Efficiency || Workflow and Process Automation for Enhanced Productivity and Accuracy || AI-Driven Automation Solutions to Optimize Decision-Making and Performance ",
    // content: "Additional content for the second card, visible in the sticky section."
  },
  {
    title: "Emerging Technology Consulting",
    description: "Technology Strategy & Roadmap Development || Internet of Things (IoT) Solutions & Applications || Artificial Intelligence & Machine Learning Integration || Digital Transformation Advisory || Cloud Computing & Scalability Solutions || Industry 4.0 & Smart System Implementation                                                                                                                                                                                                                                                                                                                                                 ",
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
