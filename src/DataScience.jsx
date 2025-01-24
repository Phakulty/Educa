import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const DataScience = () => {
  const dataScienceVideos = [
    {
      id: 4,
      title: 'Data Science Basics for Beginners',
      description:
        'This What is Data Science Video will give you an idea of a life of Data Scientist. This Data Science for Beginners video will also explain the steps involved in the Data Science project, roles & salary offered to a Data Scientist.',
      src: 'https://www.youtube.com/embed/X3paOmcrTjQ?si=GlCh9zx8-ey1Yppb',
    },
    {
      id: 5,
      title: 'Data Science: Getting Started',
      description:
        'In this video I answer 11 burning questions as asked from the community page post to mark the 10K subs milestone.',
      src: 'https://www.youtube.com/embed/fXIrmfoCjA4?si=EY_UGw0UFPPaRT16',
    },
    {
      id: 6,
      title: 'Data Science: What You Need to Know',
      description:
        'In this video, I will walk you through the essential skills needed to become a great business analyst. I will cover everything from how to get qualified, through the fundamental business analyst skills, to how to actually write a resume that will land you the interviews.',
      src: 'https://www.youtube.com/embed/YJucKlGa0ZE?si=kXhI2CQ5DpYXsd1t',
    },
  ];

  const [bookmarkedVideos, setBookmarkedVideos] = useState(
    JSON.parse(localStorage.getItem('bookmarkedVideos')) || []
  );

  // Toggle bookmark on a video
  const handleBookmarkToggle = (dataScienceVideo) => {
    const isBookmarked = bookmarkedVideos.some((item) => item.id === dataScienceVideo.id);

    if (isBookmarked) {
      const updatedBookmarks = bookmarkedVideos.filter((item) => item.id !== dataScienceVideo.id);
      setBookmarkedVideos(updatedBookmarks);
      localStorage.setItem('bookmarkedVideos', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = [...bookmarkedVideos, dataScienceVideo];
      setBookmarkedVideos(updatedBookmarks);
      localStorage.setItem('bookmarkedVideos', JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <>
    <Navbar />
    <div className='bg-[#275d60] py-3'>
    <button><NavLink to={'/categories'} className="text-2xl mx-4 mb-8 px-8 rounded-md mt-2 bg-white text-[#275d60]">&#8592;</NavLink></button>
    </div>
    <section id="video-section" className="py-16 bg-[#275d60] text-white w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Data Science Video Tutorials</h3>
        {dataScienceVideos.map((dataScienceVideo) => {
          const isBookmarked = bookmarkedVideos.some((item) => item.id === dataScienceVideo.id);
          return (
            <div
              key={dataScienceVideo.id}
              className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16"
            >
              {/* Video Embed */}
              <div className="w-full md:w-2/5">
                <iframe
                  className="w-full h-80"
                  src={dataScienceVideo.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Description */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                <h4 className="text-xl font-semibold mb-4">{dataScienceVideo.title}</h4>
                <p className="text-white mb-6">{dataScienceVideo.description}</p>

                <div className="flex flex-col items-center md:items-start gap-4">
                  <button
                    onClick={() => handleBookmarkToggle(dataScienceVideo)}
                    className={`px-4 py-2 rounded-md font-semibold duration-300 ${
                      isBookmarked
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                  >
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
    <p>&copy; {new Date().getFullYear()} Educa. All rights reserved.</p>
    </div>
    </footer>
    </>
  );
};

export default DataScience;
