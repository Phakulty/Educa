import React from 'react';
import { useAuth } from './AuthContext'; 
import { useNavigate } from 'react-router-dom';


const EnrollNowButton = () => {
  const { user } = useAuth(); // Get the current user
  const navigate = useNavigate(); // Navigation hook

  const handleEnrollNow = () => {
    if (user) {
      // If the user is logged in, navigate to course categories
      navigate('/categories');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
    onClick={handleEnrollNow}
    className="bg-[#275d60] text-white px-4 py-2 rounded-md font-semibold hover:no-underline duration-500 hover:bg-[#f8fafc] hover:text-[#275d60]">
    Enroll Now
  </button>
  );
};

export default EnrollNowButton;
