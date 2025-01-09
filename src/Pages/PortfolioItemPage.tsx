import React from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section.tsx";
import ProjectDescription from "../components/ProjectDescription.jsx";
import FourImagesInRow from "../components/FourImagesInRow.tsx";
import TwoImagesInRow from "../components/TwoImagesInRow.jsx";
import TextBlock from "../components/TextBlock.jsx";
import CardGrid from "../components/CardGrid.tsx";
import { petData } from "../navigationData.ts";

const PortfolioItemPage = () => {
  const { id } = useParams();

  const PortfolioItemPage = {
    1: { title: "Project A", description: "Description of Project A" },
    2: { title: "Project B", description: "Description of Project B" },
    3: { title: "Project C", description: "Description of Project C" },
  };

  const details = PortfolioItemPage[id];

  // if (!details) {
  //   return <p>Portfolio item not found</p>;
  // }

  return (
    <>
      <Section isLight={true} paddingBottom={0}>
        <>
          <ProjectDescription />
        </>
      </Section>
      <Section isLight={false}>
        <>
          <TwoImagesInRow />
          <TextBlock/>
        </>
      </Section>
      <Section isLight={false}>
        <>
          <FourImagesInRow />
          <TextBlock/>

        </>
      </Section>
      <Section title={"CHECK OTHER PROJECTS"} isLight={true}><CardGrid list={petData}/></Section>

    </>
  );
};

export default PortfolioItemPage;
