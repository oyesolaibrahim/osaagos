import React, { useState } from 'react';

const AdminRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {
      fullName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      profilePicture: '',
      socialMediaLinks: {
        linkedIn: '',
        facebook: '',
        twitter: '',
        instagram: ''
      },
      timestamps: ''
    },
    educationalDetails: {
      institutionName: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      additionalCertifications: '',
      honorsAndAwards: '',
      clubsAndSocieties: ''
    },
    professionalDetails: {
      currentJobTitle: '',
      currentEmployer: '',
      previousJobs: '',
      skills: '',
      professionalCertifications: '',
      professionalAchievements: '',
      industry: '',
      professionalWebsite: ''
    }
  });

  const handleChange = (section, key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: value
      }
    }));
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const progress = step === 1 ? 40 : step === 2 ? 70 : 100;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Registration</h1>
        <div className="relative w-12 h-12">
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-gray-300"
            />
            <circle
              cx="50%"
              cy="50%"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-blue-500"
              strokeDasharray="125.6"
              strokeDashoffset={125.6 - (125.6 * progress) / 100}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm">
            {progress}%
          </div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-xl mb-4">Personal Details</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              value={formData.personalDetails.fullName}
              onChange={e => handleChange('personalDetails', 'fullName', e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={formData.personalDetails.email}
              onChange={e => handleChange('personalDetails', 'email', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input"
              value={formData.personalDetails.phoneNumber}
              onChange={e => handleChange('personalDetails', 'phoneNumber', e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="input"
              value={formData.personalDetails.dateOfBirth}
              onChange={e => handleChange('personalDetails', 'dateOfBirth', e.target.value)}
              required
            />
            <select
              className="input"
              value={formData.personalDetails.gender}
              onChange={e => handleChange('personalDetails', 'gender', e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Address"
              className="input"
              value={formData.personalDetails.address}
              onChange={e => handleChange('personalDetails', 'address', e.target.value)}
              required
            />
            <input
              type="file"
              placeholder="Profile Picture"
              className="input"
              onChange={e => handleChange('personalDetails', 'profilePicture', e.target.files[0])}
              required
            />
            <input
              type="url"
              placeholder="LinkedIn"
              className="input"
              value={formData.personalDetails.socialMediaLinks.linkedIn}
              onChange={e => handleChange('personalDetails', 'socialMediaLinks', { ...formData.personalDetails.socialMediaLinks, linkedIn: e.target.value })}
            />
            <input
              type="url"
              placeholder="Facebook"
              className="input"
              value={formData.personalDetails.socialMediaLinks.facebook}
              onChange={e => handleChange('personalDetails', 'socialMediaLinks', { ...formData.personalDetails.socialMediaLinks, facebook: e.target.value })}
            />
            <input
              type="url"
              placeholder="Twitter"
              className="input"
              value={formData.personalDetails.socialMediaLinks.twitter}
              onChange={e => handleChange('personalDetails', 'socialMediaLinks', { ...formData.personalDetails.socialMediaLinks, twitter: e.target.value })}
            />
            <input
              type="url"
              placeholder="Instagram"
              className="input"
              value={formData.personalDetails.socialMediaLinks.instagram}
              onChange={e => handleChange('personalDetails', 'socialMediaLinks', { ...formData.personalDetails.socialMediaLinks, instagram: e.target.value })}
            />
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl mb-4">Educational Details</h2>
          <form>
            <input
              type="text"
              placeholder="Institution Name"
              className="input"
              value={formData.educationalDetails.institutionName}
              onChange={e => handleChange('educationalDetails', 'institutionName', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Degree"
              className="input"
              value={formData.educationalDetails.degree}
              onChange={e => handleChange('educationalDetails', 'degree', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Field of Study"
              className="input"
              value={formData.educationalDetails.fieldOfStudy}
              onChange={e => handleChange('educationalDetails', 'fieldOfStudy', e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Graduation Year"
              className="input"
              value={formData.educationalDetails.graduationYear}
              onChange={e => handleChange('educationalDetails', 'graduationYear', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Additional Certifications"
              className="input"
              value={formData.educationalDetails.additionalCertifications}
              onChange={e => handleChange('educationalDetails', 'additionalCertifications', e.target.value)}
            />
            <input
              type="text"
              placeholder="Honors and Awards"
              className="input"
              value={formData.educationalDetails.honorsAndAwards}
              onChange={e => handleChange('educationalDetails', 'honorsAndAwards', e.target.value)}
            />
            <input
              type="text"
              placeholder="Clubs and Societies"
              className="input"
              value={formData.educationalDetails.clubsAndSocieties}
              onChange={e => handleChange('educationalDetails', 'clubsAndSocieties', e.target.value)}
            />
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl mb-4">Professional Details</h2>
          <form>
            <input
              type="text"
              placeholder="Current Job Title"
              className="input"
              value={formData.professionalDetails.currentJobTitle}
              onChange={e => handleChange('professionalDetails', 'currentJobTitle', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Current Employer"
              className="input"
              value={formData.professionalDetails.currentEmployer}
              onChange={e => handleChange('professionalDetails', 'currentEmployer', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Previous Jobs"
              className="input"
              value={formData.professionalDetails.previousJobs}
              onChange={e => handleChange('professionalDetails', 'previousJobs', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Skills"
              className="input"
              value={formData.professionalDetails.skills}
              onChange={e => handleChange('professionalDetails', 'skills', e.target.value)}
                required
                />
                <input
                type="text"
                placeholder="Professional Certifications"
                className="input"
                value={formData.professionalDetails.professionalCertifications}
                onChange={e => handleChange('professionalDetails', 'professionalCertifications', e.target.value)}
                />
                <input
                type="text"
                placeholder="Professional Achievements"
                className="input"
                value={formData.professionalDetails.professionalAchievements}
                onChange={e => handleChange('professionalDetails', 'professionalAchievements', e.target.value)}
                />
                <input
                type="text"
                placeholder="Industry"
                className="input"
                value={formData.professionalDetails.industry}
                onChange={e => handleChange('professionalDetails', 'industry', e.target.value)}
                />
                <input
                type="url"
                placeholder="Professional Website"
                className="input"
                value={formData.professionalDetails.professionalWebsite}
                onChange={e => handleChange('professionalDetails', 'professionalWebsite', e.target.value)}
                />
                </form>
                </div>
                )}
                  <div className="flex justify-between mt-4">
                    {step > 1 && (
                      <button className="btn" onClick={handleBack}>
                        Back
                      </button>
                    )}
                    {step < 3 && (
                      <button className="btn" onClick={handleNext}>
                        Next
                      </button>
                    )}
                  </div>
                </div>
);
};

export default AdminRegistration