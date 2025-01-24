import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const GraphicDesign = () => {
  const videos = [
    {
      id: 7,
      title: 'Graphic Design Basics for Beginners',
      description:
        'In this video I am going to attempt to answer this question and give you my take on it from my experience.',
      src: 'https://www.youtube.com/embed/WONZVnlam6U?si=KYb6WpAeOibAkwP4',
    },
    {
      id: 8,
      title: 'Graphic Design Fundamentals: Getting Started',
      description:
        'In this video I am going to discuss the first key visual element, and discuss Line as a visual element in Graphic design.',
      src: 'https://www.youtube.com/embed/F0PTse89XIE?si=3tns4Zq8LI61NZPG',
    },
    {
      id: 9,
      title: 'Graphic Design Intro: What You Need to Know',
      description:
        'In this video I am going to discuss the second key visual element, and discuss ‘Colour’ as a visual element in Graphic design.',
      src: 'https://www.youtube.com/embed/byDNMLTuOqI?si=Rd9X6JFdTV9uHUNd',
    },
  ];

  const [bookmarkedVideos, setBookmarkedVideos] = useState(
    JSON.parse(localStorage.getItem('bookmarkedVideos')) || []
  );

  // Toggle bookmark on a video
  const handleBookmarkToggle = (video) => {
    const isBookmarked = bookmarkedVideos.some((item) => item.id === video.id);

    if (isBookmarked) {
      const updatedBookmarks = bookmarkedVideos.filter((item) => item.id !== video.id);
      setBookmarkedVideos(updatedBookmarks);
      localStorage.setItem('bookmarkedVideos', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = [...bookmarkedVideos, video];
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
        <h3 className="text-3xl font-bold text-center mb-10">Graphic Design Video Tutorials</h3>
        {videos.map((video) => {
          const isBookmarked = bookmarkedVideos.some((item) => item.id === video.id);
          return (
            <div
              key={video.id}
              className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16"
            >
              {/* Video Embed */}
              <div className="w-full md:w-2/5">
                <iframe
                  className="w-full h-80"
                  src={video.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Description */}
              <div className="w-full md:w-2/5 text-center md:text-left">
                <h4 className="text-xl font-semibold mb-4">{video.title}</h4>
                <p className="text-white mb-6">{video.description}</p>

                <div className="flex flex-col items-center md:items-start gap-4">
                  <button
                    onClick={() => handleBookmarkToggle(video)}
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

export default GraphicDesign;

