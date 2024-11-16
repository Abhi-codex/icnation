import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    roles: [],
    studentId: '',
    teacherId: '',
    industryId: ''
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'roles') {
      if (checked) {
        setFormData({
          ...formData,
          roles: [...formData.roles, value]
        });
      } else {
        setFormData({
          ...formData,
          roles: formData.roles.filter((role) => role !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    // Add registration logic here (e.g., API call)
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 flex flex-col items-center justify-center p-10">
        <h2 className="text-2xl font-bold mb-8">Register</h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Roles</label>
            <div className="flex flex-col space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="roles"
                  value="Student"
                  checked={formData.roles.includes('Student')}
                  onChange={handleInputChange}
                  className="text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="roles"
                  value="Teacher"
                  checked={formData.roles.includes('Teacher')}
                  onChange={handleInputChange}
                  className="text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Teacher</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="roles"
                  value="Industry"
                  checked={formData.roles.includes('Industry')}
                  onChange={handleInputChange}
                  className="text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Industry</span>
              </label>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-gray-600 text-sm mt-4">
            Already have an account?{' '}
            <a href="/homepage" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>

      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
        {/* <img src={registerImage} alt="Registration" className="w-full h-full object-cover" /> */}
      </div>
    </div>
  );
};

export default Register;
