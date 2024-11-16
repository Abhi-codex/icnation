import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../assets/Icon.png';
import './Project.css';

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },
{
      title: 'Smart Irrigation System',
      description: `At ICN, we are dedicated to revolutionizing farming practices with our state-of-the-art Smart Irrigation Systems. As agriculture faces challenges like water scarcity, climate change, and the need for real-time insights on moisture levels, our solutions empower farmers to optimize water usage, enhance crop productivity, and promote sustainable practices.`,
      features: [
        'Soil Moisture Sensors',
        'Weather Integration',
        'Remote Management',
        'Data Analytics',
        'Sustainable Practices'
      ],
      whyChooseUs: [
        'Expertise: Our team combines agricultural knowledge with technological expertise to deliver the best solutions for farmers.',
        'Customized Solutions: We understand that every farm is unique. Our systems can be tailored to fit your specific needs.',
        'Reliable Support: We offer ongoing support and maintenance to ensure your irrigation system runs smoothly.'
      ],
      image: Icon
    },    
    // Other projects can be added here
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-10">
      <h1 className="text-3xl font-extrabold leading-9 text-black sm:text-4xl sm:leading-10">Projects</h1> 
      <div className="carousel-wrapper relative overflow-hidden w-full max-w-screen-lg">
        <div className="carousel">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-64 bg-white m-4 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpen(project)}
            >
              <img
                src={project.image}
                alt="Project Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">Click to see more details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && selectedProject && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={handleClose}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-2">Why Choose ICN?</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {selectedProject.whyChooseUs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
