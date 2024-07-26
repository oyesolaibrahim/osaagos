import React from 'react';
import { Link } from 'react-router-dom';

const alumniData = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    education: 'B.Sc in Computer Science, XYZ University',
    personal: 'Lives in New York, NY. Hobbies: Coding, Hiking.',
    professional: 'Software Engineer at ABC Corp.'
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    education: 'M.Sc in Physics, ABC University',
    personal: 'Lives in Los Angeles, CA. Hobbies: Reading, Traveling.',
    professional: 'Research Scientist at DEF Inc.'
  },
  {
    name: 'Alice Johnson',
    image: 'https://via.placeholder.com/150',
    education: 'B.A in Economics, DEF University',
    personal: 'Lives in Chicago, IL. Hobbies: Cooking, Painting.',
    professional: 'Economist at GHI Ltd.'
  }
];

const AlumniProfiles = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Alumni Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniData.map((alumni, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto" src={alumni.image} alt={`${alumni.name}`} />
            <h3 className="text-xl font-bold text-center mt-4">{alumni.name}</h3>
            <p className="text-center text-gray-600">{alumni.education}</p>
            <p className="mt-2 text-gray-600">{alumni.personal}</p>
            <p className="mt-2 text-gray-600">{alumni.professional}</p>
            <Link to={`/chat/${alumni.name}`} className="block bg-blue-500 text-white text-center mt-4 py-2 rounded-lg">
              Chat
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniProfiles;
