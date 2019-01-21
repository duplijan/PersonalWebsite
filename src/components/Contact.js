import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {Wrapper, Title, Content, P} from "./About";
import {
  AnimatedContainer,
  AnimatedTitle,
  AnimatedText,
  AnimatedIcon
} from "../animation";

const Contact = () => (
  <AnimatedContainer>
    <Wrapper>
      <AnimatedTitle>
        <Title>Contact me</Title>
      </AnimatedTitle>
      <Content>
        <AnimatedText>
          <P>
            Whether you would like my services for a project, get extra
            information on any of my work I would love to hear from you. Just
            give me a call or send me an email
          </P>
        </AnimatedText>
        <br />
        <AnimatedText>
          <P>
            <FontAwesomeIcon icon={faPhone} style={{marginRight: "10px"}} />
            07821416015
          </P>
        </AnimatedText>
        <AnimatedText>
          <P>
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "10px"}} />
            duplinszkijan@gmail.com
          </P>
        </AnimatedText>
        <AnimatedText>
          <P>
            <FontAwesomeIcon icon={faMapPin} style={{marginRight: "10px"}} />
            London, United Kingdom
          </P>
        </AnimatedText>
        <br />
        <AnimatedText>
          <P light> get in touch on social media:</P>
        </AnimatedText>

        <IconContainer>
          <AnimatedIcon style={{display: "inline-block"}}>
            <Icon>
              <A href="https://www.linkedin.com/in/jan-duplinszki-517288168/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </A>
            </Icon>
          </AnimatedIcon>
          <AnimatedIcon>
            <Icon>
              <A href="https://www.instagram.com/dupli_jan/">
                <FontAwesomeIcon icon={faInstagram} />
              </A>
            </Icon>
          </AnimatedIcon>
          <AnimatedIcon>
            <Icon>
              <A href="https://github.com/duplijan">
                <FontAwesomeIcon icon={faGithub} />
              </A>
            </Icon>
          </AnimatedIcon>
        </IconContainer>
      </Content>
    </Wrapper>
  </AnimatedContainer>
);

export default Contact;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 30px;
`;
export const Icon = styled.span`
  flex: 1;
  margin: 0 10px;
  font-size: 1.5em;
  color: #ababab;
`;
const A = styled.a`
  color: #ababab;
  text-decoration: none;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
