import React from 'react';

const ProfileDisplay = ({ profileData }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>

      <div className="mb-4">
        <h2 className="text-xl mb-2">Personal Details</h2>
        <p><strong>Full Name:</strong> {profileData.personalDetails.fullName}</p>
        <p><strong>Email:</strong> {profileData.personalDetails.email}</p>
        <p><strong>Phone Number:</strong> {profileData.personalDetails.phoneNumber}</p>
        <p><strong>Date of Birth:</strong> {profileData.personalDetails.dateOfBirth}</p>
        <p><strong>Gender:</strong> {profileData.personalDetails.gender}</p>
        <p><strong>Address:</strong> {profileData.personalDetails.address}</p>
        <p><strong>Profile Picture:</strong> <img src={profileData.personalDetails.profilePicture} alt="Profile" /></p>
        <p><strong>LinkedIn:</strong> {profileData.personalDetails.socialMediaLinks.linkedIn}</p>
        <p><strong>Facebook:</strong> {profileData.personalDetails.socialMediaLinks.facebook}</p>
        <p><strong>Twitter:</strong> {profileData.personalDetails.socialMediaLinks.twitter}</p>
        <p><strong>Instagram:</strong> {profileData.personalDetails.socialMediaLinks.instagram}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl mb-2">Educational Details</h2>
        <p><strong>Institution Name:</strong> {profileData.educationalDetails.institutionName}</p>
        <p><strong>Degree:</strong> {profileData.educationalDetails.degree}</p>
        <p><strong>Field of Study:</strong> {profileData.educationalDetails.fieldOfStudy}</p>
        <p><strong>Graduation Year:</strong> {profileData.educationalDetails.graduationYear}</p>
        <p><strong>Additional Certifications:</strong> {profileData.educationalDetails.additionalCertifications}</p>
        <p><strong>Honors and Awards:</strong> {profileData.educationalDetails.honorsAndAwards}</p>
        <p><strong>Clubs and Societies:</strong> {profileData.educationalDetails.clubsAndSocieties}</p>
      </div>

      <div>
        <h2 className="text-xl mb-2">Professional Details</h2>
        <p><strong>Current Job Title:</strong> {profileData.professionalDetails.currentJobTitle}</p>
        <p><strong>Current Employer:</strong> {profileData.professionalDetails.currentEmployer}</p>
        <p><strong>Previous Jobs:</strong> {profileData.professionalDetails.previousJobs}</p>
        <p><strong>Skills:</strong> {profileData.professionalDetails.skills}</p>
        <p><strong>Professional Certifications:</strong> {profileData.professionalDetails.professionalCertifications}</p>
        <p><strong>Professional Achievements:</strong> {profileData.professionalDetails.professionalAchievements}</p>
        <p><strong>Industry:</strong> {profileData.professionalDetails.industry}</p>
        <p><strong>Professional Website:</strong> {profileData.professionalDetails.professionalWebsite}</p>
      </div>
    </div>
  );
};

export default ProfileDisplay;