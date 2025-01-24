import React, { useState, useEffect } from 'react';

const WebDevelopmentVideoSection = () => {
  const videos = [
    {
      id: 1,
      title: 'HTML Basics for Beginners',
      description:
        'This video provides a beginner-friendly introduction to the core concepts of web development, including HTML, CSS, and JavaScript. Learn how to create your first webpage and style it to look professional.',
      src: 'https://www.youtube.com/embed/dD2EISBDjWM?si=DVyGZRVOR9pPa874',
    },
    {
      id: 2,
      title: 'CSS Fundamentals: Getting Started',
      description:
        'Learn how to use CSS to style your webpage, understand selectors, box model, flexbox, and more in this beginner-friendly tutorial.',
      src: 'https://www.youtube.com/embed/Q--CGvbvY3k?si=g6I9SStrIO7aDDiA',
    },
    {
      id: 3,
      title: 'JavaScript Intro: What You Need to Know',
      description:
        'Understand the basics of JavaScript, how it works in the browser, and how you can use it to create interactive webpages.',
      src: 'https://www.youtube.com/embed/hdI2bqOjy3c',
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
    <section id="video-section" className="py-16 bg-[#275d60] text-white w-full">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Web Development Video Tutorials</h3>
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

export default WebDevelopmentVideoSection;
