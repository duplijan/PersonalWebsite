import React from "react";
import styled from "styled-components";
import {media} from "../media/media";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import reduxIcon from "../images/redux-icon.svg";
import {IconContainer, Icon} from "./Contact";
import {
  AnimatedContainer,
  AnimatedTitle,
  AnimatedText,
  AnimatedIcon
} from "../animation";

const About = () => (
  <AnimatedContainer>
    <Wrapper>
      <AnimatedTitle>
        <Title>About me</Title>
      </AnimatedTitle>
      <Content>
        <AnimatedText>
          <P>
            Hi, my name is Jan Duplinszki. I’m a self-taught front-end web
            developer and UI designer enjoying creating a beautiful design,
            modern websites and web applications. Passionate about learning new
            skills and constantly developing the existing ones and continuous
            self-improvement and personal development in all aspects of my life.
            Interested in new web technologies and tools, UI and UX design,
            photography, traveling and Brazilian Jiu Jitsu.
          </P>
        </AnimatedText>
        <br />
        <AnimatedText>
          <P light> tech I use: </P>
        </AnimatedText>
        <AnimatedContainer>
          <IconContainer>
            <AnimatedIcon style={{display: "inline-block"}}>
              <Icon>
                <FontAwesomeIcon icon={faHtml5} />
              </Icon>
            </AnimatedIcon>
            <AnimatedIcon>
              <Icon>
                <FontAwesomeIcon icon={faCss3Alt} />
              </Icon>
            </AnimatedIcon>
            <AnimatedIcon>
              <Icon>
                <FontAwesomeIcon icon={faSass} />
              </Icon>
            </AnimatedIcon>
            <AnimatedIcon>
              <Icon>
                <FontAwesomeIcon icon={faJsSquare} />
              </Icon>
            </AnimatedIcon>
            <AnimatedIcon>
              <Icon>
                <FontAwesomeIcon icon={faReact} />
              </Icon>
            </AnimatedIcon>
            <AnimatedIcon>
              <ReduxIcon src={reduxIcon} />
            </AnimatedIcon>
          </IconContainer>
        </AnimatedContainer>
      </Content>
    </Wrapper>
  </AnimatedContainer>
);

export default About;

export const Wrapper = styled.div`
  width: 80%;
  max-height: 100vh;
  margin: 0 auto;
  height: auto;
  margin-top: 50px;
  overflowy: hidden;
`;
export const Title = styled.h2`
  color: #fff;
  width: 100%;
  margin: 15px auto;
  ${media.tablet`text-align: center`}
`;
export const Content = styled.div`
  width: 10 0%;
  ${media.tablet`width: 100%`}
  ${media.tablet`text-align: justify`}
`;
export const P = styled.p`
  letter-spacing: 1.2px;
  display: inline-block;
  color: ${props => (props.light ? " #e1e1e1" : "#BEBEBE")};
  padding: 5px;
`;
const ReduxIcon = styled.img.attrs({
  src: ""
})`
  width: 26px;
  height: 26px;
  margin-left: 5px;
`;
