import React from 'react';
// import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import GetStartedButton from './GetStartedButton';
// import { useAuth } from './AuthContext';
// import { useNavigate } from 'react-router-dom';
import EnrollNowButton from './EnrollNowButton';





const LandingPage = () => {

  // const { isLoggedIn } = useAuth(); // Authentication state
  // const navigate = useNavigate();

  const courses = [
    {title: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and React to build modern websites and web applications.',  path: '/web-development',},
    {title: 'Data Science', description: 'Master Python, machine learning, and data visualization to become a data scientist.' , path: '/data-science',},
    {title: 'Graphic Design', description: 'Learn design principles, Adobe Photoshop, and Illustrator to create stunning graphics.', path: '/graphic-design',}
  ];

  const features = [
    {title: 'Expert Instructors', description: 'Learn from professionals with years of real-world experience.'},
    {title: 'Flexible Learning', description: 'Access courses anytime and learn at your own pace.'},
    {title: 'Certificate of Completion', description: 'Receive a certificate upon successfully completing a course.'}
  ];

  

  
 


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-[#275d60] text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold mb-4">Learn Anytime, Anywhere</h2>
          <p className="text-lg mb-6">Access top-quality courses taught by industry experts and advance your career.</p>
          <GetStartedButton />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Popular Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">{course.title}</h4>
              <p className="text-gray-600 mb-4">{course.description}</p>
            <EnrollNowButton />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Why Learn with Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-gray-600 mb-4">Have questions? We'd love to hear from you.</p>
          <a href="mailto:support@learnx.com" className="text-[#9333ea] font-semibold hover:underline">support@educa.com</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Educa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;