import React from "react";
import styled from "styled-components";
import {media} from "../media/media";
import posed from "react-pose";
import SplitText from "react-pose-text";

const AnimatedHomeTitle = posed.div({
  exit: {
    y: "50"
  },
  enter: {
    y: "0",
    beforeChildren: true,
    staggerChildren: 100
  }
});

const charPoses = {
  exit: {opacity: 0, y: -50},
  enter: {
    opacity: 1,
    y: 0
  }
};

const Home = () => (
  <AnimatedHomeTitle initialPose="exit" pose="enter">
    <Title>
      <SplitText charPoses={charPoses}>
        Front-end web developer & UI designer.
      </SplitText>
    </Title>
  </AnimatedHomeTitle>
);

export default Home;

const Title = styled.h1`
  margin-top: 50px;
  letter-spacing: 3px;
  align-self: center;
  font-size: 4.3em;
  color: #fff;
  text-align: left;
  ${media.tablet`margin-top: 0`}
  ${media.tablet`text-align: center`}
`;
