import React, { useState } from 'react';

const donations = [
  { id: 1, title: 'Support Alumni Events', amount: '50 USD', description: 'Help fund upcoming alumni events and gatherings.' },
  { id: 2, title: 'Scholarship Fund', amount: '100 USD', description: 'Contribute to scholarships for deserving alumni.' },
];

const Main = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleDonate = (donation) => {
    setSelectedDonation(donation);
  };

  return (
    <div className="p-6 bg-gray-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Donations</h1>
        <p className="text-gray-600">Make a difference with your generous contributions.</p>
      </header>
      <ul className="space-y-4">
        {donations.map(donation => (
          <li key={donation.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{donation.title}</h2>
            <p className="text-gray-600">Amount: {donation.amount}</p>
            <p className="text-sm text-gray-500">{donation.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => handleDonate(donation)}
            >
              Donate Now
            </button>
          </li>
        ))}
      </ul>
      {selectedDonation && (
        <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-md">
          <h2 className="text-xl font-semibold">Thank You!</h2>
          <p className="text-gray-700">You have chosen to donate to {selectedDonation.title}. We appreciate your generosity!</p>
        </div>
      )}
    </div>
  );
};

export default Main;
