import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import DashboardOverview from './components/AdminDashboard/AdminDashboard';
import AboutUs from './components/AboutUs/AboutUs';
import SingleProfile from './components/SingleProfile';
import ContactUs from './components/ContactUs/ContactUs';
import NewsAndAnnouncements from './components/NewsAndAnnouncements/NewsAnnouncements';
import AlumniProfile from './components/AlumniProfile';
import Chat from './components/Chat';
import JobBoard from './components/JobBoard/JobBoard';
import Donations from './components/Donations/Donations';
import MediaGallery from './components/MediaGallery/MediaGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardOverview />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/myprofile' element={<SingleProfile />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/news' element={<NewsAndAnnouncements />} />
        <Route path='/profile' element={<AlumniProfile />} />
        <Route path='/jobs' element={<JobBoard />} />
        <Route path='/donations' element={<Donations />} />
        <Route path='/media' element={<MediaGallery />} />
        <Route path='/chat/:name' element={<Chat sender="CurrentUser" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
