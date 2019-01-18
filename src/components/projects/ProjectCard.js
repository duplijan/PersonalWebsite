import React from "react";
import styled from "styled-components";
import {P} from "../About";
import todo from "../../images/todo.png";
import veg from "../../images/veg.png";
import weather from "../../images/weather.png";
import workout from "../../images/workout.png";
import {media} from "../../media/media";
import {AnimatedContainer, AnimatedCard} from "../../animation";

const ProjectCard = () => (
  <AnimatedContainer>
    <AnimatedCard>
      <Card>
        <Information>
          <ProjectTitle>myWorkout</ProjectTitle>
          <P>
            Create a new account, sign in and create your custom workout plans
          </P>
          <Tech>
            <P style={{color: "#898989", fontSize: "0.9em", padding: "5px 0"}}>
              React, Redux, Firebase, Firestore
            </P>
          </Tech>
        </Information>
        <CardImage>
          <Image src={workout} />
          <ButtonGroup>
            <Button>
              <a href="https://workout-app-1f3cb.firebaseapp.com/welcome">
                see project
              </a>
            </Button>
            <Button orange>
              <a href="https://github.com/duplijan/workout-app">source code</a>
            </Button>
          </ButtonGroup>
        </CardImage>
      </Card>
    </AnimatedCard>
    <AnimatedCard>
      <Card>
        <Information>
          <ProjectTitle>Personal task management app</ProjectTitle>
          <P>Keep track of your tasks</P>
          <Tech>
            <P style={{color: "#898989", fontSize: "0.9em", padding: "5px 0"}}>
              React, Redux, LocalStorage, CSS
            </P>
          </Tech>
        </Information>
        <CardImage>
          <Image src={todo} />
          <ButtonGroup>
            <Button>
              <a href="https://duplijan.github.io/Todo-App/">see project</a>
            </Button>
            <Button orange>
              <a href="https://github.com/duplijan/Todo-App">source code</a>
            </Button>
          </ButtonGroup>
        </CardImage>
      </Card>
    </AnimatedCard>
    <AnimatedCard>
      <Card>
        <Information>
          <ProjectTitle>Weather app</ProjectTitle>
          <P>
            Weather showing a weather in your searched location using
            openweathermap API
          </P>
          <Tech>
            <P style={{color: "#898989", fontSize: "0.9em", padding: "5px 0"}}>
              JavaScript, HTML, CSS
            </P>
          </Tech>
        </Information>
        <CardImage>
          <Image src={weather} />
          <ButtonGroup>
            <Button>
              <a href="https://duplijan.github.io/weather-app/">see project</a>
            </Button>
            <Button orange>
              <a href="https://github.com/duplijan/weather-app">source code</a>
            </Button>
          </ButtonGroup>
        </CardImage>
      </Card>
    </AnimatedCard>
    <AnimatedCard>
      <Card>
        <Information>
          <ProjectTitle>Veggie shop </ProjectTitle>
          <P>Veggie shop leading page design</P>
          <Tech>
            <P style={{color: "#898989", fontSize: "0.9em", padding: "5px 0"}}>
              HTML, SASS, JavaScript
            </P>
          </Tech>
        </Information>
        <CardImage>
          <Image src={veg} />
          <ButtonGroup>
            <Button>
              <a href="https://duplijan.github.io/Veggie-Shop/">see project</a>
            </Button>
            <Button orange>
              <a href="https://github.com/duplijan/Veggie-Shop">source code</a>
            </Button>
          </ButtonGroup>
        </CardImage>
      </Card>
    </AnimatedCard>
  </AnimatedContainer>
);

export default ProjectCard;

const Card = styled.div`
  width: 100%;
  margin: 10px 0;
  background: #282828;
  opacity: 0.9;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
  ${media.laptop`grid-template-columns: 1fr`}
`;
const Information = styled.div`
  text-align: left;
  padding: 10px;
`;
const ProjectTitle = styled.h3`
  color: #fff;
  margin: 0 0 10px 0;
  padding: 5px 0;
  border-bottom: 2px solid #898989;
`;
const Tech = styled.div`
  margin: 10px 0 0 0;
  border-top: 2px solid #898989;
`;

const CardImage = styled.div`
  text-align: center;
  position: relative;
  place-self: center;
  &:hover > * {
    opacity: 1;
  }
`;
const Image = styled.img.attrs({
  src: ""
})`
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.8;
  }
`;
const ButtonGroup = styled.div`
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Button = styled.span`
  display: block
  padding: 5px;
  margin: 5px 0;
  color: #fff;
  font-size: 0.9em;
  opacity: 0.6;
  background: ${props => (props.orange ? "#C45200" : "#C4BC00")};
  & > a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8em;
  }
  &:hover {
    opacity: 1;
  }
`;
