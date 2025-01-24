import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/Signup';
import DashboardPage from './DashboardPage';
import CourseCategories from './CourseCategories';
import ProtectedRoute from './ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import WebDevelopment from './WebDevelopment';
import DataScience from './DataScience';
import GraphicDesign from './GraphicDesign';
import DigitalMarketing from './DigitalMarketing';

function App() {
  return (
    <>
    <Router>
      <Routes>
      {/* <Route path="categories" element={<CourseCategories />} /> */}
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
          <ProtectedRoute restrictedTo='loggedOut'>
            <LoginPage />
          </ProtectedRoute>
          } />
        <Route path="/signup" element={
          <ProtectedRoute restrictedTo='loggedout'>
            <SignupPage />
          </ProtectedRoute>} />
        <Route path="/dashboard" element={
          <ProtectedRoute restrictedTo='loggedIn'>
            <DashboardPage />
          </ProtectedRoute>
          } />
        <Route path="/categories" element={
          <ProtectedRoute>
          <CourseCategories />
          </ProtectedRoute>
          } />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
