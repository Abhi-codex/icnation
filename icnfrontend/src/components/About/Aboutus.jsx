import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 sm:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
        At ICN, we are a forward-thinking team of engineering professionals dedicated to delivering excellence. We specialize in providing innovative solutions in web technologies, automation, IIoT, and emerging technologies. Our services extend to industrial consultancy, empowering businesses to adapt and thrive in the dynamic landscape of the Fourth Industrial Revolution.
Founded in 2024, ICN is more than a service provider; we are your partner in growth and transformation. Our expertise ensures tailor-made solutions that align with your goals, from web tech solutions to advanced automation and IIoT implementation. Together, let's shape the future of technology and industry. </p>
        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Vision</h2>
            <p className="text-gray-600">
              To provide Security & maintenance in Societies and Industries by using emerging technologies.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Mission</h2>
            <p className="text-gray-600">
              At ICN, we are committed to innovative services as per International standards and certifications. To this effect, we firmly believe that the industrial & societal automation solutions we offer meet our customer needs within schedule and within budgets.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: 'Abhey Tyagi',
              role: 'Technical Lead',
              email: 'abheytyagi@icnation.in',
              mobile: '+91 90844 52009',
            },
            // {
            //   name: 'Ankit',
            //   role: 'Lead Developer',
            //   email: 'charlie@example.com',
            //   mobile: '+91 98765 43210',
            // },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-80 flex flex-col items-center text-center"
            >
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Email:</strong> {member.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Mobile:</strong> {member.mobile}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
