import React from "react";
import HeroSection from "../components/HeroSection.tsx";
import Section from "../components/Section.tsx";
import ActionAreaCard from "../components/Card.tsx";
import CardGrid from "../components/CardGrid.tsx";

const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Section title={"MY PORTFOLIO"}><CardGrid/></Section>
    </>
  );
};
export default HomePage;
