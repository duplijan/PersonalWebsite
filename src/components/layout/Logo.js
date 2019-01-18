import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";

const Logo = () => (
  <Wrapper>
    <Link to="/">
      <Icon src={logo} />
    </Link>
  </Wrapper>
);

export default Logo;

const Wrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const Icon = styled.img.attrs({
  src: ""
})`
  width: 250px;
  height: 250px;
`;
