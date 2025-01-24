import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import Navbar from './Navbar';

const Dashboard = () => {
  const { userDetails } = useAuth(); // Get user details from context
  
  // Load initial profile data from localStorage or fallback to userDetails
  const [profileData, setProfileData] = useState(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profileData'));
    return savedProfile || {
      name: userDetails?.name || 'Default Name',
      email: userDetails?.email || 'default@example.com',
      bio: '',
      profileImage: '',
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(
    JSON.parse(localStorage.getItem('bookmarkedVideos')) || []
  );

  // Save profile data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileData]);

  // Update Profile Image
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Profile Update
  const handleProfileUpdate = () => {
    setIsEditing(false);
    // The changes are already saved in localStorage via useEffect
  };

  // Handle input change (bio)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Bookmarked Videos
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedVideos'));
    if (storedBookmarks) {
      setBookmarkedVideos(storedBookmarks);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Profile Section */}
          <div className="flex items-center mb-8 bg-[#275d60] p-12 text-white rounded-lg">
            <img
              src={profileData.profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full mr-8"
            />
            <div>
              {/* Name and Email from User Details */}
              <h2 className="text-3xl font-bold">{userDetails?.name || profileData.name}</h2>
              <p className="text-lg">{userDetails?.email || profileData.email}</p>
              {isEditing ? (
                <textarea
                  className="mt-4 p-2 w-full rounded-md text-black"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  placeholder="Update your bio"
                />
              ) : (
                <p className="mt-4 text-white">{profileData.bio}</p>
              )}
              {isEditing ? (
                <button
                  className="bg-white text-[#275d60] px-4 py-2 rounded-md mt-4"
                  onClick={handleProfileUpdate}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="bg-white text-[#275d60] px-4 py-2 rounded-md mt-4"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Image Upload */}
          {isEditing && (
            <div className="mb-6">
              <input
                type="file"
                onChange={handleProfileImageChange}
                className="mb-4"
              />
            </div>
          )}

          {/* Bookmarked Videos Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Bookmarked Videos</h3>
            {bookmarkedVideos.length === 0 ? (
              <p className="text-lg text-gray-600">No bookmarked videos yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-8 h-8">
                {bookmarkedVideos.map((video) => (
                  <div key={video.id} className="flex flex-col items-center bg-white p-6 rounded-md shadow-md">
                    <iframe
                      className="w-full h-64"
                      src={video.src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h4 className="text-xl font-semibold mt-4">{video.title}</h4>
                    <p className="text-gray-600 mt-2">{video.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
