const Alumni = require("../models/alumni.model"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const jwtDecode = require("jwt-decode");

const addAlumni = (req, res) => {
    const requiredFields = [
        'fullName', 'email', 'password', 'phoneNumber', 'dateOfBirth', 'gender', 'address',
        'institutionName', 'degree', 'fieldOfStudy', 'graduationYear',
        'currentJobTitle', 'currentEmployer', 'previousJobs', 'skills'
    ];

    // Check for missing fields except profilePicture, handled by multer
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: `Required field missing: ${field}` });
        }
    }

    // Check if file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'Profile picture is required.' });
    }
    const profilePicturePath = req.file ? req.file.path : null;

    // Hash the password
    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    // Construct the alumni data with file path for profile picture
    const alumniData = {
        personalDetails: {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            address: req.body.address,
            password: hashPassword,
            profilePicture: profilePicturePath,  // Save file path here
            socialMediaLinks: {
                linkedin: req.body.linkedin,
                facebook: req.body.facebook,
                twitter: req.body.twitter,
                instagram: req.body.instagram
            },
        },
        educationalDetails: {
            institutionName: req.body.institutionName,
            degree: req.body.degree,
            fieldOfStudy: req.body.fieldOfStudy,
            graduationYear: req.body.graduationYear,
            additionalCertifications: req.body.additionalCertifications,
            honorsAndAwards: req.body.honorsAndAwards,
            clubsAndSocieties: req.body.clubsAndSocieties
        },
        professionalDetails: {
            currentJobTitle: req.body.currentJobTitle,
            currentEmployer: req.body.currentEmployer,
            previousJobs: req.body.previousJobs,
            skills: req.body.skills,
            professionalCertifications: req.body.professionalCertifications,
            professionalAchievements: req.body.professionalAchievements,
            industry: req.body.industry,
            professionalWebsite: req.body.professionalWebsite
        }
    };

    // Check if alumni already exists, then create a new entry
    Alumni.findOne({ email: req.body.email })
        .then(alumni => {
            if (alumni) {
                return res.status(400).json({ message: "An alumni with the same email address already exists." });
            }
            return Alumni.create(alumniData);
        })
        .then((alumni) => {
            res.status(200).json({ message: "created successfully", alumni });
        })
        .catch((err) => {
            res.status(400).json({ message: "Error", err });
        });
};



const alumniLogin = (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(404).json({message: "Email and password are required."});
    }

    Alumni.findOne({ "personalDetails.email": email })
    .then((alumni) => {
        if (!alumni) {
            return res.status(404).json({ message: "Alumni account with the given email does not exist." });
        }

        if (!bcrypt.compareSync(password, alumni.personalDetails.password)) {
            return res.status(401).json({ message: "Incorrect Password." });
        }

        const alumniObj = { id: alumni._id };
        const token = jwt.sign(alumniObj, "SECRET_KEY");

        res.status(200).json({ message: "Logged In", token, alumni });
    })
    .catch(error => {
        console.error("Error during alumni login:", error);
        res.status(500).json({ message: "An error occurred while logging in.", error });
    });
}
const alumni = (req, res) => {
   const {userEmail} = req.query
    Alumni.findOne({ "personalDetails.email": userEmail })
    .then((alumni) => {
          res.status(200).json({message: "Alumni gotten",alumni});
    })
    .catch(error => {
        console.error(error)
        res.status(404).json({message: "Alumni account not found", error});
    })
}
const searchAlumni = (req, res) => {
    const { search } = req.query;

    if (!search || search.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Please enter at least 3 letters to search.',
        });
    }

    Alumni.find({ "personalDetails.fullName": { $regex: search, $options: 'i' } }) // Case-insensitive search
        .then((results) => {
            res.status(200).json({
                success: true,
                data: results,
            });
        })
        .catch((error) => {
            console.error("Error fetching alumni:", error);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
            });
        });
};


module.exports = {
    addAlumni,
    alumniLogin,
    alumni,
    searchAlumni
};
