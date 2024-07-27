import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult() {
    const dummyAlumni = {
        fullName: 'Ibrahim',
        email: 'ibrahim@example.com',
        currentJobTitle: 'Product Manager',
        currentEmployer: 'Innovate Inc.',
        profilePicture: 'https://via.placeholder.com/150',
    };

    return (
        <div className="p-10">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-40 p-4" style={{ backgroundImage: `url('https://via.placeholder.com/1200x400')` }}>
                    <div className="flex justify-center items-center h-full">
                        <img className="h-24 w-24 rounded-full border-4 border-white shadow-lg" src={dummyAlumni.profilePicture} alt="Profile" />
                    </div>
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-semibold mb-2">{dummyAlumni.fullName}</h1>
                    <p className="text-gray-700 mb-4">{dummyAlumni.email}</p>
                    <p><strong>Current Job:</strong> {dummyAlumni.currentJobTitle}</p>
                    <p><strong>Employer:</strong> {dummyAlumni.currentEmployer}</p>
                    <Link to="/chat" className="block w-full mt-4 text-center text-slate-100 text-base px-4 py-2 font-semibold shadow-sm bg-orange-400 hover:bg-orange-500">
                        Chat
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
