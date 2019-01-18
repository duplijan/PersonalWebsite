import React from "react";
import styled from "styled-components";
import {media} from "../media/media";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {AnimatedContainer, AnimatedTitle, AnimatedText} from "../animation";

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
          <br />
          <P light>
            <FontAwesomeIcon icon={faMapPin} style={{marginRight: "10px"}} />
            London, United Kingdom
          </P>
        </AnimatedText>
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
  width: 80%;
  ${media.tablet`width: 100%`}
  ${media.tablet`text-align: justify`}
`;
export const P = styled.p`
  letter-spacing: 1.2px;
  display: inline-block;
  color: ${props => (props.light ? " #e1e1e1" : "#BEBEBE")};
  padding: 5px;
`;
