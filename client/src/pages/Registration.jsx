import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setError] = useState({});
  const navigate = useNavigate();

  // Handle back home click
  const handleBackHomeClick = () => {
    navigate('/home')
  }

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.phone || formData.phone.length !== 10) formErrors.phone = 'Valid phone number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Valid email is required';
    if (!formData.password || formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    return formErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    validateForm();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    // Reset error
    setError('');
  
    try {
      // POST request to the backend
      const response = await fetch('API_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        // Handle successful registration
        alert('Registration successful!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        console.log('Form submitted with data:', {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password
        });
      } else {
        // Handle errors from the backend (e.g. validation errors)
        const data = await response.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError(`Error connecting to the server ${error.message}`);
    } 
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Pre-Event Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 text-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium mb-2 text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 text-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 text-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium mb-2 text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 text-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-lg font-medium mb-2 text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 text-lg border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
      <div className='mt-10'>
      <button 
          className="mb-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleBackHomeClick}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
