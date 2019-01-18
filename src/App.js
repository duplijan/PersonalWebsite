import React from "react";
import {Route, Switch} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import {media} from "./media/media";
import {PoseGroup} from "react-pose";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";
import Navbar from "./components/layout/Navbar";
import Logo from "./components/layout/Logo";
import {AnimatedAppContainer} from "./animation";

const App = () => (
  <Route
    render={({location}) => (
      <Wrapper>
        <Navigation>
          <Navbar />
          <Logo />
        </Navigation>
        <PoseGroup>
          <AnimatedAppContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route path="/about" component={About} key="about" />
              <Route path="/projects" component={Project} key="project" />
              <Route path="/contact" component={Contact} key="contact" />
            </Switch>
          </AnimatedAppContainer>
        </PoseGroup>
      </Wrapper>
    )}
  />
);

export default App;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr;
  ${media.tablet`grid-template-columns: 1fr`}
  ${media.tablet`grid-gap: 0`}
  ${media.tablet`margin: 10px auto;`};
`;

const Navigation = styled.div`
  position: sticky;
  align-self: start;
  top: 0;
  right: 0;
  ${media.tablet`position: relative`}
`;
