import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

const Main = () => {
    return (
    <>
        <main className="slider">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
        </main>
      </>
    );
};

export default Main;
