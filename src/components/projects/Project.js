import React from "react";
import styled from "styled-components";
import {Title} from "../About";
import ProjectCard from "./ProjectCard";
import {AnimatedTitle} from "../../animation";

const Project = () => (
  <Wrapper>
    <AnimatedTitle>
      <Title>Projects</Title>
    </AnimatedTitle>
    <ProjectCard />
  </Wrapper>
);

export default Project;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
`;
