import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProfile = () => {
  const { id } = useParams();
  const [alumni, setAlumni] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch the alumni details
//     axios.get(`/api/alumni/${id}`)
//       .then(response => setAlumni(response.data))
//       .catch(error => console.error('Error fetching alumni details:', error));
//   }, [id]);

//   // Search functionality
//   useEffect(() => {
//     if (searchTerm) {
//       axios.get(`/api/searchAlumni?query=${searchTerm}`)
//         .then(response => setSearchResults(response.data))
//         .catch(error => console.error('Error searching alumni:', error));
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchTerm]);

  return (
    <div className="p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Alumni Profile</h1>
        <input
          type="text"
          placeholder="Search Alumni"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full mb-4"
        />
      </header>

      {/* Search results */}
      {searchResults.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Search Results</h2>
          <ul className="list-disc pl-5">
            {searchResults.map(result => (
              <li key={result._id} className="mb-2">
                <a href={`/alumni/${result._id}`} className="text-blue-500">{result.fullName}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Alumni Details */}
      {alumni ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <img
              src={alumni.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold">{alumni.personalDetails.fullName}</h2>
              <p className="text-gray-600">{alumni.personalDetails.email}</p>
              <p className="text-gray-600">{alumni.personalDetails.phoneNumber}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
            <p><strong>Date of Birth:</strong> {alumni.personalDetails.dateOfBirth}</p>
            <p><strong>Gender:</strong> {alumni.personalDetails.gender}</p>
            <p><strong>Address:</strong> {alumni.personalDetails.address}</p>
            <p><strong>Social Media:</strong></p>
            <ul className="list-disc pl-5">
              {alumni.personalDetails.socialMediaLinks.map((link, index) => (
                <li key={index}><a href={link.url} className="text-blue-500">{link.platform}</a></li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Educational Details</h3>
            <p><strong>Institution:</strong> {alumni.educationalDetails.institutionName}</p>
            <p><strong>Degree:</strong> {alumni.educationalDetails.degree}</p>
            <p><strong>Field of Study:</strong> {alumni.educationalDetails.fieldOfStudy}</p>
            <p><strong>Graduation Year:</strong> {alumni.educationalDetails.graduationYear}</p>
            <p><strong>Additional Certifications:</strong> {alumni.educationalDetails.additionalCertifications}</p>
            <p><strong>Honors and Awards:</strong> {alumni.educationalDetails.honorsAndAwards}</p>
            <p><strong>Clubs and Societies:</strong> {alumni.educationalDetails.clubsAndSocieties}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Professional Details</h3>
            <p><strong>Current Job Title:</strong> {alumni.professionalDetails.currentJobTitle}</p>
            <p><strong>Current Employer:</strong> {alumni.professionalDetails.currentEmployer}</p>
            <p><strong>Previous Jobs:</strong> {alumni.professionalDetails.previousJobs.join(', ')}</p>
            <p><strong>Skills:</strong> {alumni.professionalDetails.skills.join(', ')}</p>
            <p><strong>Professional Certifications:</strong> {alumni.professionalDetails.professionalCertifications}</p>
            <p><strong>Professional Achievements:</strong> {alumni.professionalDetails.professionalAchievements}</p>
            <p><strong>Industry:</strong> {alumni.professionalDetails.industry}</p>
            <p><strong>Professional Website:</strong> <a href={alumni.professionalDetails.professionalWebsite} className="text-blue-500">{alumni.professionalDetails.professionalWebsite}</a></p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProfile;
