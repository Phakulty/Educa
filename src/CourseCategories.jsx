import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const CourseCategories = () => {
  const categories = [
    { name: 'Web Development', description: 'Learn how to build modern websites and applications.', path: '/web-development' },
    { name: 'Data Science', description: 'Master data analysis, visualization, and machine learning.', path: '/data-science' },
    { name: 'Graphic Design', description: 'Learn design principles and tools like Photoshop and Illustrator.', path: '/graphic-design' },
    { name: 'Digital Marketing', description: 'Master SEO, social media marketing, and online ads.', path: '/digital-marketing' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <NavLink
                  to={category.path}
                  className="mt-4 inline-block bg-[#275d60] text-white py-2 px-4 rounded hover:bg-[#1d4b4b]"
                >
                  Explore Courses
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
    <p>&copy; {new Date().getFullYear()} Educa. All rights reserved.</p>
    </div>
    </footer>
    </>
  );
};

export default CourseCategories;
