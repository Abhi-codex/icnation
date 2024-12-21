import React, { useState } from 'react';
import axios from 'axios';

const Help = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = { email, name, phone, feedback };

    try {
      await axios.post('http://localhost:5000/feedback', feedbackData);
      setStatus('Feedback submitted successfully!');
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feedback Form Section */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6 border border-gray-300 rounded-lg p-6 shadow-sm">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="feedback" className="block text-gray-700 font-medium mb-1">
                Feedback
              </label>
              <textarea
                id="feedback"
                className="w-full rounded-lg border-gray-300 py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
          {status && <p className="text-center text-lg text-gray-500 mt-4">{status}</p>}
        </section>

        {/* FAQs Section */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">FAQs</h2>
          <ul className="space-y-6">
            <li>
              <p className="text-lg font-medium text-gray-900">What web design services do you offer?</p>
              <p className="text-gray-600 mt-2">
                      We provide custom website design, e-commerce development, SEO optimization, mobile-responsive web apps, and digital marketing solutions to help businesses thrive online.
              </p>
            </li>
            <li>
              <p className="text-lg font-medium text-gray-900">Can you help with digital marketing?</p>
              <p className="text-gray-600 mt-2">
                           Absolutely! We offer social media marketing, content creation, email campaigns, and search engine marketing to boost your online presence.
              </p>
            </li>
            <li>
              <p className="text-lg font-medium text-gray-900">What types of automation do you provide?</p>
              <p className="text-gray-600 mt-2">
              We specialize in smart home automation, industrial IoT automation, workflow automation, and AI-driven solutions for enhanced efficiency.  </p>
            </li>
            <li>
              <p className="text-lg font-medium text-gray-900">Why is emerging technology consulting important?</p>
              <p className="text-gray-600 mt-2">
             
It helps businesses stay competitive by leveraging the latest technologies to enhance operations, reduce costs, and drive innovation.

 </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Help;
