import React, { useState } from 'react';

const jobListings = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Ibadan', type: 'Full-time', description: 'Build and maintain user interfaces using React.' },
  { id: 2, title: 'Backend Developer', company: 'Data Inc', location: 'Lagos', type: 'Part-time', description: 'Develop server-side logic and databases.' },
  // Add more job listings as needed
];

const Main = () => {
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  const handleSearch = () => {
    const results = jobListings.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredJobs(results);
  };

  return (
    <div className="p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Job Board</h1>
        <p className="text-gray-600">Find your next career opportunity here.</p>
      </header>
      <div className="mb-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
          placeholder="Search for jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul className="space-y-4">
        {filteredJobs.map(job => (
          <li key={job.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-gray-500">{job.type}</p>
            <p className="mt-2">{job.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Apply Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
