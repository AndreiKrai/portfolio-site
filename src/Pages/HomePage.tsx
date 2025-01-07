import React from "react";
import HeroSection from "../components/HeroSection.tsx";
import Section from "../components/Section.tsx";
import CardGrid from "../components/CardGrid.tsx";
import { commercialsData, petData } from "../navigationData.ts";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Section title={"MY COMMERCIAL PROJECTS"}><CardGrid list={commercialsData}/></Section>
      <Section title={"MY PET PROJECTS"}><CardGrid list={petData}/></Section>

    </>
  );
};
export default HomePage;
