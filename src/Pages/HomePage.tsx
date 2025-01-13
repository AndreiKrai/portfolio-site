import React from "react";
import HeroSection from "../components/HeroSection.tsx";
import Section from "../components/Section.tsx";
import CardGrid from "../components/CardGrid.tsx";
import { commercialsData, petData } from "../navigationData.ts";
import Hero2 from "../components/Hero2.tsx";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      {/* <Hero2/> */}
      <Section title={"MY COMMERCIAL PROJECTS"} isLight={false}><CardGrid list={commercialsData}/></Section>
      <Section title={"MY PET PROJECTS"} isLight={true}><CardGrid list={petData}/></Section>
    </>
  );
};
export default HomePage;
