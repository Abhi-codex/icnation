import React, { useState } from 'react';
import axios from 'axios';
import Icon from '../../assets/Icon.png';

const Start = () => {
  const [activeForm, setActiveForm] = useState('industry');
  const [formData, setFormData] = useState({
    issueDate: '',
    certificateNumber: '',
    schoolName: '',
    location: '',
    workshop: '',
    schoolEmail: '',
    schoolPhone: '',
    industryName: '',
    industryLocation: '',
    contactPerson: '',
    contactPhone: ''
  });

  const handleButtonClick = (form) => setActiveForm(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    let url = '';
    let payload = {};

    if (formType === 'student') {
      url = 'http://localhost:5000/verifycer';
      payload = {
        issueDate: formData.issueDate,
        certificateNumber: formData.certificateNumber
      };
    } else if (formType === 'school') {
      url = 'http://localhost:5000/school';
      payload = {
        schoolName: formData.schoolName,
        location: formData.location,
        workshop: formData.workshop,
        email: formData.schoolEmail,
        phone: formData.schoolPhone
      };
    } else if (formType === 'industry') {
      url = 'http://localhost:5000/industry';
      payload = {
        industryName: formData.industryName,
        location: formData.industryLocation,
        contactPerson: formData.contactPerson,
        contactPhone: formData.contactPhone
      };
    }

    try {
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md overflow-y-auto">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Welcome to the ICN</h1>
          <img src={Icon} alt="Better" className="mx-auto mb-2 w-1/2" />
        </div>
        <div className="flex space-x-4 mb-4">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleButtonClick('student')}
          >
            Student
          </button>
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => handleButtonClick('school')}
          >
            School
          </button>
          <button 
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => handleButtonClick('industry')}
          >
            Industry
          </button>
        </div>

        {activeForm === 'student' && (
          <form className="mt-4" onSubmit={(e) => handleSubmit(e, 'student')}>
            <h2 className="text-lg font-bold mb-2">Verify Certificate</h2>
            <input 
              type="text" 
              name="issueDate"
              placeholder="Issue Date" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="certificateNumber"
              placeholder="Certificate Number" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
          </form>
        )}

        {activeForm === 'school' && (
          <form className="mt-4" onSubmit={(e) => handleSubmit(e, 'school')}>
            <h2 className="text-lg font-bold mb-2">School Form</h2>
            <input 
              type="text" 
              name="schoolName"
              placeholder="School Name" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="location"
              placeholder="Location" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="workshop"
              placeholder="Workshop" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="schoolEmail"
              placeholder="Email" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="schoolPhone"
              placeholder="Phone Number" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
          </form>
        )}

        {activeForm === 'industry' && (
          <form className="mt-4" onSubmit={(e) => handleSubmit(e, 'industry')}>
            <h2 className="text-lg font-bold mb-2">Industry Form</h2>
            <input 
              type="text" 
              name="industryName"
              placeholder="Industry Name" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="industryLocation"
              placeholder="Location" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="contactPerson"
              placeholder="Contact Person" 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="contactPhone"
              placeholder="Contact Phone No." 
              className="border border-gray-300 p-2 rounded mb-2 w-full" 
              onChange={handleChange}
            />
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Start;