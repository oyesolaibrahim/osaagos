import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpSection = () => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: '', // renamed from dob
        gender: '',
        address: '',
        profilePicture: null,
        linkedin: '', // added individual social media links
        facebook: '',
        twitter: '',
        instagram: '',
        institutionName: '',
        degree: '',
        fieldOfStudy: '',
        graduationYear: '',
        additionalCertifications: '',
        honorsAndAwards: '',
        clubsAndSocieties: '',
        currentJobTitle: '',
        currentEmployer: '',
        previousJobs: '',
        skills: '',
        professionalCertifications: '',
        professionalAchievements: '',
        industry: '',
        professionalWebsite: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        axios.post('http://localhost:5000/api/register', formDataToSend)
            .then((result) => {
                console.log(result);
                setLoading(false);
                navigate('/login');
            })
            .catch(error => {
                setLoading(false);
                setError(error.response?.data?.message || 'An error occurred');
            });
    };

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
            setProgress(progress + 40);
        }
    };

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            setProgress(progress - 40);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProgress(100);
        handleSignup(e); 
    };

    return (
        <div className="min-h-screen p-4 sm:p-20">
            <h1 className="text-4xl text-center font-semibold mb-8">REGISTRATION FORM</h1>
            <div className="relative mb-4">
                <div className="h-3 bg-gray-300 rounded">
                    <div className="h-full bg-orange-400 rounded" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="absolute right-0 -top-1 text-sm font-semibold text-gray-700">{progress}%</p>
            </div>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                            {/* Personal Details Form Fields */}
                            <div className="sm:col-span-3">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">Full Name</label>
                                <input id="fullName" name="fullName" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                                <input id="email" name="email" type="email" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                                <input id="password" name="password" type="password" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">Confirm Password</label>
                                <input id="confirmPassword" name="confirmPassword" type="password" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">Phone Number</label>
                                <input id="phoneNumber" name="phoneNumber" type="tel" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-900">Date of Birth</label>
                                <input id="dob" name="dob" type="date" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-900">Gender</label>
                                <select id="gender" name="gender" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-900">Address</label>
                                <input id="address" name="address" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-900">Profile Picture</label>
                                <input id="profilePicture" name="profilePicture" type="file" required className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="socialMediaLinks" className="block text-sm font-medium text-gray-900">Social Media Links</label>
                                <input id="socialMediaLinks" name="socialMediaLinks" type="text" placeholder="LinkedIn, Facebook, Twitter, Instagram" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-6 flex justify-between mt-6">
                                <button type="button" className="text-base px-10 py-4 font-semibold bg-orange-400 text-white shadow-sm hover:bg-orange-500" onClick={handleNextStep}>Next</button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Educational Details</h2>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                            {/* Educational Details Form Fields */}
                            <div className="sm:col-span-3">
                                <label htmlFor="institutionName" className="block text-sm font-medium text-gray-900">Institution Name</label>
                                <input id="institutionName" name="institutionName" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="degree" className="block text-sm font-medium text-gray-900">Degree</label>
                                <input id="degree" name="degree" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-900">Field of Study</label>
                                <input id="fieldOfStudy" name="fieldOfStudy" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-900">Graduation Year</label>
                                <input id="graduationYear" name="graduationYear" type="number" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="additionalCertifications" className="block text-sm font-medium text-gray-900">Additional Certifications</label>
                                <input id="additionalCertifications" name="additionalCertifications" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="honorsAndAwards" className="block text-sm font-medium text-gray-900">Honors and Awards</label>
                                <input id="honorsAndAwards" name="honorsAndAwards" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="clubsAndSocieties" className="block text-sm font-medium text-gray-900">Clubs and Societies</label>
                                <input id="clubsAndSocieties" name="clubsAndSocieties" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-6 flex justify-between mt-6">
                                <button type="button" className="text-base px-10 py-4 font-semibold bg-orange-400 text-white shadow-sm hover:bg-orange-500" onClick={handlePrevStep}>Previous</button>
                                <button type="button" className="text-base px-10 py-4 font-semibold bg-orange-400 text-white shadow-sm hover:bg-orange-500" onClick={handleNextStep}>Next</button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Professional Details</h2>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                            {/* Professional Details Form Fields */}
                            <div className="sm:col-span-3">
                                <label htmlFor="currentJobTitle" className="block text-sm font-medium text-gray-900">Current Job Title</label>
                                <input id="currentJobTitle" name="currentJobTitle" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="currentEmployer" className="block text-sm font-medium text-gray-900">Current Employer</label>
                                <input id="currentEmployer" name="currentEmployer" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="previousJobs" className="block text-sm font-medium text-gray-900">Previous Jobs</label>
                                <input id="previousJobs" name="previousJobs" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="skills" className="block text-sm font-medium text-gray-900">Skills</label>
                                <input id="skills" name="skills" type="text" required className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="professionalCertifications" className="block text-sm font-medium text-gray-900">Professional Certifications</label>
                                <input id="professionalCertifications" name="professionalCertifications" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="professionalAchievements" className="block text-sm font-medium text-gray-900">Professional Achievements</label>
                                <input id="professionalAchievements" name="professionalAchievements" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="industry" className="block text-sm font-medium text-gray-900">Industry</label>
                                <input id="industry" name="industry" type="text" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="professionalWebsite" className="block text-sm font-medium text-gray-900">Professional Website</label>
                                <input id="professionalWebsite" name="professionalWebsite" type="url" className="block w-full h-10 border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-orange-400 sm:text-sm" />
                            </div>
                            <div className="sm:col-span-6 flex justify-between mt-6">
                                <button type="button" className="text-base px-10 py-4 font-semibold bg-orange-400 text-white shadow-sm hover:bg-orange-500" onClick={handlePrevStep}>Previous</button>
                                <button type="button" className="text-base px-10 py-4 font-semibold bg-orange-400 text-white shadow-sm hover:bg-orange-500" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {loading && <p className="text-gray-500">Submitting...</p>}
        </div>
    );
};

export default SignUpSection;
