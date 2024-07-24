import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Main = () => {
    return (
    <>
        <main className="slider">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </main>
      </>
    );
};

export default Main;
