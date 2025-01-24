import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const DigitalMarketing = () => {
  const videos = [
    {
      id: 10,
      title: 'How to become a digital marketer',
      description:
        'This Edureka video 𝐇𝐨𝐰 𝐭𝐨 𝐛𝐞𝐜𝐨𝐦𝐞 𝐚 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐌𝐚𝐫𝐤𝐞𝐭𝐞𝐫 will guide you through the steps to learn and have a successful career in Digital Marketing. This video will help you to become a Digital Marketing in 2023.',
      src: 'https://www.youtube.com/embed/RPw51rZwKkM?si=myB0OqEX767ffhei',
    },
    {
      id: 11,
      title: 'What is Digital marketing: Getting Started',
      description:
        'This Edureka "What is Digital Marketing" video will help you with the basic concepts of Digital Marketing and how to build your career in this field. Below are the topics covered in this Digital Marketing Tutorial For Beginners:',
      src: 'https://www.youtube.com/embed/s7sUDQni0LI?si=PdxsQPAubbTI98x7',
    },
    {
      id: 12,
      title: 'How to Create a Digital Marketing Strategy?',
      description:
        'This Edureka "Digital Marketing Strategy" video will help in analyzing how to create a good Digital Marketing Strategy. Below are the topics covered in this Digital Marketing Strategy:',
      src: 'https://www.youtube.com/embed/sDoFp1vi4nY?si=JqF94vnpMsgn0GOh',
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
    <section id="video-section" className="py-10  bg-[#275d60] text-white w-full">
    <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Digital Marketing Video Tutorials</h3>
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

export default DigitalMarketing;
