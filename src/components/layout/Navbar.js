import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {media} from "../../media/media";

const Navbar = () => (
  <Wrapper>
    <Navigation>
      <NavItem>
        <StyledLink to="/about">about me</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/projects">projects</StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/contact">contact</StyledLink>
      </NavItem>
    </Navigation>
  </Wrapper>
);

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;
const Navigation = styled.ul`
  list-style: none;
  display: block;
`;
const NavItem = styled.li`
  display: inline-block;
  position: relative;
  margin: 0 20px;
  ${media.largePhone`margin: 0 10px`}
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #898989;
  padding: 0 0 3px 0;
  border-image: linear-gradient(to right, #f0f2f0, #a1ffce);
  border-image-slice: 1;
  font-style: italic;
  transform: scale(1)
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #fff;
    border-bottom: 3px solid #ccc;
  }
  &.active {
    color: #fff;
    border-bottom: 3px solid #ccc;
  }
`;
