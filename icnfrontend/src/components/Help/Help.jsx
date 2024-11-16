import React, { useState } from 'react';
import axios from 'axios';

const Help = () => {
  // State to store form data
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState(''); // To show the success or error message

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const feedbackData = {
      email,
      name,
      phone,
      feedback,
    };

    try {
      const response = await axios.post('http://localhost:5000/feedback', feedbackData);
      setStatus('Feedback submitted successfully!');
      // Optionally, clear form fields after submission
      setEmail('');
      setName('');
      setPhone('');
      setFeedback('');
    } catch (error) {
      setStatus('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="flex flex-wrap mb-4">
      <div className='w-full lg:w-1/2 p-8'>
        <h2 className='mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100'>
          FAQs
        </h2>
        <ul className='flex flex-col items-start gap-8'>
          <li className='w-full'>
            <p className='text-lg font-medium leading-6 text-gray-900'>
              What is a home automation?
            </p>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Home automation refers to using technology to control and automate household systems and devices, such as lighting, heating, security, appliances, and entertainment systems. By integrating these devices into a central network or platform, users can control them remotely or set them to perform specific actions automatically, often through a smartphone app, voice commands, or a home automation hub.
            </p>
          </li>
          <li className='w-full'>
            <p className='text-lg font-medium leading-6 text-gray-900'>
              Why do someone need home automation?
            </p>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Home automation provides a way to simplify tasks, enhance security, and create a more comfortable and efficient living environment. For many, it offers an added layer of control over their home, making life safer, easier, and more enjoyable.
            </p>
          </li>
          <li className='w-full'>
            <p className='text-lg font-medium leading-6 text-gray-900'>
              What is Smart Irrigation system?
            </p>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              A Smart Irrigation System is an automated watering system designed to optimize water usage for agriculture, gardens, and landscapes by using advanced technology and data-driven processes. This system uses real-time data from sensors, weather forecasts, and soil conditions to determine when, where, and how much water is needed for plants, making irrigation more efficient, eco-friendly, and cost-effective.
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-1/2 p-10">
        <section className="h-auto w-full">
          <form onSubmit={handleSubmit} className="container mx-auto shadow-lg border-solid cursor-pointer">
            <div className="space-y-6 bg-slate-800 rounded-lg p-4">
              <h2 className=' flex mb-2 text-3xl font-extrabold items-center justify-center text-white'>
              Feedback Form
              </h2>
              <div className="items-center w-full p-4 space-y-4 text-gray-500">
                <h2 className="max-w-sm mx-auto text-white">Email Id</h2>
                <div className="max-w-sm mx-auto">
                  <div className="relative">
                    <input
                      type="email"
                      id="user-info-email"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div className="items-center w-full p-4 space-y-4 text-gray-500">
                <h2 className="max-w-sm mx-auto text-white">Personal info</h2>
                <div className="max-w-sm mx-auto space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      id="user-info-name"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="user-info-phone"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div className="items-center w-full p-8 space-y-4 text-gray-500">
                <h2 className="max-w-sm mx-auto text-white">Feedback</h2>
                <div className="w-full max-w-sm pl-2 mx-auto space-y-5">
                  <div className="relative">
                    <textarea
                      id="user-info-feedback"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Feedback for us"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div className="w-full px-4 pb-4 ml-auto">
                <button
                  type="submit"
                  className="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
          {/* Show status message */}
          {status && <p className="text-center text-lg text-gray-500 mt-4">{status}</p>}
        </section>
      </div>
    </div>
  );
};

export default Help;