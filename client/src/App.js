// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import DashboardOverview from './components/AdminDashboard/AdminDashboard';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardOverview />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
