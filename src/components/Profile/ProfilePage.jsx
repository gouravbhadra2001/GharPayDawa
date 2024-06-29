import React, { useContext, useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseConfig';
import { AuthContext } from '../../AuthContext';
import './ProfilePage.css'; // Import your CSS file

const ProfilePage = () => {
  const { authData } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    photoURL: '',
    loggedAs: ''
  });
  const [newPhoto, setNewPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    if (authData) {
      setProfileData({
        name: authData.name || '',
        email: authData.mail || '',
        photoURL: authData.others?.photoURL || '',
        loggedAs: authData.loggedAs || ''
      });
      setPhotoURL(authData.others?.photoURL || '');
    }
  }, [authData]);

  const handleNameChange = (e) => {
    setProfileData({ ...profileData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setProfileData({ ...profileData, email: e.target.value });
  };

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setNewPhoto(e.target.files[0]);
      setPhotoURL(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSaveProfile = async () => {
    // Upload new photo if changed
    if (newPhoto) {
      const storageRef = ref(storage, `profile-images/${authData.mail}/${newPhoto.name}`);
      await uploadBytes(storageRef, newPhoto);
      const downloadURL = await getDownloadURL(storageRef);
      setProfileData({ ...profileData, photoURL: downloadURL });
      setNewPhoto(null);

      // Update Firebase with new photo URL
      // Example: await updateProfile(auth.currentUser, { photoURL: downloadURL });
    }

    // Update other profile data (e.g., name, email) in Firebase
    // Example: await updateProfile(auth.currentUser, {
    //   displayName: profileData.name,
    //   email: profileData.email
    // });
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-container">
        <div className="profile-picture">
          <img src={photoURL} alt="Profile" />
          <input type="file" onChange={handlePhotoChange} />
        </div>
        <div className="profile-details">
          <div className="profile-field">
            <label>Name:</label>
            <div className="field-value">
              {newPhoto ? (
                <input type="text" value={profileData.name} onChange={handleNameChange} />
              ) : (
                <div>{profileData.name}</div>
              )}
            </div>
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <div className="field-value">
              {newPhoto ? (
                <input type="email" value={profileData.email} onChange={handleEmailChange} />
              ) : (
                <div>{profileData.email}</div>
              )}
            </div>
          </div>
          <div className="profile-field">
            <label>Logged As:</label>
            <div className="field-value">
              <div>{profileData.loggedAs}</div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default ProfilePage;
