import React from 'react';
import { useAuth } from './AuthContext'; // Assuming useAuth provides user authentication
import { useNavigate } from 'react-router-dom';


const GetStartedButton = () => {
  const { user } = useAuth(); // Get the current user
  const navigate = useNavigate(); // Navigation hook

  const handleGetStarted = () => {
    if (user) {
      // If the user is logged in, navigate to course categories
      navigate('/categories');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleGetStarted}
      className="text-[#275d60] bg-white py-2 px-4 rounded-md"
    >
      Get Started
    </button>
  );
};

export default GetStartedButton;
