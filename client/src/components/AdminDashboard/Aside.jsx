import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <>
    <aside className="bg-gray-800 text-white w-64 min-h-screen absolute">
      <ul className="">
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">User Management</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Alumni Profiles</a></li></Link>
        <Link to="/eventform"><li className="p-4 hover:bg-gray-600"><a href="#">Events Management</a></li></Link>
        <Link to="/newsform"><li className="p-4 hover:bg-gray-600"><a href="#">News and Announcements</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Job Board</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Donations</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Media Gallery</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Analytics</a></li></Link>
        <Link><li className="p-4 hover:bg-gray-600"><a href="#">Settings</a></li></Link>
      </ul>
    </aside>
    </>
    
  );
}

export default Aside;
