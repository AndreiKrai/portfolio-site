import React from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section.tsx";
import ProjectDescription from "../components/ProjectDescription.tsx";
import FourImagesInRow from "../components/FourImagesInRow.tsx";
import TwoImagesInRow from "../components/TwoImagesInRow.tsx";
import TextBlock from "../components/TextBlock.jsx";
import CardGrid from "../components/CardGrid.tsx";
import { commercialsData, petData } from "../navigationData.ts";

const PortfolioItemPage = () => {
  const { id } = useParams();

  const details = commercialsData.find((data) => data.id === Number(id));
  const renderScreenshorts = () => {
    if (details?.chipTitle === "Mobile") {
      return (
        <Section isLight={false}>
          <FourImagesInRow details={details} />
          <TextBlock />
        </Section>
      );
    } else
      return (
        <Section isLight={false}>
          <TwoImagesInRow details={details}/>
          <TextBlock />
        </Section>
      );
  };
  return (
    <>
      <Section isLight={true} paddingBottom={0}>
        <>
          <ProjectDescription details={details} />
        </>
      </Section>
      {renderScreenshorts()}
      <Section title={"CHECK OTHER PROJECTS"} isLight={true}>
        <CardGrid list={petData} />
      </Section>
    </>
  );
};

export default PortfolioItemPage;
