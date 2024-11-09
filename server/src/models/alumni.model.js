const mongoose = require("mongoose");

const personalDetailsSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    profilePicture: { type: String, required: true },  // Assuming a URL or path to the image
    socialMediaLinks: {
        linkedin: { type: String },
        facebook: { type: String },
        twitter: { type: String },
        instagram: { type: String }
    }
}, { timestamps: true });

const educationalDetailsSchema = new mongoose.Schema({
    institutionName: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    additionalCertifications: { type: String },
    honorsAndAwards: { type: String },
    clubsAndSocieties: { type: String }
});

const professionalDetailsSchema = new mongoose.Schema({
    currentJobTitle: { type: String, required: true },
    currentEmployer: { type: String, required: true },
    previousJobs: { type: String, required: true },
    skills: { type: String, required: true },
    professionalCertifications: { type: String },
    professionalAchievements: { type: String },
    industry: { type: String },
    professionalWebsite: { type: String }
});

const registrationSchema = new mongoose.Schema({
    personalDetails: { type: personalDetailsSchema, required: true },
    educationalDetails: { type: educationalDetailsSchema, required: true },
    professionalDetails: { type: professionalDetailsSchema, required: true }
}, { timestamps: true });

const Alumni = mongoose.model("Alumni", registrationSchema);

module.exports = Alumni;
