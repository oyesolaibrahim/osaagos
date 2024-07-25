import React from 'react';
import AboutFirstSection from './FirstSection';
import AboutSecondSection from './SecondSection';
import AboutThirdSection from './ThirdSection';
import AboutFourthSection from './FourthSection';


const Main = () => {
  return (
    <>
    <main className="bg-gray-100 p-6 min-h-screen">
        <AboutFirstSection/>
        <AboutSecondSection/>
        <AboutThirdSection/>
        <AboutFourthSection/>    
    </main>
    </>
  );
};

export default Main;
