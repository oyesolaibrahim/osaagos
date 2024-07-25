import React from 'react';

const Aside = () => {
  return (
    <>
    <aside className="bg-gray-800 text-white w-64 min-h-screen absolute">
      <ul className="">
        <li className="p-4 hover:bg-gray-600"><a href="#">User Management</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Alumni Profiles</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Events Management</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">News and Announcements</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Job Board</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Donations</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Media Gallery</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Analytics</a></li>
        <li className="p-4 hover:bg-gray-600"><a href="#">Settings</a></li>
      </ul>
    </aside>
    </>
    
  );
}

export default Aside;
