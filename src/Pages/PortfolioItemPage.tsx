import React from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section.tsx";
import ProjectDescription from "../components/ProjectDescription.tsx";
import FourImagesInRow from "../components/FourImagesInRow.tsx";
import TwoImagesInRow from "../components/TwoImagesInRow.tsx";
import TextBlock from "../components/TextBlock.tsx";
import CardGrid from "../components/CardGrid.tsx";
import { commercialsData, petData } from "../navigationData.ts";
import { Typography } from "@mui/material";

const PortfolioItemPage = () => {
  const { id } = useParams();

  const details = [...commercialsData, ...petData].find(
    (data) => data.id === Number(id)
  );
  if (!details) {
    return (
      <Section isLight={false}>
        <Typography
          variant="h3"
          sx={{ color: "black", textAlign: "center", my: 2 }}
        >
          oops, somerthing went wrong!!!
        </Typography>
      </Section>
    );
  }

  const renderScreenshorts = () => {
    if (details?.chipTitle === "Mobile") {
      return (
        <Section isLight={false}>
          <FourImagesInRow details={details} />
        </Section>
      );
    } else
      return (
        <Section isLight={false}>
          <TwoImagesInRow details={details} />
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
        <CardGrid list={commercialsData} />
      </Section>
    </>
  );
};

export default PortfolioItemPage;
