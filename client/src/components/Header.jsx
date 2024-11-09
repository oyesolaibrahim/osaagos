import { Link, useLocation } from "react-router-dom";
import logo from "../assets/osaagoslogo.png";
import logo2 from "../assets/os.svg";
import React, { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const dashboard = location.pathname === "/dashboard";
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    // Check if the search query is at least 3 characters
    if (searchQuery.length < 3) {
      setErrorMessage('Please enter at least 3 letters to search.');
      return;
    }
    
    setErrorMessage(''); // Clear any previous error messages
  
    fetch(`http://localhost:5000/api/search?search=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Map through the data array to get all full names
          const results = data.data.map(item => item.personalDetails.fullName);
          setSearchResults(results); // Set search results
          console.log(results);
        } else {
          console.log("Search failed:", data.message);
          setSearchResults([]); // Clear results if search fails
        }
      })
      .catch((error) => {
        console.error("Error during search:", error);
        setErrorMessage('An error occurred during the search.'); // Set error message for fetch error
      });
  };
  

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    
    // Perform search only if the length of the query is 3 or more
    if (e.target.value.length >= 3) {
      setErrorMessage(''); // Clear any previous error messages
      handleSearch(); // Perform search on input change
    } else {
      setSearchResults([]); // Clear results if input is less than 3 characters
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search on Enter key press
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <>
      <header className="sticky top-0 z-30">
        {/* Top Bar */}
        <div className={`bg-blue-800 flex justify-between items-center ${dashboard ? '' : 'mb-3'} text-white py-3`}>
          <Link to="/" aria-label="Home">
            <div className={`${!dashboard && "hidden"} mx-10 flex items-center space-x-2`}>
              <img src={logo2} alt="OSAAGOS Logo" className="h-10" />
              <h1 className="text-2xl font-bold">OSAAGOS</h1>
            </div>
          </Link>
          <div className="flex items-center space-x-4 mx-10">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search alumni..."
                className="px-4 py-2 rounded-lg text-black"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Trigger search on Enter key press
                aria-label="Search alumni"
              />
              <button
                onClick={handleSearch}
                className="absolute right-0 top-0 px-4 py-2 bg-orange-400 text-white rounded-lg"
              >
                Search
              </button>
              {/* Search Results Dropdown */}
              {searchResults.length > 0 ? (
                <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto">
                  {searchResults.map((result) => (
                    <li key={result.id} className="p-2 hover:bg-gray-200">
                      <Link to={`/search/${result.id}`} className="block text-black">{result}</Link>
                    </li>
                  ))}
                </ul>
              ) : searchQuery && searchQuery.length >= 3 ? (
                <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 p-2 text-center text-gray-500">
                  No results found
                </div>
              ) : null}
              {/* Error Message */}
              {errorMessage && (
                <div className="absolute left-0 right-0 bg-red-100 border border-red-400 rounded-lg mt-1 p-2 text-center text-red-600">
                  {errorMessage}
                </div>
              )}
            </div>
            {/* Navigation Links */}
            <Link to="/login" className="bg-orange-400 px-5 py-2 rounded-lg list-none">Login</Link>
            <Link to="/sign-up" className="px-5 py-2 hover:bg-orange-400 rounded-lg list-none">Register</Link>
          </div>
          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="block md:hidden p-2">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        {!dashboard && (
          <div className={`flex-col md:flex md:flex-row md:items-center px-10 bg-white border-t border-gray-200 py-3 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <Link to="/" aria-label="Home" className="flex items-center space-x-2 mb-2 md:mb-0">
              <img src={logo} alt="OSAAGOS Logo" className="h-10" />
              <h1 className="text-2xl font-bold text-blue-800">OSAAGOS</h1>
            </Link>
            <nav className="flex flex-col md:flex-row md:space-x-5">
              <Link to="/" className={`py-1 ${location.pathname === "/" ? "font-bold" : ""}`}>Home</Link>
              <Link to="/aboutus" className={`py-1 ${location.pathname === "/aboutus" ? "font-bold" : ""}`}>About Us</Link>
              <Link to="/events" className={`py-1 ${location.pathname === "/events" ? "font-bold" : ""}`}>Events</Link>
              <Link to="/news" className={`py-1 ${location.pathname === "/news" ? "font-bold" : ""}`}>News & Announcements</Link>
              <Link to="/jobs" className={`py-1 ${location.pathname === "/jobs" ? "font-bold" : ""}`}>Job Board</Link>
              <Link to="/donations" className={`py-1 ${location.pathname === "/donations" ? "font-bold" : ""}`}>Donations</Link>
              <Link to="/media" className={`py-1 ${location.pathname === "/media" ? "font-bold" : ""}`}>Media Gallery</Link>
              <Link to="/contactus" className={`py-1 ${location.pathname === "/contactus" ? "font-bold" : ""}`}>Contact Us</Link>
              <Link to="/dashboard" className={`py-1 ${location.pathname === "/dashboard" ? "font-bold" : ""}`}>Admin Dashboard</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
